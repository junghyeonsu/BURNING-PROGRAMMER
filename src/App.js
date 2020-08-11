import React, { Component } from 'react';
import './App.css';

import Content from './components/Content';
import Sidebar from './components/Sidebar';
import FireEffect from './components/FireEffect';
import ToggleButton from './components/ToggleButton';
import SidebarButton from './components/SidebarButton';

import pythonImg from './images/python.png';
import arduinoImg from './images/arduino.png';
import cPlusPlusImg from './images/C++.png';
import javaImg from './images/java.png';
import juliaImg from './images/julia.png';
import lispImg from './images/Lisp.png';
import prologImg from './images/prolog.png';
import rImg from './images/R_Programming.png';
import raspberryPiImg from './images/RaspberryPi.png';

import { Transition, TransitionGroup } from "react-transition-group";

// https://www.npmjs.com/package/react-animation-components 참고할거임.


/* 프로그래밍 언어 리스트 */
/* 순서 = 카테고리 배열(all = default), 이미지, 텍스트 */
const language_list = [
  [["all", "자바"], javaImg, "Java"],
  [["all", "web"], pythonImg, "Python"],
  [["all", "자바"], cPlusPlusImg, "C++"],
  [["all", "c++"], arduinoImg, "Arduino"],
  [["all", "web"], juliaImg, "Julia"],
  [["all", "자바"], prologImg, "Prolog"],
  [["all", "자바"], lispImg, "Lisp"],
  [["all", "java"], rImg, "R"],
  [["all", "java"], raspberryPiImg, "Raspberry Pi"],
];

class App extends Component {

  state = {
    display: true,
    presentLanguage: "all"
  };

  hideComponents = () => {
    this.setState({ display: false });
  }

  /* 카테고리 클릭했을 때 함수 */
  OnClickSidebarButton = (e) => {
    this.setState({
      presentLanguage : e.target.id
    })
  }

  render() {

    const language_list_view = language_list.map(i =>
      (
        i[0].some(v => v === this.state.presentLanguage) ? <Content image={i[1]} name={i[2]}></Content> : ""
      )
    );

    return (
      <div className="App">
        <div className="sidebar">
          <Sidebar width={200} height={"100vh"}>
              <h1>카테고리</h1>
              <SidebarButton click={this.OnClickSidebarButton}>자바</SidebarButton>
            </Sidebar>
        </div>
        <div className="container-main">
          <div className="item-main">
            <FireEffect>불</FireEffect>
            <FireEffect>타</FireEffect>
            <FireEffect>는</FireEffect>
            개발자
          </div>
          
          <div className="item-content">
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