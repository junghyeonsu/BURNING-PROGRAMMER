import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';

import DescriptionList from '../Information/InformationContainer'
import DescriptionItem from '../Information/InformationItem'

@inject('store')
@observer 
class Perforce extends Component {
  
  render() {
    const { store } = this.props;

    const Image = store.findImage("Perforce");

    const list = [
      /* image = 이미지
        imageText = 그 이미지 이름 */
        <DescriptionItem image={<img src={Image} alt="My Image"></img>} text={"Perforce"} />,

        /* informationTitle = 설명 위에 타이틀
           그리고 chileren으로 설명을 넘겨주어야함  */
        <DescriptionItem informationTitle="Perforce이란 무엇일까요?">
            Perforce도 Git과 마찬가지로 버전관리 시스템입니다.<br /><br />
            Perforce와 Git의 가장 큰 차이는 Git은 분산형이고, Perforce는 중앙집중형이라는 점입니다.
            <br /><br />
            Perforce는 다른 분야의 팀들과 함께 사용할 때 좋고, Git은 하나의 팀에서 사용할 때 좋으므로,
            상황에 맞게 선택해서 사용하면 좋습니다.

        </DescriptionItem>,
  
        /* link = a 태그 */
        <DescriptionItem link={ <a href="https://Perforce.org/" target="_blank">Perforce</a> } />,
        <DescriptionItem informationTitle="Perforce">,
        </DescriptionItem>,
        <DescriptionItem myNameIs={ "Perforce" } />,
    ] 
    
    return (
      <div>
        <DescriptionList list ={list} />
      </div>
    );
  }
}

export default Perforce;