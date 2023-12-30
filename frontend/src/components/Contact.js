import React from 'react'
import './contact.css';
import p1 from '../img/p2.jpg'

export default function Contact() {
  return (
    <>
        <div className="contact">
            <img className='cimg' src={p1} alt="" />
            
            <p className='pcontact'>Contact us on <br />perfumewala@gmail.com</p>
        </div>

    
    </>
  )
}
