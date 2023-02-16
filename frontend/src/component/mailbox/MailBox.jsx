import React from 'react'
import './MailBox.css';

const MailBox = () => {
  return (
    <div className="container">
        <h1 className="mailTitle">Save time , Save money!</h1>
        <span className="mailDesce">Sign up and We'll send you best deals to you</span>
        <div className="mailInputBox">
            <input type="text" placeholder='Enter Your Email here'/>
            <button>Subscribe</button>
        </div>
    </div>
  )
}

export default MailBox;