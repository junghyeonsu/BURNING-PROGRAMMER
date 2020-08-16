import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';

import DescriptionList from '../Information/InformationContainer'
import DescriptionItem from '../Information/InformationItem'

@inject('store')
@observer
class Sanic extends Component {

  render() {
    const { store } = this.props;

    const Image = store.findImage("Sanic");

    const list = [
      <DescriptionItem image={ <img src={ Image } alt="My Image"></img> } imageText={ "Sanic" } />,
      <DescriptionItem informationTitle="Sanic 란?">Flask-like한 API에 async(비동기) 개념을 넣고 uvloop로 asyncio 이벤트 루프를 튜닝한 비동기 웹 프레임워크이다.<br />
        Flask보다 2~4배 빠름<br />
        요청/응답 객체가 의존성 주입 형태로 제공되고, 미들웨어 개념이 잘 잡힘<br />
      </DescriptionItem>,
      <DescriptionItem link="https://sanic.readthedocs.io/en/latest/" />,
      <DescriptionItem informationTitle="Sanic 활용 분야">sanic은 카카오를 비롯한 많은 곳에서 이미 생산단계에서 이용중인 웹프레임워크<br />비동기 방식으로 동작하는 웹프레임워크
        </DescriptionItem>,
      <DescriptionItem myNameIs={ "Sanic" } />,
    ]

    return (
      <div>
        <DescriptionList list={ list } />
      </div>
    );
  }
}

export default Sanic;