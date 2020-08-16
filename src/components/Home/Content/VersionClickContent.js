import React, {Component} from 'react';
import { inject, observer } from 'mobx-react';
import Content from './Content';
import '../../../styles/ContentClickComponent.css' 

@inject('store')
@observer
class VersionClickContent extends Component {
    render(){
        const { store } = this.props;
        const language_version_list = store.languageList.map(i =>(
            i[0].some(v => v === "version") ? <Content image={i[1]} name={i[2]}></Content> : ""
          )
        );

        return(
            <div className="click-content-container">

            <div className="header">
                <div className="header_title">
                버전 관리
                </div>
                <div className="information">
                    버전 관리 시스템은 파일 변화를 시간에 따라 기록했다가 나중에 특정 시점의 버전을 다시 꺼내올 수 있는 시스템입니다.<br />또한 협업 도구로서의 역할도 합니다.
                    <br /><br />
                    예를 들어, 과제를 할 때 "3주차 과제", "3주차 과제 최종", "3주차 과제 진짜 최종본", "3주차 과제 진짜 최종 제출본"
                    와 같이 여러 개의 파일을 만드는 경험을 해봤을 것입니다.<br /><br />
                    이렇게 되면 파일을 관리하기 힘들 뿐더러, 나중에는 어떠한 파일이 최종본인지를 알 수 없습니다.
                    <br /><br />
                    이러한 불편함을 해결해주고 여러 사람이 협업을 가능하게 해주는 것이 버전 관리 도구입니다.
                </div>
            </div>

            <div className="text">
                <div className="text_title">
                    버전관리/협업 도구
                </div>
            </div>

            <div className="container">
                {language_version_list} 
            </div>
        </div>
        );
    }
}

export default VersionClickContent;