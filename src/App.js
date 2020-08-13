import React, { Component } from 'react';
import './App.css';
import { inject, observer } from 'mobx-react';

import ContentContainer from './components/Content/ContentContainer';
import Sidebar from './components/Sidebar/Sidebar';
import HeaderText from './components/Header/HeaderText';

import { Transition, TransitionGroup } from "react-transition-group";


// https://www.npmjs.com/package/react-animation-components 참고할거임.

@inject('store')
@observer
class App extends Component {
   render() {
    return (
      <div className="App">
        <div className="sidebar">
          <Sidebar width={200} height={"100vh"} />
        </div>
        <div className="container-main">
          <div className="item-main">
            <HeaderText />
          </div>
            <div>
              <ContentContainer />
          </div>
        </div>
      </div>
    );
  }
}

export default App;