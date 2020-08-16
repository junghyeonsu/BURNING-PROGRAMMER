import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';

import DescriptionList from '../Information/InformationContainer'
import DescriptionItem from '../Information/InformationItem'

@inject('store')
@observer
class julia extends Component {

  render() {
    const { store } = this.props;

    const Image = store.findImage("Julia");

    const list = [
      <DescriptionItem image={ <img src={ Image } alt="My Image"></img> } imageText={ "Julia" } />,
      <DescriptionItem informationTitle="Julia 란? ">MIT에서 개발한 언어이다. <br />동적 프로그래밍 언어로, 주로 과학, 공학 분야에서 빠른 계산 성능을 내기 위해 개발되었다.<br />
      병렬프로그래밍을 지원한다.</DescriptionItem>,
      <DescriptionItem link="https://julialang.org/" />,
      <DescriptionItem informationTitle="Julia 활용 분야">특별한 분리 컴파일 없이 좋은 성능을 가진다. 수치 분석과 연산 과학을 다룬다. <br />
      수학에 기반을 둬, 데이터 분석가들이 많이 사용한다. 연구 논문에서 알고리즘을 번역해 손실 없이 코드화 하기가 용이하다. 모델 리스크를 줄이고, 안정성을 향상시킬 수 있다. <br />
      오픈소스 언어로 IBM, Intel, NVIDIA, ARM을 포함해 거의 모든 종류의 하드웨어에서 실행 가능하다.<br />
      Matlab, 파이썬, R의 친숙한 구문과 C++의 빠른 속도로 결함할 수 있어 개발자들이 한가지 프로그래밍 언어로 모델을 변환 할 필요가 없어진다. <br />이를 통해 오류를 줄이고, 시간과 비용을 줄일 수 있다.
      </DescriptionItem>,
      <DescriptionItem myNameIs={ "Julia" } />,
    ]

    return (
      <div>
        <DescriptionList list={ list } />
      </div>
    );
  }
}

export default julia;