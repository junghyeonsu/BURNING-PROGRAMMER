import React, { Component } from 'react';
import './App.css';
import { inject, observer } from 'mobx-react';

//메인
import Sidebar from './components/Home/Sidebar/Sidebar';
import HeaderText from './components/Home/Header/HeaderText';

//언어별
import AngularJS from './components/InformationContents/AngularJS';
import arduino from './components/InformationContents/arduino';
import Bootstrap from './components/InformationContents/Bootstrap';
import Cplus from './components/InformationContents/Cplus';
import Clojure from './components/InformationContents/Clojure';
import CSS from './components/InformationContents/CSS';
import django from './components/InformationContents/django';
import Elixir from './components/InformationContents/Elixir';
import Falcon from './components/InformationContents/Falcon';
import Flask from './components/InformationContents/Flask';
import Haskell from './components/InformationContents/Haskell';
import HTML from './components/InformationContents/HTML';
import java from './components/InformationContents/java';
import JavaScript from './components/InformationContents/JavaScript';
import julia from './components/InformationContents/julia';
import kotlin_image from './components/InformationContents/kotlin_image';
import Laravel from './components/InformationContents/Laravel';
import Lisp from './components/InformationContents/Lisp';
import MySQL from './components/InformationContents/MySQL';
import Net from './components/InformationContents/Net';
import Nodejs from './components/InformationContents/Node.js';
import PHP from './components/InformationContents/PHP';
import PostgreSQL from './components/InformationContents/PostgreSQL';
import prolog from './components/InformationContents/prolog';
import python from './components/InformationContents/python';
import R_Programming from './components/InformationContents/R_Programming';
import RaspberryPi from './components/InformationContents/RaspberryPi';
import Rreact from './components/InformationContents/Rreact';
import reactnativeimage from './components/InformationContents/react-native_image';
import Ruby from './components/InformationContents/Ruby';
import RubyonRails from './components/InformationContents/Ruby on Rails';
import Sanic from './components/InformationContents/Sanic';
import Scala from './components/InformationContents/Scala';
import swift_image from './components/InformationContents/swift_image';
import Tornado from './components/InformationContents/Tornado';
import Unity from './components/InformationContents/Unity';
import Vibora from './components/InformationContents/Vibora';
import Vuejs from './components/InformationContents/Vue';
import Git from './components/InformationContents/Git';
import Github from './components/InformationContents/Github';
import Bitbucket from './components/InformationContents/Bitbucket';
import Perforce from './components/InformationContents/Perforce';

//분야별
import Web from './components/Home/Content/WebClickContent';
import Home from './components/Home/Content/AllContent';
import VersionClickContent from './components/Home/Content/VersionClickContent';
import Database from './components/Home/Content/DatabaseClickContent';
import Game from './components/Home/Content/GameClickContent';
import Mobile from './components/Home/Content/MobileClickContent';
import Robot from './components/Home/Content/RobotClickContent';
import MachineLearning from './components/Home/Content/MachineLearningClickContent';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Link } from 'react-router-dom';

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
          <Route exact path="/VersionControl" component={VersionClickContent}/>
          <Route exact path="/Game" component={Game}/>
          <Route exact path="/Robot" component={Robot}/>

          {/* 언어 Route 부분 */}
          <Route exact path="/Angular" component={AngularJS}/>
          <Route exact path="/arduino" component={arduino}/>
          <Route exact path="/Bootstrap" component={Bootstrap}/>
          <Route exact path="/C++" component={Cplus}/>
          <Route exact path="/Clojure" component={Clojure}/>
          <Route exact path="/CSS" component={CSS}/>
          <Route exact path="/django" component={django}/>
          <Route exact path="/Elixir" component={Elixir}/>
          <Route exact path="/Falcon" component={Falcon}/>
          <Route exact path="/Flask" component={Flask}/>
          <Route exact path="/Haskell" component={Haskell}/>
          <Route exact path="/HTML" component={HTML}/>
          <Route exact path="/java" component={java}/>
          <Route exact path="/JavaScript" component={JavaScript}/>
          <Route exact path="/julia" component={julia}/>
          <Route exact path="/Kotlin" component={kotlin_image}/>
          <Route exact path="/Laravel" component={Laravel}/>
          <Route exact path="/Lisp" component={Lisp}/>
          <Route exact path="/MySQL" component={MySQL}/>
          <Route exact path="/.Net" component={Net}/>
          <Route exact path="/Node.js" component={Nodejs}/>
          <Route exact path="/PHP" component={PHP}/>
          <Route exact path="/Postgre SQL" component={PostgreSQL}/>
          <Route exact path="/prolog" component={prolog}/>
          <Route exact path="/python" component={python}/>
          <Route exact path="/R" component={R_Programming}/>
          <Route exact path="/Raspberry Pi" component={RaspberryPi}/>
          <Route exact path="/React" component={Rreact}/>
          <Route exact path="/React Native" component={reactnativeimage}/>
          <Route exact path="/Ruby" component={Ruby}/>
          <Route exact path="/Ruby on Rails" component={RubyonRails}/>
          <Route exact path="/Sanic" component={Sanic}/>
          <Route exact path="/Scala" component={Scala}/>
          <Route exact path="/Swift" component={swift_image}/>
          <Route exact path="/Tornado" component={Tornado}/>
          <Route exact path="/Unity" component={Unity}/>
          <Route exact path="/Vibora" component={Vibora}/>
          <Route exact path="/Vue.js" component={Vuejs}/>
          <Route exact path="/Git" component={Git}/>
          <Route exact path="/Github" component={Github}/>
          <Route exact path="/Bitbucket" component={Bitbucket}/>
          <Route exact path="/Perforce" component={Perforce}/>
        </Switch>
      </Router>
    );
  }
}

export default App;
