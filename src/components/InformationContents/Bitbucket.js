import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';

import DescriptionList from '../Information/InformationContainer'
import DescriptionItem from '../Information/InformationItem'

@inject('store')
@observer
class Bitbucket extends Component {

  render() {
    const { store } = this.props;

    const Image = store.findImage("Bitbucket");

    const list = [
      <DescriptionItem image={ <img src={ Image } alt="My Image"></img> } imageText={ "Bitbucket" } />,
      <DescriptionItem informationTitle="Bitbucket이란 무엇일까요?">
        Bitbucket은 아틀라시안 소유의 웹 기반 버전 관리 저장소 호스팅 서비스로서, 머큐리얼 또는 Git 버전 관리 시스템을 사용하는 소스 코드 및 개발 프로젝트를 대상으로 합니다.
        </DescriptionItem>,
      <DescriptionItem link="https://bitbucket.org/" />,
      <DescriptionItem myNameIs={ "Bitbucket" } />,
    ]

    return (
      <div>
        <DescriptionList list={ list } />
      </div>
    );
  }
}

export default Bitbucket;