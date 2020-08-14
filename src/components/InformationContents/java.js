import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';

import DescriptionList from '../Information/InformationContainer'
import DescriptionItem from '../Information/InformationItem'

@inject('store')
@observer 
class java extends Component {
  
  render() {
    const { store } = this.props;

    const Image = store.findImage("Java");

    const list = [
      <DescriptionItem image={<img src={Image} alt="My Image"></img>} text={"Java"} />,
      <DescriptionItem text="공식 사이트" details={<a href="www.python.org" target="_blank">공식 사이트</a>} />,
      <DescriptionItem text="장점" details={'자바다'} />,
      <DescriptionItem text="단점" details={'실행속도가 느리다'} />,
      <DescriptionItem text="파이썬 활용 분야" details={'다양한 AI 라이브러리를 제공한다. 머신 러닝에 사용하는 Pybrain, 복잡한 과학적 계산에 사용되는 Numpy, 인공신경망을 제공하는 Tensorflow등이 그 예이다. 다양한 AI 알고리즘을 쉽게 구현할 수 있다. 즉, 개발 기간이 짧고 복잡한 AI를 개발할 때 적합하다.'} />,
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

export default java;