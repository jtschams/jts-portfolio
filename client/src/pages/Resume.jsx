import { proficiencies } from "../utils/lists"

export default function Resume() {
  return (
    <main>
      <header><h2>Resume</h2></header>
      <section>
        {/* // TODO: Import and Link Resume PDF */}
        <p>Click<a href='/error' target='_blank' className='download-link'>here</a>for a downloadable pdf of my resume.</p>
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