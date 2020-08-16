import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';

import DescriptionList from '../Information/InformationContainer'
import DescriptionItem from '../Information/InformationItem'

@inject('store')
@observer
class Vue extends Component {

  render() {
    const { store } = this.props;

    const Image = store.findImage("Vue.js");

    const list = [
      <DescriptionItem image={ <img src={ Image } alt="My Image"></img> } imageText={ "Vue.js" } />,
      <DescriptionItem informationTitle="Vue.js 란?">Vue.js는 웹 애플리케이션의 사용자 인터페이스를 만들기 위해 사용하는 오픈 소스 프로그레시브 자바스크립트 프레임워크이다.<br />다른 자바스크립트 라이브러리를 사용하는 웹 애플리케이션 프로젝트에 Vue.js를 도입하기 쉽게 설계되어 있는데,<br /> 이는 Vue.js가 점진적으로 채택할 수 있게 설계되어 있기 때문이다.<br /> 한편 Vue.js는 고성능의 싱글 페이지 애플리케이션(SPA)을 구축하는데 이용가능하다.
        </DescriptionItem>,
      <DescriptionItem link="https://vuejs.org/" />,
      <DescriptionItem informationTitle="Vue.js 활용 분야">Vue.js는 웹 개발을 단순화하고 정리하기 위해 개발된 대중적인 자바스크립트 프론트엔드 프레임워크이다.
        </DescriptionItem>,
      <DescriptionItem myNameIs={ "Vue.js" } />,
    ]

    return (
      <div>
        <DescriptionList list={ list } />
      </div>
    );
  }
}

export default Vue;