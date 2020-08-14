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
                    웹 사이트
                    </div>
                    <div className="information">
                        웹사이트는 쏼라쏼라 입니다.
                        <br /><br />
                        등등
                    </div>
                </div>

                <div className="text">
                    <div className="text_title">
                        프론트엔드
                    </div>
                    <div className="information">
                        프론트엔드란?
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
                        백엔드란?
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