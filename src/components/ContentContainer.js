import React, {Component} from 'react';
import { inject, observer } from 'mobx-react';

import Content from './Content';

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


@inject('store')
@observer
class ContentContainer extends Component {
    render() {
        const { store } = this.props;
        const language_list_view = language_list.map(i =>(
            i[0].some(v => v === store.presentLanguage) ? <Content onClick={this.props.onClick} image={i[1]} name={i[2]}></Content> : ""
          )
        );

        return(
            <>
            {language_list_view}
            </>
        );
    }
}

export default ContentContainer;