import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';

import DescriptionList from '../Information/InformationContainer'
import DescriptionItem from '../Information/InformationItem'

@inject('store')
@observer
class Flask extends Component {

  render() {
    const { store } = this.props;

    const Image = store.findImage("Flask");

    const list = [
      <DescriptionItem image={ <img src={ Image } alt="My Image"></img> } imageText={ "Flask" } />,
      <DescriptionItem informationTitle="Flask 란? ">플라스크(Flask)는 파이썬으로 작성된 마이크로 웹 프레임워크의 하나로, Werkzeug 툴킷과 Jinja2 템플릿 엔진에 기반을 둔다. BSD 라이선스이다.</DescriptionItem>,
      <DescriptionItem link="https://flask.palletsprojects.com/en/1.1.x/" />,
      <DescriptionItem informationTitle="Flask 활용 분야">플라스크는 특별한 도구나 라이브러리가 필요 없기 때문에 마이크로 프레임워크라 부른다.<br />데이터베이스 추상화 계층, 양식 유효성 확인, 기타 기존의 서드파티 라이브러리가 공통 기능을 제공하는 구성 요소가 없다.<br /> 그러나 플라스크는 플라스 자체에서 구현된 것처럼 애플리케이션 기능을 추가할 수 있는 확장 기능을 지원한다.<br /> 확장 기능은 객체 관계 매퍼, 양식 유효성 확인, 업로드 관리, 다양한 개방형 인증 기술, 여러 공통 프레임워크 관련 도구들을 위해 존재한다. <br />확장 기능들은 코어 플라스크 프로그램에 비해 훨씬 더 정기적으로 업데이트된다.
        </DescriptionItem>,
      <DescriptionItem myNameIs={ "Flask" } />,
    ]

    return (
      <div>
        <DescriptionList list={ list } />
      </div>
    );
  }
}

export default Flask;