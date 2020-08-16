import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';

import DescriptionList from '../Information/InformationContainer'
import DescriptionItem from '../Information/InformationItem'

@inject('store')
@observer
class Vibora extends Component {

  render() {
    const { store } = this.props;

    const Image = store.findImage("Vibora");

    const list = [
      <DescriptionItem image={ <img src={ Image } alt="My Image"></img> } imageText={ "Vibora" } />,
      <DescriptionItem informationTitle="Vibora 란?">
        - Flask-like한 API에 이것저것 붙여서 포퍼먼스를 높였다.<br />
        - Sanic 보다 2배정도 빠르다.<br />
        - 레퍼런스가 많이 없다.<br />
      </DescriptionItem>,
      <DescriptionItem link="https://vibora.io/" />,
      <DescriptionItem informationTitle="Vibora 활용 분야">
        비동기 방식으로 동작하는 웹프레임워크
        </DescriptionItem>,
      <DescriptionItem myNameIs={ "Vibora" } />,
    ]

    return (
      <div>
        <DescriptionList list={ list } />
      </div>
    );
  }
}

export default Vibora;