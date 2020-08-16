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
        <DescriptionItem image={<img src={Image} alt="My Image"></img>} imageText={"Clojure"} />,
        <DescriptionItem informationTitle="Clojure 란?">클로저(Clojure)는 리치 히키(Rich Hickey)가 만든 리스프 프로그래밍 언어의 방언으로서, 범용 함수형 언어이다.<br /> 이 언어는 불변값과 시간-진행 구문을 통한 프로그래밍을 강조하는데, <br /> 이는 보다 탄탄한 프로그램, 특히 멀티스레드 프로그램의 개발을 용이하게 하기 위해서이다.<br />
        <br /><br />
        클로저는 자바 가상 머신과 공통 언어 런타임 (CLR), 그리고 자바스크립트 엔진 상에서 실행된다.<br /> 다른 리스프 언어들과 같이 클로저는 코드를 데이터로 취급하며, 정교한 매크로 시스템을 갖고 있다.</DescriptionItem>,
      <DescriptionItem link="https://clojure.org/" />,
      <DescriptionItem myNameIs={"Clojure"} />, 
    ]
    
    return (
      <div>
        <DescriptionList list ={list} />
      </div>
    );
  }
}

export default Clojure;