import selfPicture from '../assets/me.jpg';
// TODO: Better picture

export default function AboutMe() {

  return (
    <main>
      <header><h2>About Me</h2></header>
      <section>
        <img className='selfPicture' src={selfPicture} alt='A picture of JT Schams'></img>
        <p>Hello!  My name is JT Schams.  I'm from College Station and recently finished up a Full Stack Development course.  I have a long history in medical records and as a medical receptionist, and I'm now looking to start a new career in something I'm more suited for.  I can code Full Stack applications, and I particularly excel in backend development.  I have experience with React on the front end, and with MongoDB, PostgreSQL, and Node.js on the backend.</p>
      </section>
    </main>
  )
}