import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';

import DescriptionList from '../Information/InformationContainer'
import DescriptionItem from '../Information/InformationItem'

@inject('store')
@observer
class MySQL extends Component {

  render() {
    const { store } = this.props;

    const Image = store.findImage("MySQL");

    const list = [
      <DescriptionItem image={ <img src={ Image } alt="My Image"></img> } imageText={ "MySQL" } />,
      <DescriptionItem informationTitle="MySQL 란?">MySQL(마이에스큐엘)은 세계에서 가장 많이 쓰이는 오픈 소스의 관계형 데이터베이스 관리 시스템(RDBMS)이다.
        </DescriptionItem>,
      <DescriptionItem link="https://www.mysql.com/" />,
      <DescriptionItem informationTitle="MySQL 활용 분야">다중 스레드, 다중 사용자 형식의 구조질의어 형식의 데이터베이스 관리 시스템으로서 오라클이 관리 및 지원하고 있으며, Qt처럼 이중 라이선스가 적용된다. 하나의 옵션은 GPL이며, GPL 이외의 라이선스로 적용시키려는 경우 전통적인 지적재산권 라이선스의 적용을 받는다.<br />
        <br /><br />
        응용 프로그램에서 MySQL 데이터베이스에 접근하기 위해 다수의 프로그래밍 언어로 된 API를 사용할 수 있다. 이들 API는 언어에 종속적이다.<br />
        MySQL은 공식적으로 아래의 프로그래밍 언어를 지원한다.
        <br />
        <br />
        C/C++<br />
        C#/F#<br />
        볼랜드 델파이 (dbExpress를 통한)<br />
        자바 (네이티브 자바 드라이버를 통한)<br />
        파이썬<br />
        루비<br />
        REALbasic (매킨토시 계열)<br />
        프리베이직<br />
        스몰토크<br />
        Eiffel<br />
        리스프<br />
        펄<br />
        Tcl<br />
        PHP  · PHP4  · PHP5  · PHP6<br />
        델파이1  · 델파이2  · 델파이3  · 델파이4  · 델파이5 · 델파이6 · 델파이7 · 델파이8<br />
        델파이2007 · 델파이2008 · 델파이2009<br />
        파파라치<br />
      </DescriptionItem>,
      <DescriptionItem myNameIs={ "MySQL" } />,
    ]

    return (
      <div>
        <DescriptionList list={ list } />
      </div>
    );
  }
}

export default MySQL;