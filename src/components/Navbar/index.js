// Write your code here
import {Link} from 'react-router-dom'
import ThemeContext from '../../context/ThemeContext'
import './index.css'

const Navbar = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme, toggleTheme} = value
      const backgroundColor = !isDarkTheme
        ? 'navbar-bg-style1'
        : 'navbar-bg-style2'
      const websiteLogoUrl = !isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/website-logo-light-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/website-logo-dark-theme-img.png'

      const contentStyle = !isDarkTheme ? 'link-style1' : 'link-style2'
      const themeImageUrl = !isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/dark-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/light-theme-img.png'
      const clickThemeButton = () => toggleTheme()
      return (
        <nav className={`navbar-container ${backgroundColor}`}>
          <img
            src={websiteLogoUrl}
            alt="website logo"
            className="website-logo-style"
          />
          <ul className="list-container">
            <li className="list-style">
              <Link to="/" className={`link-style ${contentStyle}`}>
                Home
              </Link>
            </li>
            <li className="list-style">
              <Link to="/about" className={`link-style ${contentStyle}`}>
                About
              </Link>
            </li>
          </ul>
          <button
            type="button"
            data-testid="theme"
            className="button-style"
            onClick={clickThemeButton}
          >
            <img
              className="theme-image-style"
              src={themeImageUrl}
              alt="theme"
            />
          </button>
        </nav>
      )
    }}
  </ThemeContext.Consumer>
)

export default Navbar
