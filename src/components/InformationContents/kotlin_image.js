import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';

import DescriptionList from '../Information/InformationContainer'
import DescriptionItem from '../Information/InformationItem'

@inject('store')
@observer
class kotlin_image extends Component {

  render() {
    const { store } = this.props;

    const Image = store.findImage("Kotlin");

    const list = [
      <DescriptionItem image={ <img src={ Image } alt="My Image"></img> } imageText={ "Kotlin" } />,
      <DescriptionItem informationTitle="Kotlin 란? ">IntelliJ IDEA의 개발사 JetBrains에서 2011년에 공개한 프로그래밍 언어. </DescriptionItem>,
      <DescriptionItem link="https://developer.android.com/kotlin/get-started?hl=ko" />,
      <DescriptionItem informationTitle="Kotlin 활용 분야">안드로이드, 스프링 프레임워크, 톰캣, JavaScript, Java EE, HTML5, 
      iOS, 라즈베리 파이 등을 개발할 때 사용할 수 있다.
      </DescriptionItem>,
      <DescriptionItem myNameIs={ "Kotlin" } />,
    ]

    return (
      <div>
        <DescriptionList list={ list } />
      </div>
    );
  }
}

export default kotlin_image;