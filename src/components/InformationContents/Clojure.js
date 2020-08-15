import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';

import DescriptionList from '../Information/InformationContainer'
import DescriptionItem from '../Information/InformationItem'

@inject('store')
@observer 
class Clojure extends Component {
  
  render() {
    const { store } = this.props;

    const Image = store.findImage("Clojure");

    const list = [
      /* image = 이미지
        imageText = 그 이미지 이름 */
        <DescriptionItem image={<img src={Image} alt="My Image"></img>} text={"Clojure"} />,

        /* informationTitle = 설명 위에 타이틀
           그리고 chileren으로 설명을 넘겨주어야함  */
        <DescriptionItem informationTitle="Clojure 활용 분야">클로저(Clojure)는 리치 히키(Rich Hickey)가 만든 리스프 프로그래밍 언어의 방언으로서, 범용 함수형 언어이다.<br /> 이 언어는 불변값과 시간-진행 구문을 통한 프로그래밍을 강조하는데, <br /> 이는 보다 탄탄한 프로그램, 특히 멀티스레드 프로그램의 개발을 용이하게 하기 위해서이다.<br />
        <br /><br />
        클로저는 자바 가상 머신과 공통 언어 런타임 (CLR), 그리고 자바스크립트 엔진 상에서 실행된다.<br /> 다른 리스프 언어들과 같이 클로저는 코드를 데이터로 취급하며, 정교한 매크로 시스템을 갖고 있다.</DescriptionItem>,
  
        /* link = a 태그 */
        <DescriptionItem link={ <a href="https://clojure.org/" target="_blank">Clojure</a> } />,
  
        /* 언어 기준 */
        /* type = "라이브러리 or 프레임워크" */
        /* whoami = "그 언어 이름" */
  
        /* 라이브러리 기준 */
        /* type =  언어 */
        /* whoami = "그 언어 이름"  */
  
        /* 프레임워크 기준 */
        /* type = 언어 */
        /* whoami = "그 언어 이름" */
        // Clojure은 웹 프론트엔드 프레임워크임
        <DescriptionItem type={ "언어" } whoami={ 'Clojure' } />,
    ]
    
    return (
      <div>
        <DescriptionList list ={list} />
      </div>
    );
  }
}

export default Clojure;