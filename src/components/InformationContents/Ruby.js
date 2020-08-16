import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';

import DescriptionList from '../Information/InformationContainer'
import DescriptionItem from '../Information/InformationItem'

@inject('store')
@observer
class Ruby extends Component {

  render() {
    const { store } = this.props;

    const Image = store.findImage("Ruby");

    const list = [
      <DescriptionItem image={ <img src={ Image } alt="My Image"></img> } imageText={ "Ruby" } />,
      <DescriptionItem informationTitle="Ruby 란?">루비(Ruby)는 마츠모토 유키히로가 개발한 동적 객체 지향 스크립트 프로그래밍 언어이다. <br />루비는 순수 객체 지향 언어라, 정수나 문자열 등을 포함한 데이터 형식 등 모든 것이 객체이다.<br />
        기능에는 클래스 정의, 가비지 컬렉션, 강력한 정규 표현식 처리, 다중 스레드, 예외 처리, 반복, 클로저, Mixin, 연산자 오버로드 등이 있다. <br />구문은 ALGOL계를 계승하면서 가독성을 중시하고 있다.
        </DescriptionItem>,
      <DescriptionItem link="https://www.ruby-lang.org/en/" />,
      <DescriptionItem informationTitle="Ruby 활용 분야">간단한 사이트를 구축할 때 좋다. 프로토타입을 만들 때 이용 할 수 있다. <br />빠르게 무언가를 만드는 데에 굉장히 효율적인 언어이다.
        </DescriptionItem>,
      <DescriptionItem myNameIs={ "Ruby" } />,
    ]

    return (
      <div>
        <DescriptionList list={ list } />
      </div>
    );
  }
}

export default Ruby;