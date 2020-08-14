import React, { Component } from 'react';
import './Information.css';
import { render } from '@testing-library/react';

class InformationItem extends Component{
  render(){
    const { image,imageText, informationTitle, details, children, link, type, whoami} = this.props;
    return (
      <div className="InformationItem">
        <div>{image}</div>
        <div>{imageText}</div>
        <div>{informationTitle}</div>
        <div>{details}</div>
        <div>{children}</div>
        <div>{link}</div>
        <div>{whoami}</div>
        <div>{type}</div>
      </div>
    ); 
  }
}

export default InformationItem;