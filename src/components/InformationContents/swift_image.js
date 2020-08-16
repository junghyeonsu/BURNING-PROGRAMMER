import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';

import DescriptionList from '../Information/InformationContainer'
import DescriptionItem from '../Information/InformationItem'

@inject('store')
@observer
class swift_image extends Component {

  render() {
    const { store } = this.props;

    const Image = store.findImage("Swift");

    const list = [
      <DescriptionItem image={ <img src={ Image } alt="My Image"></img> } imageText={ "Swift" } />,
      <DescriptionItem informationTitle="Swift 란?">A powerful open language that lets everyone build amazing apps.<br />
        누구나 놀라운 앱을 만들 수 있게 해주는 강력한 개방형 언어.
        </DescriptionItem>,
      <DescriptionItem link="https://developer.apple.com/kr/swift/" />,
      <DescriptionItem informationTitle="Swift 활용 분야">기존 Objective-C의 단점을 보완하고,<br />
        LLVM/Clang 컴파일러로 빌드되는 애플의 신규 프로그래밍 언어이다. <br />
        기존 Objective-C에 비해 클로저, 다중 리턴 타입, 네임스페이스, 제네릭, <br />
        타입 인터페이스 등 Objective-C에는 없었던 현대 프로그래밍 언어가 갖고 있는<br />
        기능을 많이 포함시켰으며, 이에 따라 일정한 성능 향상을 보이고 있다. <br />
        애플이 만든 언어답게 iOS와 iPadOS, macOS를 대상으로 한다.<br />
      </DescriptionItem>,
      <DescriptionItem myNameIs={ "Swift" } />,
    ]

    return (
      <div>
        <DescriptionList list={ list } />
      </div>
    );
  }
}

export default swift_image;