import React, { Component } from 'react';
import './App.css';
import { inject, observer } from 'mobx-react';

//메인
import Sidebar from './components/Home/Sidebar/Sidebar';
import HeaderText from './components/Home/Header/HeaderText';

//언어별
import Python from './components/InformationContents/kotlin_image';
import Net from './components/InformationContents/Net';

//분야별
import Web from './components/Home/Content/WebClickContent';
import Home from './components/Home/Content/AllContent';
import Cloud from './components/Home/Content/CloudClickContent';
import Database from './components/Home/Content/DatabaseClickContent';
import Game from './components/Home/Content/GameClickContent';
import Mobile from './components/Home/Content/MobileClickContent';
import Robot from './components/Home/Content/RobotClickContent';
import MachineLearning from './components/Home/Content/MachineLearningClickContent';

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
            <div className="header_text">
              <HeaderText />
          </div>

        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/Home" component={Home}/>

          <Route exact path="/Web" component={Web}/>
          <Route exact path="/Mobile" component={Mobile}/>
          <Route exact path="/MachineLearning" component={MachineLearning}/>
          <Route exact path="/Database" component={Database}/>
          <Route exact path="/Cloud" component={Cloud}/>
          <Route exact path="/Game" component={Game}/>
          <Route exact path="/Robot" component={Robot}/>
          <Route exact path="/Python" component={Python}/>
          <Route exact path="/Net" component={Net}/>


        </Switch>
      </Router>
    );
  }
}

export default App;
