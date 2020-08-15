import React, {Component} from 'react';
import { inject, observer } from 'mobx-react';
import Content from './Content';
import '../../../styles/ContentClickComponent.css' 

@inject('store')
@observer
class MobileClickContent extends Component {
    render(){
        const { store } = this.props;
        const language_hybrid_list = store.languageList.map(i =>(
            i[0].some(v => v === "hybrid") ? <Content image={i[1]} name={i[2]}></Content> : ""
          )
        );

        const language_cross_list = store.languageList.map(i =>(
            i[0].some(v => v === "cross") ? <Content image={i[1]} name={i[2]}></Content> : ""
          )
        );
        const language_native_list = store.languageList.map(i =>(
            i[0].some(v => v === "native") ? <Content image={i[1]} name={i[2]}></Content> : ""
          )
        );

        

        return(
            <div className="click-content-container">

            <div className="header">
                <div className="header_title">
                모바일
                </div>
                <div className="information">
                    모바일 어플리케이션을 개발하는 방법은 크게 세가지가 있습니다.
                    <br /><br />
                    1. 하이브리드 앱
                    <br /><br />
                    2. 크로스 플랫폼 앱
                    <br /><br />
                    3. 네이티브 앱
                </div>
            </div>

            <div className="text">
                <div className="text_title">
                    하이브리드 앱
                </div>
                <div className="information">
                    웹 뷰를 감싸고 있는 모바일 앱입니다.<br /><br />
                    HTML, CSS, Javascript만 알아도 충분히 만들 수 있습니다.<br /><br />
                    단순하다는 장점이 있지만, 간단한 기능밖에 쓰지 못하면 모든 기능을 직접 만들어야한다는 단점이 있습니다.
                </div>
            </div>

            <div className="container">
                {language_hybrid_list} 
            </div>

            <div className="text">
                <div className="text_title">
                    크로스 플랫폼 앱
                </div>
                <div className="information">
                    네이티브 언어가 아닌 것으로 코딩을 한 후에 ios/android가 이해할 수 있는 코드로 변환되는 방식입니다.<br /><br />
                    예를 들어, 리액트 네이티브로 코딩을 하면 이 것이 자바스크립트 코드로 컴파일되고<br /><br />
                    ios/android가 이 코드들을 각자의 자바스크립트 엔진으로 실행합니다. 
                </div>
            </div>

            <div className="container">
                {language_cross_list}
            </div>

            <div className="text">
                <div className="text_title">
                    네이티브 앱
                </div>
                <div className="information">
                    android, ios코드를 직접 사용합니다.<br /><br />
                    ios는 swift를 배워야하고<br /><br />
                    android는 java or kotlin이 필요합니다.
                </div>
            </div>

            <div className="container">
                {language_native_list}
            </div>
        </div>
        );
    }
}

export default MobileClickContent;