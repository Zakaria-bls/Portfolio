import React from 'react'

import '../componantStyle/home.css'
import '../componantStyle/work.css'
import '../componantStyle/contact.css'

import ZB from './ZB'

import mail from '../assets/mail.svg'
import phone from '../assets/phone.svg'

export default function Contact() {
  return (
    <div className='contactSection'>
        <div className='workTitle'>
            <div className='AS color font'>
                <p>04</p>
                <p>CONTACT</p>
            </div>
            <div className="textContainer">
                <p>Thank you for reaching out to me</p>
            </div>
       </div>

       <div className='contactInputsTxt'>
              <div className='contactInputs'>
                  <p id='txtContact'>Fill the form to <label id="purpleTxt">contact us.</label></p>
                  <div className='contactInputsTXT'>
                        <div className='contactInput'>
                            <div>
                              <input placeholder='First Name'/>
                              <input placeholder='Last Name'/>
                            </div>
                            <input placeholder='E-mail'/>
                            <textarea placeholder='How we can help you?&#13;&#10;Describe here your problem'/>
                        </div>
                        <div className='contactTXT'>
                          <p id='discriptionContact'> Feel free to reach out to me with any inquiries, collaborations, or just to say hello! I'm always open to connecting with new people.</p>
                          <div className='informationpersonal'>
                            <div>
                              <img src={mail} alt=''/>
                              <p>zakariboulsane@gmail.com</p>
                            </div>
                            <div>
                              <img src={phone} alt=''/>
                              <p>+213540328386</p>
                            </div>
                          </div>
                        </div>
                  </div>
              </div>
              <div className='homeButton'>
                      <div>
                          <p>Send message</p>
                      </div>
              </div>
        </div>

        <ZB className="aboutZb" top="215.5vw" right="50vw"/>
    </div>
  )
}
