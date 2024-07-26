import projects from '../utils/repoList'
import SingleRepo from '../components/SingleRepo'

export default function Portfolio() {
  return (
    <main>
      <header><h2>Portfolio</h2></header>
      <section className='portfolio'>
        {projects.map((project) => (<SingleRepo {...project} key={project.name} />))}
      </section>
    </main>
  )
}