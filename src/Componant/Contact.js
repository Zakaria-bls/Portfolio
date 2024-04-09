import React, {useRef} from 'react'

import emailjs from '@emailjs/browser';

import { toast, Toaster } from 'sonner'

import '../componantStyle/home.css'
import '../componantStyle/work.css'
import '../componantStyle/contact.css'

import ZB from './ZB'

export default function Contact() {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_keyjj6t', 'template_q1foc6o', form.current, {
        publicKey: 'V7jONqvcA5rYHOitZ',
      })
      .then(
        () => {
          return toast.success("Email envoyer correctement") 
        },
        (error) => {
          return toast.warning('FAILED...', error.text);
        },
      );
  };

  return (
    
    <div className='contactSection'>
             <Toaster richColors className='myToaster'/>
        <div className='workTitle'>
            <div className='AS color font'>
                <p>04</p>
                <p>CONTACT</p>
            </div>
            <div className="textContainer">
                <p>Thank you for reaching out to me</p>
            </div>
       </div>

       <form ref={form} onSubmit={sendEmail} className='contactInputsTxt'>
    <div className='contactInputs'>
        <p id='txtContact'>Fill the form to <label id="purpleTxt">contact us.</label></p>
        <div className='contactInputsTXT'>
            <div className='contactInput'>
                <div>
                    <input placeholder='First Name' name="user_name" required />
                    <input placeholder='Last Name' name="user_lastname" required />
                </div>
                <input placeholder='E-mail' name="user_email" required />
                <textarea placeholder='How we can help you?&#13;&#10;Describe here your problem' name="message" required />
            </div>
            <div className='contactTXT'>
                <p id='discriptionContact'> Feel free to reach out to me with any inquiries, collaborations, or just to say hello! I'm always open to connecting with new people.</p>
                <div className='informationpersonal'>
                </div>
            </div>
        </div>
    </div>
    <div className='homeButton'>
        <div>
            <input type="submit" value="Send" className='senEmail'/>
        </div>
    </div>
</form>


        <ZB top="215.5vw" right="50vw"/>
    </div>
  )
}
