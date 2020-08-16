import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';

import DescriptionList from '../Information/InformationContainer'
import DescriptionItem from '../Information/InformationItem'

@inject('store')
@observer
class Lisp extends Component {

  render() {
    const { store } = this.props;

    const Image = store.findImage("Lisp");

    const list = [
      <DescriptionItem image={ <img src={ Image } alt="My Image"></img> } imageText={ "Lisp" } />,
      <DescriptionItem informationTitle="Lisp 란? ">현대의 컴퓨터 고급 언어 중 두 번쨰로 오래된 것이다.<br /> 언어 자체가 새로운 기능을 탑재하기 유연하기도 하고, 오랫동안 학계의 특정 분야에서 거의 표준적으로 사용된 언어라 후대 언어에 끼친 영향이 크다.</DescriptionItem>,
      <DescriptionItem link="https://lisp-lang.org/" />,
      <DescriptionItem informationTitle="Lisp 활용 분야">동적 언어로 자동으로 불필요한 정보를 정리하는 기능으로 우수한 프로토타입을 제작할 수 있다.<br />
      상징적인 정보를 처리하는 데 적합하다.<br />
      식의 전개, 인수분해, 미적분, 정리증명, 게임 문제, 자연어 처리 등에 적합하다.
      </DescriptionItem>,
      <DescriptionItem myNameIs={ "Lisp" } />,
    ]

    return (
      <div>
        <DescriptionList list={ list } />
      </div>
    );
  }
}

export default Lisp;