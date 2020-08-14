import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';

import DescriptionList from '../Information/InformationContainer'
import DescriptionItem from '../Information/InformationItem'

@inject('store')
@observer 
class AngularJS extends Component {
  
  render() {
    const { store } = this.props;

    const Image = store.findImage("Angular");

    const list = [
      <DescriptionItem image={<img src={Image} alt="My Image"></img>} text={"AngularJS"} />,
      <DescriptionItem text="공식 사이트" details={<a href="https://angularjs.org/" target="_blank">공식 사이트</a>} />,
      <DescriptionItem text="파이썬 활용 분야" details={'AngularJS는 자바스크립트 기반의 오픈 소스 프론트엔드 웹 애플리케이션 프레임워크의 하나로, 싱글 페이지 애플리케이션 개발 중에 마주치는 여러 문제들을 해결하기 위해 개발되었으며 주로 구글과 개별 커뮤니티, 여러 회사에 의해 유지보수되고 있다.'} />,
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

export default AngularJS;