import { useState } from 'react'
import emailjs from 'emailjs-com'

const initialState = {
  name: '',
  email: '',
  message: '',
}
export const Contact = (props) => {

  return (
    <div>
      <div id='contact'>
        <div className='container'>
   
            <div className='row'>
              
              <div className='social'>
                <ul>
                  <li>
                    <a href={props.data ? props.data.twitter : '/'}>
                      <i className='fa fa-twitter'></i>
                    </a>
                  </li>
                  <li>
                    <a href={props.data ? props.data.youtube : '/'}>
                      <i className='fa fa-youtube'></i>
                    </a>
                  </li>
                </ul>  
                <div className='container text-center'>
                  <p>2022 The Devhouse Agency. All rights reserved.
                  </p>
                </div>
              
           
              </div>
            </div>
        
        </div>
      </div>

    </div>
  )
}
