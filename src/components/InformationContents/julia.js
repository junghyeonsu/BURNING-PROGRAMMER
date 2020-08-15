import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';

import DescriptionList from '../Information/InformationContainer'
import DescriptionItem from '../Information/InformationItem'

@inject('store')
@observer 
class julia extends Component {
  
  render() {
    const { store } = this.props;

    const Image = store.findImage("Julia");

    const list = [
      /* image = 이미지
        imageText = 그 이미지 이름 */
        <DescriptionItem image={<img src={Image} alt="My Image"></img>} text={"Julia"} />,

        /* informationTitle = 설명 위에 타이틀
           그리고 chileren으로 설명을 넘겨주어야함  */
        <DescriptionItem informationTitle="Julia 란?">
        </DescriptionItem>,
  
        /* link = a 태그 */
        <DescriptionItem link={ <a href="" target="_blank">Julia</a> } />,
        <DescriptionItem informationTitle="Julia 활용 분야">
        </DescriptionItem>,
        <DescriptionItem myNameIs={ "Julia" } />,
    ]
    
    return (
      <div>
        <DescriptionList list ={list} />
      </div>
    );
  }
}

export default julia;