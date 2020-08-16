import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';

import DescriptionList from '../Information/InformationContainer'
import DescriptionItem from '../Information/InformationItem'

@inject('store')
@observer
class Unity extends Component {

  render() {
    const { store } = this.props;

    const Image = store.findImage("Unity");

    const list = [
      <DescriptionItem image={ <img src={ Image } alt="My Image"></img> } imageText={ "Unity" } />,
      <DescriptionItem informationTitle="Unity 란?">유니티(Unity)는 3D 및 2D 비디오 게임의 개발 환경을 제공하는 게임 엔진이자, <br />3D 애니메이션과 건축 시각화, 가상현실(VR) 등 인터랙티브 콘텐츠 제작을 위한 통합 저작 도구이다.
        </DescriptionItem>,
      <DescriptionItem link="https://unity.com/" />,
      <DescriptionItem informationTitle="Unity 활용 분야">게임 개발에 사용하는 스크립트 언어는 C#와 자바스크립트(UnityScript라는 이름으로)를 지원한다. <br />또한 도형으로 프로그래밍(유니티 볼트 (프로그래밍 언어))이 가능해 코딩이 능숙하지 않은 일반 개발자도 쉽게 코딩이 가능하다.<br /> Boo는 유니티5부터 지원이 중단되었다. <br />스크립트 작성은 유니티와 함께 설치되는 비주얼 스튜디오(맥OS의 경우, 모노디벨로프)를 이용하며, 다른 편집기와 연동하는 것도 가능하다.<br />
      </DescriptionItem>,
      <DescriptionItem myNameIs={ "Unity" } />,
    ]

    return (
      <div>
        <DescriptionList list={ list } />
      </div>
    );
  }
}

export default Unity;