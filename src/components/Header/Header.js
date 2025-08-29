import { header } from '../../portfolio'
import { useLocation } from 'react-router-dom'
import NavbarMain from '../Navbar/NavbarMain'
import NavbarBlog from '../Navbar/BlogNavbar'
import './Header.css'

const Header = () => {
  const { homepage, title } = header
  const location = useLocation()
  const isBlogRoute = location.pathname.startsWith('/blog')

  return (
    <header className='header center'>
      <h3>
        {homepage ? (
          <a href={homepage} className='link'>
            {title}
          </a>
        ) : (
          title
        )}
      </h3>
      {isBlogRoute ? <NavbarBlog /> : <NavbarMain />}
      {/* <Navbar /> */}
    </header>
  )
}

export default Header
