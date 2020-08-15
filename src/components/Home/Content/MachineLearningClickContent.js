import React, {Component} from 'react';
import { inject, observer } from 'mobx-react';
import Content from './Content';
import '../../../styles/ContentClickComponent.css' 

@inject('store')
@observer
class MachineLearingClickContent extends Component {
    render(){
        const { store } = this.props;
        const language_machine_list = store.languageList.map(i =>(
            i[0].some(v => v === "machine") ? <Content image={i[1]} name={i[2]}></Content> : ""
          )
        );

        return(
            <div className="click-content-container">

            <div className="header">
                <div className="header_title">
                머신러닝
                </div>
                <div className="information">
                    머신 러닝을 직역하면 '기계학습'입니다.
                    <br /><br />
                    "데이터를 구문 분석하고 해당 데이터를 통해 학습한 후 
                    정보를 바탕으로 결정을 내리기 위해 학습한 내용을 적용하는 알고리즘"
                    <br /><br />
                    음악 스트리밍 서비스에서 청취자의 플레이 리스트에 있는 노래를
                    바탕으로 새로운 노래나 아티스트를 추천해주는 것을 예로 들 수 있습니다.
                    <br /><br />
                    더 나아가 딥러닝이라는 분야도 있는데 좌측 사이드바에서 "딥러닝"을 클릭하시면 자세한 정보를 얻을 수 있습니다.

                </div>
            </div>

            <div className="text">
                <div className="text_title">
                    사용 언어(가장 많이 사용되는 언어는 Python)
                </div>
            </div>

            <div className="container">
                {language_machine_list} 
            </div>
        </div>
        );
    }
}

export default MachineLearingClickContent;