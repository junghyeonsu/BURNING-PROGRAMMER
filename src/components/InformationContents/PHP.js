import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';

import DescriptionList from '../Information/InformationContainer'
import DescriptionItem from '../Information/InformationItem'

@inject('store')
@observer
class PHP extends Component {

  render() {
    const { store } = this.props;

    const Image = store.findImage("PHP");

    const list = [
      <DescriptionItem image={ <img src={ Image } alt="My Image"></img> } imageText={ "PHP" } />,
      <DescriptionItem informationTitle="PHP 란?">PHP(Hypertext Preprocessor)는 프로그래밍 언어의 일종이다. <br />원래는 동적 웹 페이지를 만들기 위해 설계되었으며 이를 구현하기 위해 PHP로 작성된 코드를 HTML 소스 문서 안에 넣으면 PHP 처리 기능이 있는 웹 서버에서 해당 코드를 인식하여 작성자가 원하는 웹 페이지를 생성한다.<br /> 근래에는 PHP 코드와 HTML을 별도 파일로 분리하여 작성하는 경우가 일반적이며, PHP 또한 웹서버가 아닌 php-fpm(PHP FastCGI Process Manager)을 통해 실행하는 경우가 늘어나고 있다.
        </DescriptionItem>,
      <DescriptionItem link="https://www.php.net/" />,
      <DescriptionItem informationTitle="PHP 활용 분야">PHP는 명령 줄 인터페이스 방식의 자체 인터프리터를 제공하여 이를 통해 범용 프로그래밍 언어로도 사용할 수 있으며 그래픽 애플리케이션을 제작할 수도 있다.<br /><br />

        많은 서버 측 오픈 소스 소프트웨어는 PHP로 구현되었다.<br /> PHP를 바탕으로 하는 프로그램 중 대표적인 예로 블로깅 도구 워드프레스와 위키백과를 구동시키는 미디어위키를 들 수 있다. <br />대한민국의 PHP 기반 BBS는 제로보드, 그누보드, XpressEngine 등이 있다.<br /><br />

        PHP는 마이크로소프트의 ASP.NET, 비주얼 베이직, 매크로미디어의 콜드퓨전, 오라클의 자바나 오픈 소스 커뮤니티의 파이썬, 펄, 루비에 대한 대안으로 생각될 수 있다.<br /><br />

        PHP는 텍스트, 특히 HTML의 처리에 강점을 가지고 있다. URL의 파싱이나 폼 처리, 정규 표현식 등이 그 한 예이다. <br />또한 다양한 데이터베이스를 지원하므로 데이터베이스와 사용자간의 다리 역할도 잘 수행한다.
        <br /><br />
        PHP는 PHP 사용 허가서의 규정을 따라 릴리즈된 자유 소프트웨어이다. <br />그러나 PHP 사용 허가서는 PHP라는 단어의 사용에 제한을 두는 규정을 가지고 있기 때문에 GNU 일반 공중 사용 허가서와 호환되지 않는다.
        </DescriptionItem>,
      <DescriptionItem myNameIs={ "PHP" } />,
    ]

    return (
      <div>
        <DescriptionList list={ list } />
      </div>
    );
  }
}

export default PHP;