export default function SingleRepo(project) {
  return (
    <article className='project-card'>
      <img src={project.preview} />
      <div className='repo-info'>
        <hgroup>
          <h3>{project.name}</h3>
          <p className='contribution'>{project.contribution}</p>
          <div>
            <a href={project.page} target='_blank' rel="noopener noreferrer">Website</a>
            <a href={project.repo} target='_blank' rel="noopener noreferrer">Github</a>
          </div>
        </hgroup>
      </div>
    </article>
  )
}