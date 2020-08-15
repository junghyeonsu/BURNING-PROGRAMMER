import React, {Component} from 'react';
import { inject, observer } from 'mobx-react';
import Content from './Content';
import '../../../styles/ContentClickComponent.css' 

@inject('store')
@observer
class GameClickContent extends Component {
    render(){
        const { store } = this.props;
        const language_front_list = store.languageList.map(i =>(
            i[0].some(v => v === "게임언어") ? <Content image={i[1]} name={i[2]}></Content> : ""
          )
        );

        const language_back_list = store.languageList.map(i =>(
            i[0].some(v => v === "게임엔진") ? <Content image={i[1]} name={i[2]}></Content> : ""
          )
        );

        return(
            <div className="click-content-container">

            <div className="header">
                <div className="header_title">
                게임
                </div>
                <div className="information">
                    게임을 개발하기 위해서는 게임에 사용되는 엔진을 공부해야합니다.<br /><br />

                    게임 개발에 사용하는 언어는 C, C++, C#, Java 등이 있습니다.<br /><br />

                    게임 엔진의 종류는 대표적으로 유니티, 인리얼엔진, Godot 엔진, Defold, Corona, GDevelop 등이 있습니다.<br /><br />
                    각 엔진별로 장/단점이 다르니 자신에게 맞는 엔진을 선택해서 공부하면 됩니다.                    
                    <br /><br />
                </div>
            </div>

            <div className="text">
                <div className="text_title">
                    게임 개발에 사용되는 언어
                </div>
            </div>

            <div className="container">
                {language_front_list} 
            </div>

            <div className="text">
                <div className="text_title">
                    게임 엔진
                </div>
            </div>

            <div className="container">
                {language_back_list}
            </div>
        </div>
        );
    }
}

export default GameClickContent;