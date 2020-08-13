import React, {Component} from 'react';
import { inject, observer } from 'mobx-react';
import Content from './Content';
import '../../../App.css';

@inject('store')
@observer
class AllContent extends Component {
    render() {
        const { store } = this.props;
        const language_list_view = store.languageList.map(i =>(
             <Content image={i[1]} name={i[2]}></Content>
          )
        );

        return(
            <div className="container-content">
                {language_list_view}
            </div>
        );
    }
}

export default AllContent;