import React, {Component} from 'react';
import { inject, observer } from 'mobx-react';
import Content from './Content';
import '../../../styles/ContentClickComponent.css' 

@inject('store')
@observer
class WebClickContent extends Component {
    render(){
        const { store } = this.props;
        const language_list_view = store.languageList.map(i =>(
            i[0].some(v => v === store.presentLanguage) ? <Content image={i[1]} name={i[2]}></Content> : ""
          )
        );

        return(
            <div className="click-content-container">
                <div className="header">
                    웹사이트
                </div>
                <div className="text">
                    프론트엔드
                </div>
                <div className="container">
                    {language_list_view} 
                </div>
                <div className="text">
                    백엔드
                </div>
                <div className="container">
                    {language_list_view}
                </div>
            </div>
        );
    }
}

export default WebClickContent;