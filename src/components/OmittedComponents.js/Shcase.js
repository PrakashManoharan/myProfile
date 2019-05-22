import React from 'react';
import PM from '../components/images/PM-01.jpg';
import '../css/Shcase.css';

export default function Shcase() {
  return (
    <div className="row">
      <div className="col md3">
        <img className="header-image" src={PM} alt="PM-Pic" />
      </div>
    </div>
  );
}
