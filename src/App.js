import React, { Component } from 'react';
import './App.css';

import Content from './components/Content';
import Sidebar from './components/Sidebar';
import FireEffect from './components/FireEffect';
import ToggleButton from './components/ToggleButton';
import SidebarButton from './components/SidebarButton';

import dotNetImg from './images/.Net.png';
import AngularJSImg from './images/AngularJS.png'
import arduinoImg from './images/arduino.png';
import BootstrapImg from './images/Bootstrap.png';
import CImg from './images/C.png'
import CsharpImg from './images/Csharp.png'
import cPlusPlusImg from './images/C++.png';
import ClojureImg from './images/Clojure.png';
import CSSImg from './images/CSS.png';
import djangoImg from './images/django.png';
import ElixirImg from './images/Elixir.png';
import FalconImg from './images/Falcon.png';
import FlaskImg from './images/Flask.png';
import GoImg from './images/Go.png'
import HaskellImg from './images/Haskell.png';
import HTMLImg from './images/HTML.png';
import javaImg from './images/java.png';
import javaScriptImg from './images/JavaScript.png';
import juliaImg from './images/julia.png';
import kotlinImg from './images/kotlin_image.png';
import LaravelImg from './images/Laravel.png';
import lispImg from './images/Lisp.png';
import MySQLImg from './images/MySQL.png';
import NodeDotJSImg from './images/Node.js.png';
import PHPImg from './images/PHP.png';
import PostgreSQLImg from './images/PostgreSQL.png'
import prologImg from './images/prolog.png';
import pythonImg from './images/python.png';
import rImg from './images/R_Programming.png';
import raspberryPiImg from './images/RaspberryPi.png';
import ReactImg from './images/React.png';
import react_nativeImg from './images/react-native_image.png';
import RubyImg from './images/Ruby.png';
import RubyOnRailsImg from './images/Ruby on Rails.png';
import SanicImg from './images/Sanic.png';
import ScalaImg from './images/Scala.png';
import SwiftImg from './images/swift_image.png';
import TornadoImg from './images/Tornado.png';
import UnityImg from './images/Unity.png';
import ViboraImg from './images/Vibora.png';
import VueDotJSImg from './images/Vue.js.png';

import { Transition, TransitionGroup } from "react-transition-group";

// https://www.npmjs.com/package/react-animation-components 참고할거임.


/* 프로그래밍 언어 리스트 */
/* 순서 = 카테고리 배열(all = default), 이미지, 텍스트 */
// 처리 안 한 것 : 자바 혹은 java로 설정
const language_list = [
  [["all", "웹"], dotNetImg, ".Net"],
  [["all", "웹"], AngularJSImg, "AngularJS"],
  [["all", "아두이노 / 라즈베리파이"], arduinoImg, "Arduino"],
  [["all", "웹"], BootstrapImg, "Bootstrap"],
  [["all", "보안"], CImg, "C"],
  [["all", "블록체인"], CsharpImg, "C#"],
  [["all", "게임", "블록체인", "보안", "머신러닝"], cPlusPlusImg, "C++"],
  [["all", "자바"], ClojureImg, "Clojure"],
  [["all", "웹"], CSSImg, "CSS"],
  [["all", "웹"], djangoImg, "Django"],
  [["all", "자바"], ElixirImg, "Elixir"],
  [["all", "자바"], FalconImg, "Falcon"],
  [["all", "웹"], FlaskImg, "Flask"],
  [["all", "블록체인"], GoImg, "Go"],
  [["all", "자바"], HaskellImg, "Haskell"],
  [["all", "웹"], HTMLImg, "HTML"],
  [["all", "모바일", "머신러닝"], javaImg, "Java"],
  [["all", "웹", "블록체인"], javaScriptImg, "JavaScript"],
  [["all", "머신러닝"], juliaImg, "Julia"],
  [["all", "모바일"], kotlinImg, "Kotlin"],
  [["all", "모바일"], LaravelImg, "Laravel"],
  [["all", "머신러닝"], lispImg, "Lisp"],
  [["all", "데이터 베이스"], MySQLImg, "MySQL"],
  [["all", "웹"], NodeDotJSImg, "Node.JS"],
  [["all", "웹"], PHPImg, "PHP"],
  [["all", "데이터 베이스"], PostgreSQLImg, "PostgreSQL"],
  [["all", "머신러닝"], prologImg, "Prolog"],
  [["all", "머신러닝", "웹", "보안", "블록체인"], pythonImg, "Python"],
  [["all", "머신러닝"], rImg, "R"],
  [["all", "아두이노 / 라즈베리파이"], raspberryPiImg, "Raspberry Pi"],
  [["all", "웹"], ReactImg, "React"],
  [["all", "모바일"], react_nativeImg, "React-Native"],
  [["all", "웹"], RubyImg, "Ruby"],
  [["all", "웹"], RubyOnRailsImg, "Ruby On Rail"],
  [["all", "웹"], SanicImg, "Sanic"],
  [["all", "java"], ScalaImg, "Scala"],
  [["all", "모바일"], SwiftImg, "Swift"],
  [["all", "웹"], TornadoImg, "Tornado"],
  [["all", "게임"], UnityImg, "Unity"],
  [["all", "웹"], ViboraImg, "Vibora"],
  [["all", "웹"], VueDotJSImg, "Vue.JS"],
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
              <SidebarButton click={this.OnClickSidebarButton}>웹</SidebarButton>
              <SidebarButton click={this.OnClickSidebarButton}>모바일</SidebarButton>
              <SidebarButton click={this.OnClickSidebarButton}>데이터 베이스</SidebarButton>
              <SidebarButton click={this.OnClickSidebarButton}>클라우드</SidebarButton>
              <SidebarButton click={this.OnClickSidebarButton}>머신러닝</SidebarButton>
              <SidebarButton click={this.OnClickSidebarButton}>아두이노 / 라즈베리파이</SidebarButton>
              <SidebarButton click={this.OnClickSidebarButton}>블록체인</SidebarButton>
              <SidebarButton click={this.OnClickSidebarButton}>보안</SidebarButton>
              <SidebarButton click={this.OnClickSidebarButton}>게임</SidebarButton>
              <SidebarButton click={this.OnClickSidebarButton}>빅데이터</SidebarButton>
              <SidebarButton click={this.OnClickSidebarButton}>로봇</SidebarButton>
              <SidebarButton click={this.OnClickSidebarButton}>통신</SidebarButton>
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