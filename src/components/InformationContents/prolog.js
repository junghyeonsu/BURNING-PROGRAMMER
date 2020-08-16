import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';

import DescriptionList from '../Information/InformationContainer'
import DescriptionItem from '../Information/InformationItem'

@inject('store')
@observer
class prolog extends Component {

  render() {
    const { store } = this.props;

    const Image = store.findImage("Prolog");

    const list = [
      <DescriptionItem image={ <img src={ Image } alt="My Image"></img> } imageText={ "Prolog" } />,
      <DescriptionItem informationTitle="Prolog 란?">프롤로그(Prolog)는 논리형 프로그래밍 언어이다.<br />프롤로그는 술어 논리식을 프로그램, 증명하는 것을 계산한다는 것으로 간주하는 관점에서 새로운 계산의 기술 형태를 취하고 있다. <br />즉, 프로그램 자체는 논리식의 모양으로 만들어지고, 그 프로그램을 실행하는 처리계가 그 증명기로 되어 있다.
        </DescriptionItem>,
      <DescriptionItem link="https://www.swi-prolog.org/" />,
      <DescriptionItem informationTitle="Prolog 활용 분야">논리형 프로그래밍 언어로 효과적인 패턴 매칭, 트리 기반 데이터 구조화 및 자동 역추적 특징을 가진다. <br />따라서 강력하고 유연한 프로그래밍 프레임 워크를 제공한다. 머신러닝에 이상적인 언어. <br />
        의료 프로젝트, 전문가 AI 시스템 설계, 계산 언어학, 자연어 처리 등에 사용된다.
        </DescriptionItem>,
      <DescriptionItem myNameIs={ "Prolog" } />,
    ]

    return (
      <div>
        <DescriptionList list={ list } />
      </div>
    );
  }
}

export default prolog;