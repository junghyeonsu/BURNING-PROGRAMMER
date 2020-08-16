import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';

import DescriptionList from '../Information/InformationContainer'
import DescriptionItem from '../Information/InformationItem'

@inject('store')
@observer
class Git extends Component {

  render() {
    const { store } = this.props;

    const Image = store.findImage("Git");

    const list = [
      <DescriptionItem image={ <img src={ Image } alt="My Image"></img> } imageText={ "Git" } />,
      <DescriptionItem informationTitle="Git 란? ">Git은 분산형 버전 관리 시스템(VCS)입니다.<br /><br />
      여러분이 혼자 또는 여러 사람과 같이 프로젝트를 할 때 시간에 흐름에 따라 소스 코드를 관리하는 시스템입니다.
      <br /><br />
      예를 들어, 여러 사람이 하나의 프로젝트를 진행할 때, 철수가 만든 코드와 영희가 만든 코드를 합치려면 메신저나 메일을 통해
      코드를 공유하고 바뀐 부분을 일일이 찾아서 수정해야합니다.
      <br /><br />
      또한 개인 프로젝트를 진행할 때도, [개인 프로젝트1], [개인 프로젝트1 최종 제출본], [개인 프로젝트 진짜 진짜 최종본]과 같이
      관리하기 힘든데, 이와 같은 문제점들을 해결하기 위해 등장한 도구가 바로 "Git"입니다.</DescriptionItem>,
      <DescriptionItem link="https://git-scm.com/" />,
      <DescriptionItem myNameIs={ "Git" } />,
    ]

    return (
      <div>
        <DescriptionList list={ list } />
      </div>
    );
  }
}

export default Git;