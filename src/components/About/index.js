// Write your code here
import ThemeContext from '../../context/ThemeContext'
import Navbar from '../Navbar'
import './index.css'

const About = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value
      const backgroundColor = !isDarkTheme
        ? 'about-bg-style1'
        : 'about-bg-style2'
      const imageUrl = !isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/about-light-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/about-dark-img.png'
      const headingStyle = !isDarkTheme
        ? 'about-heading-style1'
        : 'about-heading-style2'
      return (
        <>
          <Navbar />
          <div className={`about-container ${backgroundColor}`}>
            <img className="about-image-style" src={imageUrl} alt="about" />
            <h1 className={`about-heading-style ${headingStyle}`}>About</h1>
          </div>
        </>
      )
    }}
  </ThemeContext.Consumer>
)

export default About
