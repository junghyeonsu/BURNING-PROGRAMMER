import React, {Component} from 'react';
import './App.css';

import Content from './components/Content';
import Sidebar from './components/Sidebar';

import pythonImg from './images/python.png';
import arduinoImg from './images/arduino.png';
import cPlusPlusImg from './images/C++.png';
import javaImg from './images/java.png';
import juliaImg from './images/julia.png';
import lispImg from './images/Lisp.png';
import prologImg from './images/prolog.png';
import rImg from './images/R_Programming.png';
import raspberryPiImg from './images/RaspberryPi.png';

class App extends Component {
    
  state = {
      display : true,
      machineLearning : true,
  };

  hideComponents = () => {
    this.setState({display: false});
    console.log(`${this.state.display}`);
  }

  showComponents = () => {
  }

  render(){
    return(
      <div className="App">
        <Sidebar></Sidebar>
        <div className="container-main">
          <div className="item-main">제목</div>
          
          <div className="item">
            <div className="container-content">
            <button
              onClick={this.hideComponents}
              >머신러닝만 감추기</button>
              {this.state.display ? <Content image={pythonImg}></Content> : null}
              <Content image={cPlusPlusImg}></Content>
              <Content image={lispImg}></Content>
              <Content image={rImg}></Content>
              <Content image={prologImg}></Content>
              <Content image={javaImg}></Content>
              <Content image={juliaImg}></Content>
              <Content image={arduinoImg}></Content>
              <Content image={raspberryPiImg}></Content>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default App;