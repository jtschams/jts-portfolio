import { useState } from 'react';
import { Link } from 'react-router-dom';

export function NavBar({ style }) {
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
  <nav style={style}>
    <ul>
      {links.map((link) =>
        (<li key={link.link}><Link to={link.link} className={page === link.link ? 'active' : null} onClick={() => setPage(link.link)}>{link.text}</Link></li>)
      )}
    </ul>
  </nav>
  )
}

const Header = () => {
  return (
    <>
      <h1>JT Schams</h1>
      <NavBar />
    </>
  )
}

export default Header;