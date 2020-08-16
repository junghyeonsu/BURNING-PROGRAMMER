import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';

import DescriptionList from '../Information/InformationContainer'
import DescriptionItem from '../Information/InformationItem'

@inject('store')
@observer
class Python extends Component {

  render() {
    const { store } = this.props;

    const Image = store.findImage("Python");

    const list = [
      <DescriptionItem image={ <img src={ Image } alt="My Image"></img> } imageText={ "Python" } />,
      <DescriptionItem informationTitle="Python 란?">파이썬(Python)은 1991년프로그래머인 귀도 반 로섬(Guido van Rossum)이 발표한 고급 프로그래밍 언어로, 플랫폼에 독립적이며 인터프리터식, 객체지향적, 동적 타이핑(dynamically typed) 대화형 언어이다. <br />
      </DescriptionItem>,
      <DescriptionItem link="https://www.python.org/" />,
      <DescriptionItem informationTitle="Python 활용 분야">앱 개발자나 보안 연구자가 자체 시스템의 보안취약점을 테스트 하는 용도로 쓴다.<br />
        대중적인 해킹 도구를 만들기 쉽기 때문에, 해커와 개발자들 모두 파이썬의 이점을 살리기 좋다.
        <br /><br />
        IBM의 Hyperledger는 Sawtooth에서 구현한 암호화폐인데, 파이썬 용으로 Pythereium도 만들었다.<br />
        Ethereum, HyperledgerFabric, Neo, Steaem등의 블록체인 개발에 사용된다.<br /><br />
        다양한 AI 라이브러리를 제공한다. 머신 러닝에 사용하는 Pybrain, 복잡한 과학적 계산에 사용되는 Numpy, 인공신경망을 제공하는 Tensorflow등이 그 예이다.<br />
        다양한 AI 알고리즘을 쉽게 구현할 수 있다. 즉, 개발 기간이 짧고, 복잡한 AI를 개발할 때 적합하다.
        </DescriptionItem>,
      <DescriptionItem myNameIs={ "Python" } />,
    ]

    return (
      <div>
        <DescriptionList list={ list } />
      </div>
    );
  }
}

export default Python;