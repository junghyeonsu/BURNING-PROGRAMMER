import "../../../styles/Sidebar.css";
import React, {Component} from "react";
import { inject, observer } from 'mobx-react';

import ToggleButton from "./ToggleButton";
import SidebarButton from './SidebarButton';
import { render } from "@testing-library/react";


@inject('store')
@observer
class Sidebar extends Component {
  
    render(){
    const { store } = this.props;
    const minHeight = "100vh";
    return (
      <>
        <div
          className="side-bar"
          style={{
            transform: `translatex(${store.sidebarXPosition}px)`,
            width: store.sidebarWidth,
            minHeight: minHeight
          }}>
          <div
           onClick={store.toggleSidebar}
           className="toggle-menu"
           style={{
             transform: `translate(${store.sidebarWidth}px, 2vh)`
           }}>
             <ToggleButton></ToggleButton>
          </div>
          
          <div className="content">
              <h1>카테고리</h1>
              <div className="Home">
              <SidebarButton>Home</SidebarButton>
              </div>
              <SidebarButton>Web</SidebarButton>
              <SidebarButton>Mobile</SidebarButton>
              <SidebarButton>MachineLearning</SidebarButton>
              <SidebarButton>Database</SidebarButton>
              <SidebarButton>VersionControl</SidebarButton>
              <SidebarButton>Game</SidebarButton>
              <SidebarButton>Robot</SidebarButton>
          </div>
  
        </div>
  
      </>
    );
  }
};

export default Sidebar;