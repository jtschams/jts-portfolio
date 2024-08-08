import { proficiencies } from "../utils/lists"

export default function Resume() {

const openTab = function() {
  window.open('/jts-resume.pdf', '_blank').focus();
}

  return (
    <main>
      <header><h2>Resume</h2></header>
      <section>
        <p>Click<a href='/jts-resume.pdf' download='jts-resume.pdf' className='download-link' onClick={openTab}>here</a>to view and download pdf of my resume.</p>
        <article>
          <h4>Proficiencies</h4>
          <ul className='proficiencies'>
            {proficiencies.map((element) => (<li key={element} className='proficiency'>{element}</li>))}
          </ul>
        </article>
      </section>
    </main>
  )
}