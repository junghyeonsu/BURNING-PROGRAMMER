import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';

import DescriptionList from '../Information/InformationContainer'
import DescriptionItem from '../Information/InformationItem'

@inject('store')
@observer
class RaspberryPi extends Component {

  render() {
    const { store } = this.props;

    const Image = store.findImage("Raspberry Pi");

    const list = [
      <DescriptionItem image={ <img src={ Image } alt="My Image"></img> } imageText={ "Raspberry Pi" } />,
      <DescriptionItem informationTitle="Raspberry Pi 란?">라즈베리 파이(영어: Raspberry Pi)는 영국 잉글랜드의 라즈베리 파이 재단이 학교와 개발도상국에서 기초 컴퓨터 과학의 교육을 증진시키기 위해 개발한 신용카드 크기의 싱글 보드 컴퓨터이다.
        </DescriptionItem>,
      <DescriptionItem link="https://www.raspberrypi.org/" />,
      <DescriptionItem informationTitle="Raspberry Pi 활용 분야">아두이노는 하드웨어 제어를 위한 목적으로 사용되므로 C를 사용하지만, 라즈베리 파이의 경우에는 CPU에 특화된 기기이기 때문에 간략하고 빠르게 구현이 가능한 파이썬을 사용한다.
        </DescriptionItem>,
      <DescriptionItem myNameIs={ "Raspberry Pi" } />,
    ]

    return (
      <div>
        <DescriptionList list={ list } />
      </div>
    );
  }
}

export default RaspberryPi;