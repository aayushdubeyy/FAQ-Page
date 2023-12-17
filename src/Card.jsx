import React, { useState } from 'react'
import Plusicon from './Images/icon-plus.svg';
import Minusicon from './Images/icon-minus.svg';
import Staricon from './Images/icon-star.svg';
import './Card.css'
const Card = () => {
  const [buttonOn, setButton] = useState(true);
  function buttonHandler(){
    setButton(!buttonOn)
  }
  return (
    <div className='main-body'>
      <div className='flexer1'>
        <img src={Staricon} alt="" className='image' id='star-icon'/>
        <h1>FAQs</h1>
      </div>
      <div className='flexer'>
        <h5>What is Frontend Mentor, and how will it help me?</h5>
       
          <img src={buttonOn ? Minusicon : Plusicon} alt="" className='image' onClick={buttonHandler} id='icon'/>
       
      </div>
      {buttonOn ? <p className='para'>
        Frontend Mentor offers realistic coding Challenges to help developers
        improve their frontend coding skills with projects in HTML, CSS, and
        JavaScript. It's suitable for all levels and ideal for portfolio building.
      </p> : <p></p>}
      
      <div className='flexer'>
        <h5>is Frontend Mentor free?</h5>
        <img src={Plusicon} alt="" className='image' id='icon'/>
      </div>
      <div className='flexer'>
        <h5>Can I use Frontend Mentor projects in my portfolio?</h5>
        <img src={Plusicon} alt="" className='image' id='icon'/>
      </div>
      <div className='flexer'>
        <h5>How can I get help if I'm stuck on a challenge?</h5>
        <img src={Plusicon} alt="" className='image' id='icon'/>
      </div>
    </div>
  )
}

export default Card
