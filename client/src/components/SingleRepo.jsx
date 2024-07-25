export default function SingleRepo(project) {
  console.log(project.name)
  return (
    <article key={project.name} className='project-card'>
      <img src={project.preview} />
      <div className='repo-info'>
        <h3>{project.name}</h3>
        <div>
          <a href={project.page} target='_blank' rel="noopener noreferrer">Website</a>
          <a href={project.repo} target='_blank' rel="noopener noreferrer">Github</a>
        </div>
      </div>
    </article>
  )
}