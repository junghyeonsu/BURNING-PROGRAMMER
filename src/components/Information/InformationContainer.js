import React, {Component} from 'react';
import './Information.css';

function InformationContainer({ list }) {
  return (
      <div className="Information-Container">
        {list}
      </div>
  );
}

export default InformationContainer;