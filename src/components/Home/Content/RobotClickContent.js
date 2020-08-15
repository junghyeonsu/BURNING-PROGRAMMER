import React, {Component} from 'react';
import { inject, observer } from 'mobx-react';
import Content from './Content';
import '../../../styles/ContentClickComponent.css' 

@inject('store')
@observer
class RobotClickContent extends Component {
    render(){
        const { store } = this.props;
        const language_robot_list = store.languageList.map(i =>(
            i[0].some(v => v === "robot") ? <Content image={i[1]} name={i[2]}></Content> : ""
          )
        );

        return(
            <div className="click-content-container">

            <div className="header">
                <div className="header_title">
                로봇
                </div>
                <div className="information">
                    대표적으로 AWS RoboMaker를 사용해 로봇을 개발합니다.<br /><br />
                    이 서비스는 ROS기반의 로보틱스 어플리케이션 개발, 시뮬레이션, 테스트, 로봇 Fleet관리, OTA(over-the-air) 
                    배포까지 클라우드 환경에서 가능하게 해줍니다.
                </div>
            </div>

            <div className="text">
                <div className="text_title">
                    사용 언어
                </div>
                <div className="information">
                    현재 ROS는 C++ 및 Python을 지원합니다.
                </div>
            </div>

            <div className="container">
                {language_robot_list} 
            </div>
        </div>
        );
    }
}

export default RobotClickContent;