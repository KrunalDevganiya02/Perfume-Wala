import React from 'react'
import './log.css';

export default function Log() {
  return (
    <>
        <div className="con">
            
            <div className="box1">
                <h1>Sign Up Page</h1>
                
                    <input type="text" placeholder='Enter your Name' />
                    <input type="text" placeholder='Enter your UserName' />
                    <input type="password" placeholder='Enter your PassWord' />
                    <input type="password" placeholder='Confirm your PassWord' />
                    <button type="submit">Submit</button>
                
            </div>

        </div>
    
    </>
  )
}
