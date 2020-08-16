import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';

import DescriptionList from '../Information/InformationContainer'
import DescriptionItem from '../Information/InformationItem'

@inject('store')
@observer
class arduino extends Component {

  render() {
    const { store } = this.props;

    const Image = store.findImage("Arduino");

    const list = [
      <DescriptionItem image={<img src={Image} alt="My Image"></img>} imageText={"Arduino"} />,
      <DescriptionItem informationTitle="Arduino 란?">아두이노(Arduino)는 오픈 소스를 기반으로 한 단일 보드 마이크로컨트롤러로 완성된 보드(상품)와 관련 개발 도구 및 환경을 말한다.<br />
      마이크로컨트롤러이므로 원하는 기능을 먼저 설정하고 이에 맞는 프로그래밍을 통해 기능을 구현한다.<br /> 사용 언어는 C/C++을 사용하고 컴파일러 및 라이브러리는 AVR-GCC을 사용한다.</DescriptionItem>,
      <DescriptionItem link="https://www.arduino.cc/" />,
      <DescriptionItem myNameIs={"Arduino"} />, 
    ]

    return (
      <div>
        <DescriptionList list={ list } />
      </div>
    );
  }
}

export default arduino;