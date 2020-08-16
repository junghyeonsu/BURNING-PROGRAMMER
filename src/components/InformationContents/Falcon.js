import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';

import DescriptionList from '../Information/InformationContainer'
import DescriptionItem from '../Information/InformationItem'

@inject('store')
@observer 
class Falcon extends Component {
  
  render() {
    const { store } = this.props;

    const Image = store.findImage("Falcon");

    const list = [
        <DescriptionItem image={<img src={Image} alt="My Image"></img>} imageText={"Falcon"} />,
      <DescriptionItem informationTitle="Falcon 란? ">- 대규모 앱 백엔드 및 마이크로 서비스 구축을 위한 안정적인 고성능 python 웹 프레임 워크<br />
      - rest 아키텍처 스타일 권장</DescriptionItem>,
      <DescriptionItem link="https://falcon.readthedocs.io/en/stable/" />,
      <DescriptionItem myNameIs={"Falcon"} />, 
    ]
    
    return (
      <div>
        <DescriptionList list ={list} />
      </div>
    );
  }
}

export default Falcon;