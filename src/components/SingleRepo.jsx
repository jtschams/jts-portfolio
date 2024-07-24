export default function SingleRepo(project) {
  console.log(project.name)
  return (
    <article key={project.name} className='project-card'>
      <img src={project.preview} />
      <div className='repo-info'>
        <h3>{project.name}</h3>
        <div>
          <a href={project.page}>Website</a>
          <a href={project.repo}>Github</a>
        </div>
      </div>
    </article>
  )
}