import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';

import DescriptionList from '../Information/InformationContainer'
import DescriptionItem from '../Information/InformationItem'

@inject('store')
@observer
class Tornado extends Component {

  render() {
    const { store } = this.props;

    const Image = store.findImage("Tornado");

    const list = [
      <DescriptionItem image={ <img src={ Image } alt="My Image"></img> } imageText={ "Tornado" } />,
      <DescriptionItem informationTitle="Tornado 란?">- 비동기 네트워킹 라이브러리<br />
        - 수만개의 개방형 연결로 확장 가능<br />
        - 상용자와의 장기 연결이 필요한 프로그램의 적합<br />
        - 포퍼먼스도 안나오고 커뮤니티 파워도 약하다.<br />
      </DescriptionItem>,
      <DescriptionItem link="https://www.tornadoweb.org/en/stable/" />,
      <DescriptionItem informationTitle="Tornado 활용 분야">Tornado 는 Python으로 작성된 확장 가능한 비차단 웹 서버 및 웹 애플리케이션 프레임 워크 이다.
        </DescriptionItem>,
      <DescriptionItem myNameIs={ "Tornado" } />,
    ]

    return (
      <div>
        <DescriptionList list={ list } />
      </div>
    );
  }
}

export default Tornado;