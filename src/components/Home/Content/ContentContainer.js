import React, {Component} from 'react';
import { inject, observer } from 'mobx-react';

import Content from './Content';
import AllContent from './AllContent';
import WebClickContent from './WebClickContent';

@inject('store')
@observer
class ContentContainer extends Component {
    render() {
        const { store } = this.props;
        return(
            <>
                {!store.categoryClicked ? <AllContent /> : ""}
                {store.categoryClicked ? <WebClickContent /> : ""}
            </>
        );
    }
}

export default ContentContainer;