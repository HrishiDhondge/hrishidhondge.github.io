import { useContext, useState } from 'react'
import Brightness2Icon from '@material-ui/icons/Brightness2'
import WbSunnyRoundedIcon from '@material-ui/icons/WbSunnyRounded'
import MenuIcon from '@material-ui/icons/Menu'
import CloseIcon from '@material-ui/icons/Close'
import { Link } from 'react-router-dom';
import { ThemeContext } from '../../contexts/theme'
import { projects, skills, contact } from '../../portfolio'
import './Navbar.css'


const NavbarBlog = () => {
  const [{ themeName, toggleTheme }] = useContext(ThemeContext)
  const [showNavList, setShowNavList] = useState(false)

  const toggleNavList = () => setShowNavList(!showNavList)

  return (
    <nav className="center nav">
      <ul style={{ display: showNavList ? 'flex' : null }}
        className="nav__list">
        <li className='nav__list-item'>
          <Link
            to="/blog"
            onClick={toggleNavList}
            className='link link--nav'
          >
            Blog
          </Link>
        </li>

        <li className='nav__list-item'>
          <Link
            to="/blog/tags"
            onClick={toggleNavList}
            className='link link--nav'
          >
            Tags
          </Link>
        </li>

        <li className='nav__list-item'>
          <Link
            to="/"
            onClick={toggleNavList}
            className='link link--nav'
          >
            Home
          </Link>
        </li>

      </ul>
      <button
        type='button'
        onClick={toggleTheme}
        className='btn btn--icon nav__theme'
        aria-label='toggle theme'
      >
        {themeName === 'dark' ? <WbSunnyRoundedIcon /> : <Brightness2Icon />}
      </button>

      <button
        type='button'
        onClick={toggleNavList}
        className='btn btn--icon nav__hamburger'
        aria-label='toggle navigation'
      >
        {showNavList ? <CloseIcon /> : <MenuIcon />}
      </button>

    </nav>
  )
}

export default NavbarBlog
