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

const list=[
  ["java", lispImg, "java2"],
  ["web", lispImg, "web2"],
  ["java", lispImg, "java"],
  ["c++", lispImg, "c++"],
  ["web", lispImg, "web"],
  ["java", lispImg, "java"],
];

class App extends Component {
    
  state = {
      display : true,
      presentLanguage : ""
  };

  hideComponents = () => {
    this.setState({display: false});
  }

  showComponents = () => {
    this.setState({
      presentLanguage : "web"
    })
  }

  render(){

    const data = list.map(i => 
      (
        i[0] === this.state.presentLanguage ? <Content image={i[1]} name={i[2]}></Content>:""
      )
    );

    return(
      <div className="App">
        <Sidebar></Sidebar>
        <div className="container-main">
          <div className="item-main">제목</div>
          
          <div className="item">
            <div className="container-content">
            
            <button onClick={this.showComponents}>웹만 보여주세요</button>
            {data}

            </div>
          </div>

        </div>
      </div>
    );
  }
}
export default App;