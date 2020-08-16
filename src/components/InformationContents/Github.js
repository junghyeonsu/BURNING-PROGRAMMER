import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';

import DescriptionList from '../Information/InformationContainer'
import DescriptionItem from '../Information/InformationItem'

@inject('store')
@observer 
class Github extends Component {
  
  render() {
    const { store } = this.props;

    const Image = store.findImage("Github");

    const list = [
      /* image = 이미지
        imageText = 그 이미지 이름 */
        <DescriptionItem image={<img src={Image} alt="My Image"></img>} text={"Github"} />,

        /* informationTitle = 설명 위에 타이틀
           그리고 chileren으로 설명을 넘겨주어야함  */
        <DescriptionItem informationTitle="Github이란 무엇일까요?">
            대표적인 무료 Git 저장소입니다.<br /><br />
            쉽게 말하면 소스 코드를 저장하는 "온라인 저장소"라고 생각하면 됩니다.
            Git을 통해 버전 관리를 할 수 있고, 이렇게 관리한 것을 Github에 저장하는 것입니다. 
        </DescriptionItem>,
  
        /* link = a 태그 */
        <DescriptionItem link={ <a href="https://github.com/" target="_blank">Github</a> } />,
        <DescriptionItem informationTitle="Github">,
        </DescriptionItem>,
        <DescriptionItem myNameIs={ "Github" } />,
    ] 
    
    return (
      <div>
        <DescriptionList list ={list} />
      </div>
    );
  }
}

export default Github;