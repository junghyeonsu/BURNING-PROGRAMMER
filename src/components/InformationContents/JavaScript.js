import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';

import DescriptionList from '../Information/InformationContainer'
import DescriptionItem from '../Information/InformationItem'

@inject('store')
@observer 
class JavaScript extends Component {
  
  render() {
    const { store } = this.props;

    const Image = store.findImage("Javascript");

    const list = [
        /* image = 이미지
        imageText = 그 이미지 이름 */
        <DescriptionItem image={<img src={Image} alt="My Image"></img>} imageText={"Javascript"} />,

        /* informationTitle = 설명 위에 타이틀
           그리고 chileren으로 설명을 넘겨주어야함  */
        <DescriptionItem informationTitle="Javascript 란?">
        </DescriptionItem>,
  
        /* link = a 태그 */
        <DescriptionItem link={ <a href="" target="_blank">Javascript</a> } />,
        <DescriptionItem informationTitle="Javascript 활용 분야">
        </DescriptionItem>,
        <DescriptionItem myNameIs={ "Javascript" } />,
    ]
    
    return (
      <div>
        <DescriptionList list ={list} />
      </div>
    );
  }
}

export default JavaScript;