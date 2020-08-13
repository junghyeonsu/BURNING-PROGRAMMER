import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';

import DescriptionList from '../Information/InformationContainer'
import DescriptionItem from '../Information/InformationItem'

@inject('store')
@observer 
class Python extends Component {
  
  render() {
    const { store } = this.props;

    const Image = store.findImage("Python");

    const list = [
      <DescriptionItem image={<img src={Image} alt="My Image"></img>} text={"Python"} />,
      <DescriptionItem text="공식 사이트" details={<a href="http://www.naver.com" target="_blank">naver</a>} />,
      <DescriptionItem text="장점" details={'쉽다.'} />,
      <DescriptionItem text="단점" details={'실행속도가 느리다'} />,
      <DescriptionItem text="파이썬 활용 분야" details={'머신러닝 딥러닝'} />,
      <DescriptionItem text="추천 IDE" details={'파이참'} />,
      <DescriptionItem text="라이브러리" details={'Pandas'} />,
    ]
    
    return (
      <div>
        <DescriptionList list ={list} />
      </div>
    );
  }
}

export default Python;