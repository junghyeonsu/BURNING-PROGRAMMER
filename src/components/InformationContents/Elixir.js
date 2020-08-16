import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';

import DescriptionList from '../Information/InformationContainer'
import DescriptionItem from '../Information/InformationItem'

@inject('store')
@observer
class Elixir extends Component {

  render() {
    const { store } = this.props;

    const Image = store.findImage("Elixir");

    const list = [
      <DescriptionItem image={ <img src={ Image } alt="My Image"></img> } imageText={ "Elixir" } />,
      <DescriptionItem informationTitle="Elixir 란?">엘릭서(Elixir)는 얼랭(Erlang) 가상 머신(BEAM) 위에서 동작하는 함수형, 동시성 프로그래밍 언어이다.
        </DescriptionItem>,
      <DescriptionItem link="https://web.archive.org/web/20120418080914/http://elixir-lang.org/" />,
      <DescriptionItem informationTitle="Elixir 활용 분야">엘릭서는 얼랭이 보유하고 있는 분산 처리, 장애 내구성, 실시간, 무정지 애플리케이션 등의 특징을 공유한다.<br /> 그에 더해서 프로토콜을 이용해 다형성을 지원하고, Quote과 Unquote 그리고 Macro를 통한 DSL 구현 등의 메타 프로그래밍이 가능하다.
        </DescriptionItem>,
      <DescriptionItem myNameIs={ "Elixir" } />,
    ]

    return (
      <div>
        <DescriptionList list={ list } />
      </div>
    );
  }
}

export default Elixir;