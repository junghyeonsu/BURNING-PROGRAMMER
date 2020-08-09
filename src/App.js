import React, {Component} from 'react';
import './App.css';

import Content from './components/Content';
import Sidebar from './components/Sidebar';
import FireEffect from './components/FireEffect';

import pythonImg from './images/python.png';
import arduinoImg from './images/arduino.png';
import cPlusPlusImg from './images/C++.png';
import javaImg from './images/java.png';
import juliaImg from './images/julia.png';
import lispImg from './images/Lisp.png';
import prologImg from './images/prolog.png';
import rImg from './images/R_Programming.png';
import raspberryPiImg from './images/RaspberryPi.png';

/* 프로그래밍 언어 리스트 */
/* 순서 = 카테고리 배열(all = default), 이미지, 텍스트 */
const language_list = [
  [["all","java"], lispImg, "java2"],
  [["all","web"], lispImg, "web2"],
  [["all","java"], lispImg, "java"],
  [["all","c++"], lispImg, "c++"],
  [["all","web"], lispImg, "web"],
  [["all","java"], lispImg, "java"],
];

class App extends Component {
    
  state = {
      display : true,
      presentLanguage : "all"
  };

  hideComponents = () => {
    this.setState({display: false});
  }

  /* 카테고리 클릭했을 때 함수 */
  // OnClickComponents = () => {
  //   this.setState({
  //     presentLanguage : "web"
  //   })
  // }

  render(){

    const language_list_view = language_list.map(i => 
      (
        i[0].some(v => v === this.state.presentLanguage) ? <Content image={i[1]} name={i[2]}></Content>:""
      )
    );

    return(
      <div className="App">
        <Sidebar></Sidebar>
        <div className="container-main">
          <div className="item-main">
            <FireEffect>불</FireEffect> 
            <FireEffect>타</FireEffect>
            <FireEffect>는</FireEffect> 
            개발자
          </div>
          
          <div className="item">
            <div className="container-content">
            
            {language_list_view}

            </div>
          </div>

        </div>
      </div>
    );
  }
}
export default App;