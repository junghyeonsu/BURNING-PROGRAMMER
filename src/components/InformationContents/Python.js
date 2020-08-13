import React, { Component } from 'react';
import { Fragment } from 'react';
import Head from '../Information/Head'
import DescriptionList from '../Information/DescriptionList'
import DescriptionItem from '../Information/Description/DescriptionItem'

class Python extends Component {
  
  render() {

    const list = [
      <DescriptionItem text="공식 사이트" details={<a href="http://www.naver.com" target="_blank">naver</a>} />,
      <DescriptionItem text="장점" details={'쉽다.'} />,
      <DescriptionItem text="단점" details={'실행속도가 느리다'} />,
      <DescriptionItem text="파이썬 활용 분야" details={'머신러닝 딥러닝'} />,
      <DescriptionItem text="추천 IDE" details={'파이참'} />,
      <DescriptionItem text="라이브러리" details={'Pandas'} />,
      <DescriptionItem image={<img  alt="My Image"></img>}/>
    ]
    
    return (
      <div>
        <Head />
        <DescriptionList list ={list} />
      </div>
    );
  }
}

export default Python;