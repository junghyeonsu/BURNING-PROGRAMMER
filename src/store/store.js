// stores/userStore.js
import { observable, action } from "mobx";
import { autobind } from 'core-decorators';

import dotNetImg from '../images/.Net.png';
import AngularJSImg from '../images/AngularJS.png'
import arduinoImg from '../images/arduino.png';
import BootstrapImg from '../images/Bootstrap.png';
import cPlusPlusImg from '../images/C++.png';
import ClojureImg from '../images/Clojure.png';
import CSSImg from '../images/CSS.png';
import djangoImg from '../images/django.png';
import ElixirImg from '../images/Elixir.png';
import FalconImg from '../images/Falcon.png';
import FlaskImg from '../images/Flask.png';
import HaskellImg from '../images/Haskell.png';
import HTMLImg from '../images/HTML.png';
import javaImg from '../images/java.png';
import javaScriptImg from '../images/JavaScript.png';
import juliaImg from '../images/julia.png';
import kotlinImg from '../images/kotlin_image.png';
import LaravelImg from '../images/Laravel.png';
import lispImg from '../images/Lisp.png';
import MySQLImg from '../images/MySQL.png';
import NodeDotJSImg from '../images/Node.js.png';
import PHPImg from '../images/PHP.png';
import PostgreSQLImg from '../images/PostgreSQL.png'
import prologImg from '../images/prolog.png';
import pythonImg from '../images/python.png';
import rImg from '../images/R_Programming.png';
import raspberryPiImg from '../images/RaspberryPi.png';
import ReactImg from '../images/React.png';
import react_nativeImg from '../images/react-native_image.png';
import RubyImg from '../images/Ruby.png';
import RubyOnRailsImg from '../images/Ruby on Rails.png';
import SanicImg from '../images/Sanic.png';
import ScalaImg from '../images/Scala.png';
import SwiftImg from '../images/swift_image.png';
import TornadoImg from '../images/Tornado.png';
import UnityImg from '../images/Unity.png';
import ViboraImg from '../images/Vibora.png';
import VueDotJSImg from '../images/Vue.js.png';

@autobind
export default class UserStore {
  @observable presentLanguage = "all";
  @observable categoryClicked = false;
  /* 프로그래밍 언어 리스트 */
  /* 순서 = 카테고리 배열(all = default), 이미지, 텍스트 */
  @observable languageList = [
    [["all", "web", "백"], javaImg, "Java"],
    [["all", "web", "프론트"], pythonImg, "Python"],
    [["all", "자바"], cPlusPlusImg, "C++"],
    [["all", "c++"], arduinoImg, "Arduino"],
    [["all", "web"], juliaImg, "Julia"],
    [["all", "자바"], prologImg, "Prolog"],
    [["all", "자바"], lispImg, "Lisp"],
    [["all", "자바"], rImg, "R"],
    [["all", "java"], raspberryPiImg, "Raspberry Pi"],
    [["all", "web", "프론트"], CSSImg, "CSS"],
    [["all", "web", "프론트"], ReactImg, "React"],
    [["all", "web", "백"], PHPImg, "PHP"],
    [["all", "web", "프론트"], javaScriptImg, "Javascript"],
    [["all", "web", "프론트"], HTMLImg, "HTML"],
  ];

  @action changePresentLanguage = (e) => {
      this.presentLanguage = e.target.id;
      console.log("changePresentLanguage");
  }

  @action categoryOnClicked = () => {
    this.categoryClicked = true;
    console.log("categoryOnClicked");
  }

  @action categoryOnClickedAndchangePresentLanguage = (e) => {
    this.presentLanguage = e.target.id;
    this.categoryClicked = true;
    console.log("categoryOnClickedAndchangePresentLanguage");
  }
}