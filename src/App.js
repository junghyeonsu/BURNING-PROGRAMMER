import React, {Component} from 'react';
import './App.css';

import Content from './components/Content';
import Sidebar from './components/Sidebar'

import pythonImg from './images/python.png';

class App extends Component {

  render(){
    return(
      <div className="App">
        <Sidebar></Sidebar>
        <div className="container-main">
          <div className="item-main">제목</div>
          
          <div className="item">
            <div className="container-content">
              <Content name={"python"} image={pythonImg}></Content>
              <Content></Content>
              <Content></Content>
              <Content></Content>
              <Content></Content>
              <Content></Content>
              <Content></Content>
              <Content></Content>
            </div>
          </div>

        </div>
      </div>
    );
  }
}

export default App;