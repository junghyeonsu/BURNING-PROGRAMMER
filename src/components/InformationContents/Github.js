import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';

import DescriptionList from '../Information/InformationContainer'
import DescriptionItem from '../Information/InformationItem'

@inject('store')
@observer
class Github extends Component {

  render() {
    const { store } = this.props;

    const Image = store.findImage("Github");

    const list = [
      <DescriptionItem image={ <img src={ Image } alt="My Image"></img> } imageText={ "Github" } />,
      <DescriptionItem informationTitle="Github 란? ">대표적인 무료 Git 저장소입니다.<br /><br />
      쉽게 말하면 소스 코드를 저장하는 "온라인 저장소"라고 생각하면 됩니다.<br />
      Git을 통해 버전 관리를 할 수 있고, 이렇게 관리한 것을 Github에 저장하는 것입니다. </DescriptionItem>,
      <DescriptionItem link="https://github.com/" />,
      <DescriptionItem myNameIs={ "Github" } />,
    ]

    return (
      <div>
        <DescriptionList list={ list } />
      </div>
    );
  }
}

export default Github;