// Write your code here
import ThemeContext from '../../context/ThemeContext'
import Navbar from '../Navbar'
import './index.css'

const NotFound = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value
      const backgroundColor = !isDarkTheme
        ? 'not-found-bg-style1'
        : 'not-found-bg-style2'
      const headingStyle = !isDarkTheme
        ? 'not-found-heading-style1'
        : 'not-found-heading-style2'
      const descriptionStyle = !isDarkTheme
        ? 'not-found-description-style1'
        : 'not-found-description-style2'
      return (
        <>
          <Navbar />
          <div className={`not-found-container ${backgroundColor}`}>
            <div className="not-found-sub-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/not-found-img.png"
                alt="not found"
                className="not-found-image-style"
              />
              <h1 className={`not-found-heading-style ${headingStyle}`}>
                Lost Your Way?
              </h1>
              <p className={`not-found-description-style ${descriptionStyle}`}>
                We cannot seem to find the page you are looking for.
              </p>
            </div>
          </div>
        </>
      )
    }}
  </ThemeContext.Consumer>
)

export default NotFound
