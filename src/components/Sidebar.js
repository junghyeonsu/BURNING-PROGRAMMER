import "../styles/Sidebar.css";
import React from "react";

import ToggleButton from "./ToggleButton";
import SidebarButton from './SidebarButton';

export const Sidebar = ({ width, height, children }) => {
  const [xPosition, setX] = React.useState(-width);

  const toggleMenu = () => {
    if (xPosition < 0) {
      setX(0);
    } else {
      setX(-width);
    }
  };

  React.useEffect(() => {
    setX(0);
  }, []);
  return (
    <React.Fragment>
      <div
        className="side-bar"
        style={{
          transform: `translatex(${xPosition}px)`,
          width: width,
          minHeight: height
        }}>
        <div
         onClick={() => toggleMenu()}
         className="toggle-menu"
         style={{
           transform: `translate(${width}px, 2vh)`
         }}>
           <ToggleButton></ToggleButton>
        </div>
        
        <div className="content">
            <h1>카테고리</h1>
            <SidebarButton>자바</SidebarButton>
        </div>

      </div>

    </React.Fragment>
  );
};

export default Sidebar;