import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';

import DescriptionList from '../Information/InformationContainer'
import DescriptionItem from '../Information/InformationItem'

@inject('store')
@observer
class Net extends Component {

  render() {
    const { store } = this.props;

    const Image = store.findImage(".Net");

    const list = [
      <DescriptionItem image={ <img src={ Image } alt="My Image"></img> } imageText={ ".Net" } />,
      <DescriptionItem informationTitle=".Net 란?">닷넷 프레임워크(.NET Framework)는 마이크로소프트에서 개발한 윈도우 프로그램 개발 및 실행 환경이다.
        </DescriptionItem>,
      <DescriptionItem link="https://dotnet.microsoft.com/" />,
      <DescriptionItem informationTitle=".Net 활용 분야">네트워크 작업, 인터페이스 등의 많은 작업을 캡슐화하였고, 공통 언어 런타임(Common Language Runtime)(CLR)이라는 이름의 가상 머신 위에서 작동한다.
        </DescriptionItem>,
      <DescriptionItem myNameIs={ ".Net" } />,
    ]

    return (
      <div>
        <DescriptionList list={ list } />
      </div>
    );
  }
}

export default Net;