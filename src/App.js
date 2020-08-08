import React, {Component} from 'react';
import './App.css';

import Content from './components/Content';
import Sidebar from './components/Sidebar'

import pythonImg from './images/python.png';

class App extends Component {
  constructor(props){
    super(props);
    this.hideComponents = this.hideComponents.bind(this);
    this.showComponents = this.showComponents.bind(this);
    this.state = {
      display : true,
      machineLearning : true,
    };
  }
  hideComponents() {
    this.setState({display: false});
  }

  showComponents() {
    this.setState({display: true});
  }
  
  // displayable = () => {
  //   document.getElementsByClassName("item-content")
  //   document.getElementsByClassName("item-content").width = 0;
  // }

  render(){
    const display = this.state.display;
    let python;
    let cPlusPlus;
    let lisp;
    let r;
    let prolog;
    let java;
    let julia;
    if(display) {
      python = <div className="item-content">Python</div>
    }
    return(
      <div className="App">
        <Sidebar></Sidebar>
        <div className="container-main">
          <div className="item-main">제목</div>
          
          <div className="item">
            <div className="container-content">
            <button
              onClick={this.hideComponents}
              />
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