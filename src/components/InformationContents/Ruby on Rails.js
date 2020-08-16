import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';

import DescriptionList from '../Information/InformationContainer'
import DescriptionItem from '../Information/InformationItem'

@inject('store')
@observer
class RubyonRails extends Component {

  render() {
    const { store } = this.props;

    const Image = store.findImage("Ruby on Rails");

    const list = [
      <DescriptionItem image={ <img src={ Image } alt="My Image"></img> } imageText={ "Ruby on Rails" } />,
      <DescriptionItem informationTitle="Ruby on Rails 란?">루비 온 레일즈(Ruby on Rails)는 루비로 작성된 MVC 패턴을 이용하는 오픈 소스 웹 프레임워크이다.
        </DescriptionItem>,
      <DescriptionItem link="https://rubyonrails.org/" />,
      <DescriptionItem informationTitle="Ruby on Rails 활용 분야">루비 온 레일즈는 모델, 뷰, 컨트롤러의 템플릿 생성 및 테스트 등 자동화하는 툴, 테스트를 위한 웹서버 등을 포함하고 있다. <br />또한 루비 온 레일즈가 기반을 두고 있는 ActiveRecord는 데이터베이스 작업을 추상화하여<br /> 생성/읽기/갱신/삭제(Create/Read/Update/Delete, CRUD) 작업을 자동화 및 단순화 시켜준다.<br /> 웹 애플리케이션의 동작은 대부분 CRUD 작업을 통해 이루어지므로, <br />이와 같은 루비 온 레일즈의 특성은 웹 애플리케이션을 빠르게 개발할 수 있도록 도와준다.
        </DescriptionItem>,
      <DescriptionItem myNameIs={ "Ruby on Rails" } />,
    ]

    return (
      <div>
        <DescriptionList list={ list } />
      </div>
    );
  }
}

export default RubyonRails;