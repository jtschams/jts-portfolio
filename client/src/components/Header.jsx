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
  
  const changePage = function(link) {
    return function() {
      setPage(link.link)
      document.querySelector('.burger').classList.remove('open')
      document.querySelector('nav').classList.remove('open')
    }
  }

  return (
    <nav style={style}>
    <ul>
      {links.map((link) =>
        (<li key={link.link}><Link to={link.link} className={page === link.link ? 'active' : null} onClick={changePage(link)}>{link.text}</Link></li>)
      )}
    </ul>
  </nav>
  )
}

const Header = () => {
  const burgerButton = function(event) {
    event.currentTarget.classList.toggle('open')
    document.querySelector('nav').classList.toggle('open')
  }
  return (
    <>
      <figure className='burger' onClick={burgerButton}>
        <div className='bar1'></div>
        <div className='bar2'></div>
        <div className='bar3'></div>
      </figure>
      <h1>JT Schams</h1>
      <NavBar />
    </>
  )
}

export default Header;