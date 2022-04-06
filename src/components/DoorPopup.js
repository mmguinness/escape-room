import React from 'react';
import "./doorpopup.css";

const DoorPopup = props => {
  return (
    <div className='doorpopup-box'>
      <div className='box'>
        <button className='btn-close'>x</button>
        The door is locked!
      </div>
    </div>
  )
}

export default DoorPopup;