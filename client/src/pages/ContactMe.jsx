import { useState } from 'react'
import contactMe from '../utils/contactMe'


export default function ContactMe() {
  const [ name, setName ]  = useState('');
  const [ email, setEmail ]  = useState('');
  const [ message, setMessage ]  = useState('');
  
  const sendContact = async () => {
    event.preventDefault();
    const responseEl = document.getElementById('response');
    if (!name) {
      responseEl.style = 'display: block;';
      responseEl.textContent = 'Please enter your name.';
    } else if (!email) {
      responseEl.style = 'display: block;';
      responseEl.textContent = 'Please enter your email.';
    } else if (!message) {
      responseEl.style = 'display: block;';
      responseEl.textContent = 'Please enter a message.';
    } else {
      const result = await contactMe({ name, email, message });
      responseEl.style = 'display: block;';
      responseEl.textContent = result;
    }
  }
  
  // return (
  //   <main>
  //     <header><h2>Contact Me</h2></header>
  //     <section className="contact-me">
  //       <p id='response' style={{display: 'none'}}></p>
  //       <form id='contact-form' onSubmit={sendContact}>
  //         <div className='form-input'>
  //           <label>Name:</label>
  //           <input type='text' name='name' id='contact-name' value={name} onChange={(event) => setName(event.target.value)} />
  //         </div>
  //         <div className='form-input'>
  //           <label>Email:</label>
  //           <input type='email' name='email' id='contact-email' value={email} onChange={(event) => setEmail(event.target.value)} />
  //         </div>
  //         <div className='form-input'>
  //           <label>Message:</label>
  //           <textarea name='message' id='post-title' rows='8' value={message} onChange={(event) => setMessage(event.target.value)}></textarea>
  //         </div>
  //         <div className='form-button'><button form='contact-form' type='submit' id='submit'>Send</button></div>
  //       </form>
  //     </section>
  //   </main>
  // )
  // TODO: remove temp return when email API implemented
  return (
    <main>
      <header><h2>Contact Me</h2></header>
      <section className="contact-me">
        <p id='response' style={{display: 'none'}}></p>
        <form id='contact-form' onSubmit={sendContact}>
          <div className='form-input'>
            <label>Name:</label>
            <input type='text' name='name' id='contact-name' value={name} onChange={(event) => {
              const responseEl = document.getElementById('response');
              responseEl.style = 'display: block;';
              responseEl.textContent = 'Contact form not yet implemented.';
              setName(event.target.value);
              }} />
          </div>
          <div className='form-input'>
            <label>Email:</label>
            <input type='email' name='email' id='contact-email' value={email} onChange={(event) => {
              const responseEl = document.getElementById('response');
              responseEl.style = 'display: block;';
              responseEl.textContent = 'Contact form not yet implemented.';
              setEmail(event.target.value);
              }} />
          </div>
          <div className='form-input'>
            <label>Message:</label>
            <textarea name='message' id='post-title' rows='8' value={message} onChange={(event) => {
              const responseEl = document.getElementById('response');
              responseEl.style = 'display: block;';
              responseEl.textContent = 'Contact form not yet implemented.';
              setMessage(event.target.value);
              }}></textarea>
          </div>
          <div className='form-button'><button form='contact-form' type='submit' id='submit'>Send</button></div>
        </form>
      </section>
    </main>
  )
}