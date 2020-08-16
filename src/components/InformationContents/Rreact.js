import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';

import DescriptionList from '../Information/InformationContainer'
import DescriptionItem from '../Information/InformationItem'

@inject('store')
@observer
class Rreact extends Component {

  render() {
    const { store } = this.props;

    const Image = store.findImage("React");

    const list = [
      <DescriptionItem image={ <img src={ Image } alt="My Image"></img> } imageText={ "React" } />,
      <DescriptionItem informationTitle="React 란?">컴퓨팅에서 리액트(React, React.js 또는 ReactJS)는 자바스크립트 라이브러리의 하나로서 사용자 인터페이스를 만들기 위해 사용된다. <br />페이스북과 개별 개발자 및 기업들 공동체에 의해 유지보수된다.
        </DescriptionItem>,
      <DescriptionItem link="https://ko.reactjs.org/" />,
      <DescriptionItem informationTitle="React 활용 분야">리액트는 싱글 페이지나 모바일 애플리케이션의 개발 시 토대로 사용될 수 있다. <br />복잡한 리액트 애플리케이션들은 상태 관리, 라우팅, API와의 통신을 위한 추가 라이브러리의 사용이 일반적으로 요구된다.
        </DescriptionItem>,
      <DescriptionItem myNameIs={ "React" } />,
    ]

    return (
      <div>
        <DescriptionList list={ list } />
      </div>
    );
  }
}

export default Rreact;