import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';

import DescriptionList from '../Information/InformationContainer'
import DescriptionItem from '../Information/InformationItem'

@inject('store')
@observer
class Bootstrap extends Component {

  render() {
    const { store } = this.props;

    const Image = store.findImage("Bootstrap");

    const list = [
      <DescriptionItem image={<img src={Image} alt="My Image"></img>} imageText={"Bootstrap"} />,
      <DescriptionItem informationTitle="Bootstrap 란?">부트스트랩(Bootstrap)은 웹사이트를 쉽게 만들 수 있게 도와주는 HTML, CSS, JS 프레임워크이다. <br />하나의 CSS 로 휴대폰, 태블릿, 데스크탑까지 다양한 기기에서 작동한다. <br />다양한 기능을 제공하여 사용자가 쉽게 웹사이트를 제작, 유지, 보수할 수 있도록 도와준다.</DescriptionItem>,
      <DescriptionItem link="https://getbootstrap.com/" />,
      <DescriptionItem myNameIs={"Bootstrap"} />, 
    ]

    return (
      <div>
        <DescriptionList list={ list } />
      </div>
    );
  }
}

export default Bootstrap;