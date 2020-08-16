import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';

import DescriptionList from '../Information/InformationContainer'
import DescriptionItem from '../Information/InformationItem'

@inject('store')
@observer
class django extends Component {

  render() {
    const { store } = this.props;

    const Image = store.findImage("Django");

    const list = [
      /* image = 이미지
        imageText = 그 이미지 이름 */
      <DescriptionItem image={ <img src={ Image } alt="My Image"></img> } text={ "Django" } />,

      /* informationTitle = 설명 위에 타이틀
         그리고 chileren으로 설명을 넘겨주어야함  */
      <DescriptionItem informationTitle="Django 란?">장고(Django)는 파이썬으로 작성된 오픈 소스 웹 애플리케이션 프레임워크로, 모델-뷰-컨트롤러(MVC) 패턴을 따르고 있다. <br />현재는 장고 소프트웨어 재단에 의해 관리되고 있다.<br />
        고도의 데이터베이스 기반 웹사이트를 작성하는 데 있어서 수고를 더는 것이 장고의 주된 목표이다.<br /> 장고는 콤포넌트의 재사용성(reusability)과 플러그인화 가능성(pluggability), 빠른 개발 등을 강조하고 있다. <br />또한, "DRY(Don't repeat yourself: 중복배제)" 원리를 따랐다. 설정 파일부터 데이터 모델에까지 파이썬 언어가 구석구석에 쓰였다.
        </DescriptionItem>,
      <DescriptionItem image={ <img src={ Image } alt="My Image"></img> } imageText={ "Django" } />,
      <DescriptionItem informationTitle="Django 활용 분야">인스타그램, NASA, 빗버켓, Disqus, 모질라에서 장고를 사용하는 것으로 알려져있다.<br />
        파이썬 기반으로 작성된 오픈소스 웹 어플리케이션 프레임워크이다.
        </DescriptionItem>,
      <DescriptionItem link="https://www.djangoproject.com/" />,
      <DescriptionItem myNameIs={ "Django" } />,
    ]

    return (
      <div>
        <DescriptionList list={ list } />
      </div>
    );
  }
}

export default django;