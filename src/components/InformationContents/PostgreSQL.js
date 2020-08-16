import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';

import DescriptionList from '../Information/InformationContainer'
import DescriptionItem from '../Information/InformationItem'

@inject('store')
@observer
class PostgreSQL extends Component {

  render() {
    const { store } = this.props;

    const Image = store.findImage("Postgre SQL");

    const list = [
      <DescriptionItem image={ <img src={ Image } alt="My Image"></img> } imageText={ "Postgre SQL" } />,
      <DescriptionItem informationTitle="Postgre SQL 란?">PostgreSQL은 확장 가능성 및 표준 준수를 강조하는 객체-관계형 데이터베이스 관리 시스템(ORDBMS)의 하나이다.
        </DescriptionItem>,
      <DescriptionItem link="https://www.postgresql.org/" />,
      <DescriptionItem informationTitle="Postgre SQL 활용 분야">BSD 허가권으로 배포되며 오픈소스 개발자 및 관련 회사들이 개발에 참여하고 있다. <br />데이터베이스 서버로서 주요 기능은 데이터를 안전하게 저장하고 다른 응용 소프트웨어로부터의 요청에 응답할 때 데이터를 반환하는 것이이다. <br />소규모의 단일 머신 애플리케이션에서부터 수많은 동시 접속 사용자가 있는 대형의 인터넷 애플리케이션(또는 데이터 웨어하우스용)에 이르기까지 여러 부하를 관리할 수 있으며 macOS 서버의 경우 PostgreSQL은 기본 데이터베이스이다. <br />마이크로소프트 윈도우, 리눅스(대부분의 배포판에서 제공됨)용으로도 이용 가능하다.
        </DescriptionItem>,
      <DescriptionItem myNameIs={ "Postgre SQL" } />,
    ]

    return (
      <div>
        <DescriptionList list={ list } />
      </div>
    );
  }
}

export default PostgreSQL;