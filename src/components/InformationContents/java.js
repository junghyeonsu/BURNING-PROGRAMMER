import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';

import DescriptionList from '../Information/InformationContainer'
import DescriptionItem from '../Information/InformationItem'

@inject('store')
@observer
class java extends Component {

  render() {
    const { store } = this.props;

    const Image = store.findImage("Java");

    const list = [
      <DescriptionItem image={ <img src={ Image } alt="My Image"></img> } imageText={ "Java" } />,
      <DescriptionItem informationTitle="Java 란? ">자바(Java)는 썬 마이크로시스템즈의 제임스 고슬링(James Gosling)과
      다른 연구원들이 개발한 객체 지향적 프로그래밍 언어이다. <br />
      1991년 그린 프로젝트(Green Project)라는 이름으로 시작해 1995년에 발표했다. <br />
      처음에는 가전제품 내에 탑재해 동작하는 프로그램을 위해 개발했지만 현재
      웹 애플리케이션 개발에 가장 많이 사용하는 언어 가운데 하나이고,<br />
      모바일 기기용 소프트웨어 개발에도 널리 사용하고 있다.<br /> 현재 버전 10까지 출시했다.</DescriptionItem>,
      <DescriptionItem link="https://docs.oracle.com/en/" />,
      <DescriptionItem informationTitle="Java 활용 분야">검색 알고리즘, 인공 신경망, 유전자 프로그래밍 등 다양한 분야에서 사용된다.<br />
      사용이 간편하고 디버깅이 쉽다. 패키지 서비스, 대규모 프로젝트와의 단순화된 작업, 데이터의 그래픽 표현 및 사용자 인터랙션 등 다양한 이점을 제공한다. <br />
표준 위젠 툴킷인 SWT와 스윙이 통합되어 있어서 그래픽과 인터페이스를 표현할 수 있다.
      </DescriptionItem>,
      <DescriptionItem myNameIs={ "Java" } />,
    ]

    return (
      <div>
        <DescriptionList list={ list } />
      </div>
    );
  }
}

export default java;