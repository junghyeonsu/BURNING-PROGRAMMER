import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';

import DescriptionList from '../Information/InformationContainer'
import DescriptionItem from '../Information/InformationItem'

@inject('store')
@observer 
class R_Programming extends Component {
  
  render() {
    const { store } = this.props;

    const Image = store.findImage("R");

    const list = [
      /* image = 이미지
        imageText = 그 이미지 이름 */
        <DescriptionItem image={<img src={Image} alt="My Image"></img>} text={"R_Programming"} />,

        /* informationTitle = 설명 위에 타이틀
           그리고 chileren으로 설명을 넘겨주어야함  */
        <DescriptionItem informationTitle="R_Programming 란?">R은 통계 계산과 그래픽을 위한 프로그래밍 언어이자 소프트웨어 환경이자 프리웨어이다.<br /> R은 데이터 분석 및 조작 분야에 많이 사용된다. 통계 분야에 많이 사용되며 R을 이용해 수학 기호, 플롯, 공식 등을 구할 수 있다.
        </DescriptionItem>,
  
        /* link = a 태그 */
        <DescriptionItem link={ <a href="https://www.r-project.org/" target="_blank">R_Programming</a> } />,
        <DescriptionItem informationTitle="R_Programming 활용 분야">G모델, Class, TM, RODBC 등 AI 개발에 활용할 수 있는 다양한 패키지를 제공하기 때문에 머신러닝에서 사용하기도 한다.
        </DescriptionItem>,
        <DescriptionItem myNameIs={ "R" } />,
    ]
    
    return (
      <div>
        <DescriptionList list ={list} />
      </div>
    );
  }
}

export default R_Programming;