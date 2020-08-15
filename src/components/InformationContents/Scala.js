import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';

import DescriptionList from '../Information/InformationContainer'
import DescriptionItem from '../Information/InformationItem'

@inject('store')
@observer 
class Scala extends Component {
  
  render() {
    const { store } = this.props;

    const Image = store.findImage("Scala");

    const list = [
      /* image = 이미지
        imageText = 그 이미지 이름 */
        <DescriptionItem image={<img src={Image} alt="My Image"></img>} text={"Scala"} />,

        /* informationTitle = 설명 위에 타이틀
           그리고 chileren으로 설명을 넘겨주어야함  */
        <DescriptionItem informationTitle="Scala 란?">스칼라(Scala)는 객체 지향 프로그래밍 언어와 함수형 프로그래밍의 요소가 결합된 다중패러다임 프로그래밍 언어이다.<br /> 스칼라라는 이름은 "Scalable Language (확장 가능한 언어)"에서 유래된 것이다.
        </DescriptionItem>,
  
        /* link = a 태그 */
        <DescriptionItem link={ <a href="https://www.scala-lang.org/" target="_blank">Scala</a> } />,
        <DescriptionItem informationTitle="Scala 활용 분야">기존의 Java 언어가 너무 복잡하다는 단점을 극복하기 위해 2004년 Martin Odersky가 처음 개발하여 배포했다. <br />간결한 소스 코드를 사용하여 Java에서 구현할 수 있는 대부분의 기능을 구현할 수 있다. <br />Scala는 자바 바이트코드를 사용하기 때문에 자바 가상 머신(JVM)에서 실행할 수 있고, Java 언어와 호환되어 대부분의 자바 API를 그대로 사용할 수 있다.
        </DescriptionItem>,
        <DescriptionItem myNameIs={ "Scala" } />,
    ]
    
    return (
      <div>
        <DescriptionList list ={list} />
      </div>
    );
  }
}

export default Scala;