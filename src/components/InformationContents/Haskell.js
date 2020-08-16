import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';

import DescriptionList from '../Information/InformationContainer'
import DescriptionItem from '../Information/InformationItem'

@inject('store')
@observer
class Haskell extends Component {

  render() {
    const { store } = this.props;

    const Image = store.findImage("Haskell");

    const list = [
      <DescriptionItem image={ <img src={ Image } alt="My Image"></img> } imageText={ "Haskell" } />,
      <DescriptionItem informationTitle="Haskell 란? ">하스켈 또는 해스켈Haskell)은 순수 함수형 프로그래밍 언어이다.</DescriptionItem>,
      <DescriptionItem link="https://www.haskell.org/" />,
      <DescriptionItem myNameIs={ "Haskell" } />,
    ]

    return (
      <div>
        <DescriptionList list={ list } />
      </div>
    );
  }
}

export default Haskell;