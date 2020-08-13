import React, {Component} from 'react';
import { inject, observer } from 'mobx-react';

import Content from './Content';

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
            <>
                {language_list_view}
            </>
        );
    }
}

export default AllContent;