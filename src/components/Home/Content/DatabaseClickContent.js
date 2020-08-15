import React, {Component} from 'react';
import { inject, observer } from 'mobx-react';
import Content from './Content';
import '../../../styles/ContentClickComponent.css' 

@inject('store')
@observer
class DatabaseClickContent extends Component {
    render(){
        const { store } = this.props;
        const language_DB_list = store.languageList.map(i =>(
            i[0].some(v => v === "DB") ? <Content image={i[1]} name={i[2]}></Content> : ""
          )
        );

        return(
            <div className="click-content-container">

            <div className="header">
                <div className="header_title">
                데이터베이스
                </div>
                <div className="information">
                    여러 사람이 공유하고 사용할 목적으로 통합 관리되는 정보의 집합입니다.<br /><br />
                    이러한 데이터 베이스를 관리하는 시스템이 필요한데 이를 RDBMS라고 부릅니다.<br /><br />
                    대표적으로 오라클DB, 마이크로소프트 SQL서버, MySQL 등이 있습니다.
                </div>
            </div>

            <div className="container">
                {language_DB_list} 
            </div>
        </div>
        );
    }
}

export default DatabaseClickContent;