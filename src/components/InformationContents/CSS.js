import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';

import DescriptionList from '../Information/InformationContainer'
import DescriptionItem from '../Information/InformationItem'

@inject('store')
@observer
class CSS extends Component {

  render() {
    const { store } = this.props;

    const Image = store.findImage("CSS");

    const list = [
      <DescriptionItem image={ <img src={ Image } alt="My Image"></img> } imageText={ "CSS" } />,
      <DescriptionItem informationTitle="CSS 란?">종속형 시트 또는 캐스케이딩 스타일 시트(Cascading Style Sheets, CSS)는 마크업 언어가 실제 표시되는 방법을 기술하는 언어로,<br /> HTML과 XHTML에 주로 쓰이며, XML에서도 사용할 수 있다. W3C의 표준이며, 레이아웃과 스타일을 정의할 때의 자유도가 높다.<br />
        마크업 언어(ex. HTML)가 웹사이트의 몸체를 담당한다면 CSS는 옷과 액세서리 같은 꾸미는 역할을 담당한다고 할 수 있다. <br />즉, HTML 구조는 그대로 두고 CSS 파일만 변경해도 전혀 다른 웹사이트처럼 꾸밀 수 있다.
        </DescriptionItem>,
      <DescriptionItem link="https://www.w3.org/Style/CSS/Overview.en.html" />,
      <DescriptionItem informationTitle="CSS 활용 분야">CSS는 HTML이나 XML(SVG, XHTML 같은 XML 방언(dialect) 포함)로 작성된 문서의 표현을 기술하기 위해 쓰이는 스타일시트 언어입니다. <br />CSS는 요소가 화면, 종이, 음성이나 다른 매체 상에 어떻게 렌더링되어야 하는지 기술한다.
        </DescriptionItem>,
      <DescriptionItem myNameIs={ "CSS" } />,
    ]

    return (
      <div>
        <DescriptionList list={ list } />
      </div>
    );
  }
}

export default CSS;