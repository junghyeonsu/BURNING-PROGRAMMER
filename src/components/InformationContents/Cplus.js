import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';

import DescriptionList from '../Information/InformationContainer'
import DescriptionItem from '../Information/InformationItem'

@inject('store')
@observer
class Cplus extends Component {

  render() {
    const { store } = this.props;

    const Image = store.findImage("C++");

    const list = [
      <DescriptionItem image={<img src={Image} alt="My Image"></img>} imageText={"C++"} />,
      <DescriptionItem informationTitle="C++ 란?">C 컴파일러(Cpre)에 클래스, 상속 클래스, 스트롱 타이핑, 인라인 확장, 기본 인수,가상 함수, 함수 이름, 연산자 오버로딩, <br />참조, 제약조건, type-safe free-store 메모리 할당 (new/delete), 개선된 자료형 검사, BCPL 스타일의 1줄 코멘트(//)를 포함한 여러 기능들을 <br />추가하였다. 템플릿이 안전하고 API를 일반화하는 데 적합하기 때문에 단순하다. <br />즉, 시간과 성능을 통제할 수 있다. 보수할 수 있도록 도와준다.
      </DescriptionItem>,
      <DescriptionItem link="https://isocpp.org/" />,
      <DescriptionItem informationTitle="C++ 활용 분야">암호화폐에 쓰인다. 대표적으로 비트코인이 있다. Bitcoin, Litecoin, Monero, EOS, Stella, Ripple, Qtum등을 개발하는 데 사용된다.
      <br /><br />
      속도가 빨라 민감한 인공지능 프로젝트에 유용하다. OOP 원칙도 가지고 있어 AI프로그램에 적합하다. <br />따라서 머신러닝, 딥러닝 라이브러리의 상당 부분은 C/C++로 작성되어 있다.<br /> API를 제공하며, 다른 프로그래밍 언어에 래퍼(wrapper)를 제공한다. 
      C++를 사용하는 대표적인 응용프로그램에는 <br />마이크로소프트 윈도우, 맥 OS, 어도비 포토샵, 마야 3D 소프트웨어, CAD, Mozilla Firefox 등이 있다.
      <br /><br />
      기계와 가장 밀접한 언어 중 하나이기 때문에 시스템의 깊숙한 곳까지 다룰 수가 있다. <br />데이터를 다루기가 쉽다. 따라서 바이러스, 해킹 기법들의 경우 H/W나 S/W의 설계상 허점을 이용하는 경우가 많은데, <br />고급언어로는 구현이 힘들기 때문이다.
      </DescriptionItem>,
      <DescriptionItem myNameIs={"C++"} />, 
    ]

    return (
      <div>
        <DescriptionList list={ list } />
      </div>
    );
  }
}

export default Cplus;