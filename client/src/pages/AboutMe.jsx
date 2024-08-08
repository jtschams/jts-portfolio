import SelfPicture from '../assets/me.jpg';
// TODO: Better picture

export default function AboutMe() {

  return (
    <main>
      <header><h2>About Me</h2></header>
      <section>
        <img className='selfPicture' src={SelfPicture} alt='A picture of JT Schams'></img>
        <p>Hello!  My name is JT Schams.  I'm from College Station and recently finished up a Full Stack Development course.  I have 12 years of experience in the medical office field.  During my time there, I participated in the transition to and use of 3 different Electronic Health Record systems.  As a result, I have a strong understanding of the end user's perspective.<br/><br/>I'm now looking to start a new career that better suits my abilities and education.  I can code Full Stack applications, and I particularly excel in backend development.  I have experience with React on the front end, and with MongoDB, PostgreSQL, and Node.js on the backend.</p>
      </section>
    </main>
  )
}