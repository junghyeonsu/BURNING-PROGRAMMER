import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';

import DescriptionList from '../Information/InformationContainer'
import DescriptionItem from '../Information/InformationItem'

@inject('store')
@observer
class reactnativeimage extends Component {

  render() {
    const { store } = this.props;

    const Image = store.findImage("React Native");

    const list = [
      <DescriptionItem image={ <img src={ Image } alt="My Image"></img> } imageText={ "React Native" } />,
      <DescriptionItem informationTitle="React Native 란?">리액트 네이티브(React Native)는 페이스북이 개발한 오픈 소스 모바일 애플리케이션 프레임워크이다.
        </DescriptionItem>,
      <DescriptionItem link="https://reactnative.dev/" />,
      <DescriptionItem informationTitle="React Native 활용 분야">안드로이드, iOS, 웹, UWP용 애플리케이션을 개발하기 위해 사용되며, <br />
        개발자들이 네이티브 플랫폼 기능과 더불어 리액트를 사용할 수 있게 한다.
        </DescriptionItem>,
      <DescriptionItem myNameIs={ "React Native" } />,
    ]

    return (
      <div>
        <DescriptionList list={ list } />
      </div>
    );
  }
}

export default reactnativeimage;