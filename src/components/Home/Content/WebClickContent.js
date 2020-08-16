import React, {Component} from 'react';
import { inject, observer } from 'mobx-react';
import Content from './Content';
import '../../../styles/ContentClickComponent.css' 

@inject('store')
@observer
class WebClickContent extends Component {
    render(){
        const { store } = this.props;
        const language_front_list = store.languageList.map(i =>(
            i[0].some(v => v === "프론트") ? <Content image={i[1]} name={i[2]}></Content> : ""
          )
        );

        const language_back_list = store.languageList.map(i =>(
            i[0].some(v => v === "백") ? <Content image={i[1]} name={i[2]}></Content> : ""
          )
        );

        return(
            <div className="click-content-container">

                <div className="header">
                    <div className="header_title">
                    WEB
                    </div>
                    <div className="information">
                        WEB에는 크게 두가지 분야가 있습니다.<br />
                        첫번째는 프론트엔드(FrontEnd)<br />
                        두번째는 백엔드(BackEnd)<br />
                    </div>
                </div>

                <div className="text">
                    <div className="text_title">
                        프론트엔드
                    </div>
                    <div className="information">
                        웹 프론트엔드 개발은 UI(User Interface)를 개발하는 영역입니다. <br /><br />
                        쉽게 말하면 화면에 보여지는 부분을 개발하는 것입니다.

                    </div>
                </div>

                <div className="container">
                    {language_front_list} 
                </div>

                <div className="text">
                    <div className="text_title">
                        백엔드
                    </div>
                    <div className="information">
                        백엔드는 사용자와 만나지 않고 프론트엔드와와 연동하여 기술적인 부분을 처리하는 영역입니다.<br /><br />
                        
                        예를 들어, 여러분이 네이버 뉴스를 클릭하는 것이 "서버"로의 요청이 됩니다.<br />
                        네이버 서버컴퓨터가 이 요청을 받으면 네이버 뉴스 html을 반환하면 뉴스 페이지를 띄워주는데, 이러한 것들이 백엔드에서 처리되는 것입니다.
                    </div>
                </div>

                <div className="container">
                    {language_back_list}
                </div>
            </div>
        );
    }
}

export default WebClickContent;