import React, {Component} from 'react';
import './App.css';

/* Grid 관련 참고사이트들 
1. https://studiomeal.com/archives/533     (참고블로그)
*/

import Content from './components/Content';
import SidebarComponent from './components/SidebarComponent';

class App extends Component {

  render(){
    return(
      <div className="App">
        <div className="container-main">
          <div className="item-main">제목</div>
          
          <div className="item">
            <div className="container-content">
              <div className="item-content">IMAGE</div>
              <div className="item-content">IMAGE</div>
              <div className="item-content">IMAGE</div>
              <div className="item-content">IMAGE</div>
              <div className="item-content">IMAGE</div>
              <div className="item-content">IMAGE</div>
              <div className="item-content">IMAGE</div>
              <div className="item-content">IMAGE</div>
              <div className="item-content">IMAGE</div>
              <div className="item-content">IMAGE</div>
              <div className="item-content">IMAGE</div>
              <div className="item-content">IMAGE</div>
              <div className="item-content">IMAGE</div>
              <div className="item-content">IMAGE</div>
              <div className="item-content">IMAGE</div>
              <div className="item-content">IMAGE</div>
              <div className="item-content">IMAGE</div>
              <div className="item-content">IMAGE</div>
              <div className="item-content">IMAGE</div>
              <SidebarComponent></SidebarComponent>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;