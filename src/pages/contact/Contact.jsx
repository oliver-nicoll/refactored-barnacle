import React, { useRef, useState } from 'react';
import emailjs from 'emailjs-com';
import './Contact.css';
import {MdOutlineEmail} from 'react-icons/md'
import {RiMessengerLine} from 'react-icons/ri'
import {BsWhatsapp} from 'react-icons/bs'



const Contact = () => {

  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

 
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(`${process.env.REACT_APP_EMAILJS_SERVICE_ID}`, `${process.env.REACT_APP_EMAILJS_TEMPLATE_ID}`, form.current, `${process.env.REACT_APP_EMAILJS_USER_ID}`)
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });

      setFullName('')
      setEmail('')
      setMessage('')
      alert('Email Sent!')
  };


  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className='contact__option'>
            <MdOutlineEmail className='contact__option-icon'/>
            <h4>Email</h4>
            {/* <h5>nicoll.oliver.business@gmail.com</h5> */}
            <a href="mailto:nicoll.oliver.business@gmail.com" target="_blank">Send a message</a>
          </article>
          <article className='contact__option'>
            <RiMessengerLine className='contact__option-icon'/>
            <h4>Messenger</h4>
            {/* <h5>Nicoll Oliver</h5> */}
            <a href="https://m.me/nicolldon/" target="_blank">Send a message</a>
          </article>
          <article className='contact__option'>
            <BsWhatsapp className='contact__option-icon'/>
            <h4>WhatsApp</h4>
            {/* <h5>+5708548313</h5> */}
            <a href="https://api.whatsapp.com/send?phone=+15708548313" target="_blank">Send a message</a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail} className='contact_form'>
          <input type="text" value={fullName} name='name' placeholder='Your Full Name' onChange={e => setFullName(e.target.value)} required />
          <input type="email" value={email} name='email' placeholder='Your Email' onChange={e => setEmail(e.target.value)} required />
          <textarea name="message" value={message} rows="7" placeholder='Your Message' onChange={e => setMessage(e.target.value)} required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact