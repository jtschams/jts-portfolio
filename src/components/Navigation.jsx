import { useState } from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
  const [page, setPage] = useState(location.pathname)

  const links = [
    {
      text: 'About Me',
      link: '/',
    }, {
      text: 'Portfolio',
      link: '/portfolio',
    }, {
      text: 'Contact Me',
      link: '/contact',
    }, {
      text: 'Resume',
      link: '/resume',
    }
  ]
  return (
    <nav>
      <ul>
        {links.map((link) =>
          (<li key={link.link}><Link to={link.link} className={page === link.link ? 'active' : null}  onClick={() => setPage(link.link)}>{link.text}</Link></li>)
        )}
      </ul>
    </nav>
  )
}

export default Navigation;