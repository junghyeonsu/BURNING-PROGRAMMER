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
import GitImg from '../images/git.png';
import GithunImg from '../images/github.png';
import VisualSourceSafeImg from '../images/VisualSourceSafe.png'
import perforceImg from '../images/perforce.png';
import bitbucketImg from '../images/bitbucket.png';


@autobind
export default class UserStore {
  /* 카테고리 클릭 관련 함수 */
  @observable presentLanguage = "all";
  @observable categoryClicked = false;
  /* 프로그래밍 언어 리스트 */
  /* 순서 = 카테고리 배열(all = default), 이미지, 텍스트, 
                      [[라이브러리 or 언어 or 프레임워크] [부모언어]] */

@observable languageList = [
  [["all", "web", "백", "게임언어","machine","백","native"],      javaImg,        "Java",           []],
  [["all", "web", "프론트","게임언어","machine","백","robot"],    pythonImg,      "Python",         []],
  [["all", "자바","게임언어","robot"],                            cPlusPlusImg,   "C++",            []],
  [["all", "c++"],                                               arduinoImg,     "Arduino",        []],
  [["all", "web","machine"],                                     juliaImg,       "Julia",          []],
  [["all", "자바"],                                              prologImg,      "Prolog",         []],
  [["all", "자바"],                                              lispImg,        "Lisp",           []],
  [["all", "자바","machine"],                                    rImg,           "R",              []],
  [["all", "java"],                                              raspberryPiImg, "Raspberry Pi",   []],
  [["all", "web", "프론트","hybrid"],                            CSSImg,         "CSS",            []],
  [["all", "web", "프론트"],                                     ReactImg,       "React" ,         ["라이브러리", "Javascript"]],
  [["all", "web", "백"],                                         PHPImg,         "PHP",            []],
  [["all", "web", "프론트","machine","hybrid"],                  javaScriptImg,  "Javascript",     ["언어", "Javascript"]],
  [["all", "web", "프론트","hybrid"],                            HTMLImg,        "HTML",           []],
  [["all",],                                                    dotNetImg,      ".Net",           []],
  [["all", "프론트"],                                            AngularJSImg,   "Angular",        ["프레임워크", "Javascript"]],
  [["all",],                                                    ClojureImg,     "Clojure",        []],
  [["all", "프론트"],                                            BootstrapImg,   "Bootstrap",      ["프레임워크"]],
  [["all","백"],                                                djangoImg,      "Django",         []],
  [["all",],                                                    ElixirImg,      "Elixir",         []],
  [["all",],                                                    FalconImg,      "Falcon",         []],
  [["all","백"],                                                FlaskImg,       "Flask",          []],
  [["all",],                                                    HaskellImg,     "Haskell",        []],
  [["all","native"],                                            kotlinImg,      "Kotlin",         []],
  [["all",],                                                    LaravelImg,     "Laravel",        []],
  [["all","DB"],                                                MySQLImg,       "MySQL",          []],
  [["all","백"],                                                NodeDotJSImg,   "Node.js",        ["프레임워크", "Javascript"]],
  [["all","cross"],                                             react_nativeImg,"React Native",   ["프레임워크", "Javascript"]],
  [["all","DB"],                                                PostgreSQLImg,  "Postgre SQL",    []],
  [["all",],                                                    RubyImg,        "Ruby",           []],
  [["all",],                                                    RubyOnRailsImg, "Ruby on Rails",  []],
  [["all",],                                                    SanicImg,       "Sanic",          []],
  [["all","machine"],                                           ScalaImg,       "Scala",          []],
  [["all","native"],                                            SwiftImg,       "Swift",          []],
  [["all",],                                                    TornadoImg,     "Tornado",        []],
  [["all","게임엔진"],                                           UnityImg,       "Unity",          []],
  [["all",],                                                    ViboraImg,      "Vibora",         []],
  [["all", "프론트"],                                            VueDotJSImg,    "Vue.js",         ["프레임워크", "Javascript"]],
  [["all", "version"],                                          GitImg,          "Git",         []],
  [["all", "version"],                                          GithunImg,       "Github",         []],
  [["all", "version"],                                          perforceImg,     "Perforce",         []],
  [["all", "version"],                                          bitbucketImg,    "Bitbucket",         []],
 ];  

  /* ImformationContents 에서 Image 찾는 함수 */
  @action findImage = (language) => {
    var image;
    this.languageList.map(i => {
      if(i[2] === language){
        image = i[1];
      }
    });
    return image;
  }

  /* 카테고리를 클릭했을 때 presentLanguage를 변경시키는 함수 */
  @action changePresentLanguage = (e) => {
      this.presentLanguage = e.target.id;
      console.log("changePresentLanguage");
  }


   /* 토글 버튼 CSS 관련 STATE */
   @observable isToggleActive = false;
   @observable one_degree = 45;
   @observable one_translate_x = 5;
   @observable one_translate_y = 5;
   @observable two_opacity = 0;
   @observable three_degree = -45;
   @observable three_translate_x = 7;
   @observable three_translate_y = -8;
   
   /* 토글 버튼 CSS 관련 함수 */
   @action clickToggleButtonAnimation = () => {
     var currentAcitve = this.isToggleActive;
     this.isToggleActive = !currentAcitve;
     if(this.isToggleActive){
       this.one_degree = 0;
       this.one_translate_x = 0;
       this.one_translate_y = 0;
       this.two_opacity = 100;
       this.three_degree = 0;
       this.three_translate_x = 0;
       this.three_translate_y = 0;
     } else {
       this.one_degree = 45;
       this.one_translate_x = 5;
       this.one_translate_y = 5;
       this.two_opacity = 0;
       this.three_degree = -45;
       this.three_translate_x = 7;
       this.three_translate_y = -8;
     }
   }
 
    /* 토글 버튼 " = " 모양으로 만드는 함수 */
  @action turnOffToggleButtonAnimation = () => {
    this.isToggleActive = true;
    this.one_degree = 0;
    this.one_translate_x = 0;
    this.one_translate_y = 0;
    this.two_opacity = 100;
    this.three_degree = 0;
    this.three_translate_x = 0;
    this.three_translate_y = 0;
  }
  

   /* 사이드바 관련 state */
   @observable sidebarWidth = 200;
   @observable sidebarXPosition = 0;
 
   /* 사이드바 관련 함수 */
   @action toggleSidebar = () => {
     if (this.sidebarXPosition < 0) {
       this.sidebarXPosition = 0;
     } else {
       this.sidebarXPosition = -this.sidebarWidth;
     }
   }
 
   /* 사이드바 숨기고 화면 맨위로 이동하는 함수 */
   @action hideSidebarAndMoveTop = () => {
     this.sidebarXPosition = -this.sidebarWidth;
     window.scrollTo({top: 0, left: 0, behavior:'smooth'});
     this.turnOffToggleButtonAnimation();
   }
}