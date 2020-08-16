import React, { Component } from 'react';
import './Information.css';
import { inject, observer } from 'mobx-react';
import Content from '../Home/Content/Content';

@inject('store')
@observer
class InformationItem extends Component{
  render(){

    const { store, image,imageText, informationTitle, details, children, link, myNameIs} = this.props;
    var relativeLanguageText = "";
    var relativeLanguage = "";
    var relativeLibraryText = "";
    var relativeLibrary = "";
    var relativeFrameworkText = "";
    var relativeFramework = "";
    var relativeType = "";

    store.languageList.map(content => (
      content[2] === myNameIs ? relativeType = content[3][0] : "" 
    ));
  
    if(relativeType === "언어"){
      relativeLibraryText = "관련 라이브러리";
      relativeLibrary = store.languageList.map(content => (
        content[3].some(item => 
          item === "라이브러리" && myNameIs
        ) ? <Content image={content[1]} name={content[2]}></Content> : "" 
      ));

      relativeFrameworkText = "관련 프레임워크";
      relativeFramework = store.languageList.map(content => (
        content[3].some(item => 
          item === "프레임워크" && myNameIs
        ) ? <Content image={content[1]} name={content[2]}></Content> : "" 
      ));
    } 
    else if (relativeType === "라이브러리" || relativeType === "프레임워크"){
      relativeLanguageText = "관련 언어";
      relativeLanguage = store.languageList.map(content => (
        content[3].some(item => 
          item === "언어" && myNameIs
        ) ? <Content image={content[1]} name={content[2]}></Content> : "" 
      ));
    }

    

    return (
      <div className="InformationItem">
        <div>{image}</div>
        <div className="imageText">{imageText}</div>
        <div className="informationTitle">{informationTitle}</div>
        <div className="details">{details}</div>
        <div className="children">{children}</div>
        <div className="link">{link}</div>
        
        {relativeType === "언어" ? 
          <div>
            {relativeLibraryText}
            <div className="container">
              {relativeLibrary}
            </div>
            {relativeFrameworkText}
            <div className="container">
              {relativeFramework}
            </div>
          </div>
        : 
          <div>
            {relativeLanguageText}
            <div>
              {relativeLanguage}
            </div>
          </div>}  
        </div>
    ); 
  }
}

export default InformationItem;