import React, {Component} from 'react';
import { inject, observer } from 'mobx-react';
import Content from './Content';
// import '../../styles/WebClickContent.css' 

@inject('store')
@observer
class WebClickContent extends Component {
    render(){
        const { store } = this.props;
        const language_list_view = store.languageList.map(i =>(
            i[0].some(v => v === store.presentLanguage) ? <Content image={i[1]} name={i[2]}></Content> : ""
          )
        );

        return(
            <>
                {language_list_view}
            </>
        );
    }
}

export default WebClickContent;