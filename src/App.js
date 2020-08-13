import React, { Component } from 'react';
import './App.css';
import { inject, observer } from 'mobx-react';

//메인
import ContentContainer from './components/Home/Content/ContentContainer';
import Sidebar from './components/Home/Sidebar/Sidebar';
import HeaderText from './components/Home/Header/HeaderText';


//언어별
import Python from './components/Python/Python';


//분야별
import Web from './components/Home/Content/WebClickContent';


//필요 라이브러리
import { Transition, TransitionGroup } from "react-transition-group";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'; 
import { Link } from 'react-router-dom';

// https://www.npmjs.com/package/react-animation-components 참고할거임.

@inject('store')
@observer 
class App extends Component {
   render() {
    return (
      <Router>
          <div className="sidebar">
            <Sidebar width={200} height={"100vh"} />
          </div>
          <div className="container-main">
            <div className="item-main">
              <HeaderText />
            </div>
          </div>

        <Switch>
          <Route exact path="/" component={ContentContainer}/>
          <Route exact path="/Python" component={Python}/>
          <Route exact path="/web" component={Web}/>
        </Switch>
      </Router>
    );
  }
}

export default App;