import { useState } from 'react'
import contactMe from '../utils/contactMe'


export default function ContactMe() {
  const [ name, setName ]  = useState('');
  const [ email, setEmail ]  = useState('');
  const [ message, setMessage ]  = useState('');
  
  function changeHandler({target: {name, value}}) {
    const submitter = document.querySelector('.form-button');
    submitter.innerHTML = `<button form='contact-form' type='submit' id='submit'>Send</button>`
    switch (name) {
      case 'name':
        setName(value)
        break;
      case 'email':
        setEmail(value)
        break;
      case 'message':
        setMessage(value)
        break;
    }
    return;
  }
  
  const sendContact = async () => {
    event.preventDefault();
    const submitter = document.querySelector('.form-button');
    if (!name) {
      submitter.innerHTML = 'Please enter your name.';
    } else if (!email) {
      submitter.innerHTML = 'Please enter your email.';
    } else if (!message) {
      submitter.innerHTML = 'Please enter a message.';
    } else {
      submitter.innerHTML = `<p style='padding: 0; font-size: 2rem; text-align: center;'>Sending...</p>`;
      const result = await contactMe({ name, email, message });
      submitter.innerHTML = `<p style='padding: 0; font-size: 2rem; text-align: center;'>${result}</p>`;
      if (result === 'Thank you for your message.  It has been sent to my email.') {
        setName('');
        setEmail('');
        setMessage('');
      } else {
        setTimeout(() => {
          submitter.innerHTML += `<button form='contact-form' type='submit' id='submit' style='margin: 15px;'>Resubmit</button>`
        }, 4000)
      }
    }
  }
  
  return (
    <main>
      <header><h2>Contact Me</h2></header>
      <section className="contact-me">
        <form id='contact-form' onSubmit={sendContact}>
          <div className='form-input'>
            <label>Name:</label>
            <input type='text' name='name' id='contact-name' value={name} onChange={changeHandler} />
          </div>
          <div className='form-input'>
            <label>Email:</label>
            <input type='email' name='email' id='contact-email' value={email} onChange={changeHandler} />
          </div>
          <div className='form-input'>
            <label>Message:</label>
            <textarea name='message' id='post-title' rows='8' value={message} onChange={changeHandler}></textarea>
          </div>
          <div className='form-button'><button form='contact-form' type='submit' id='submit'>Send</button></div>
        </form>
      </section>
    </main>
  )
}