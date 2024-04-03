// Write your code here
import ThemeContext from '../../context/ThemeContext'
import Navbar from '../Navbar'
import './index.css'

const Home = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value
      const backgroundColor = !isDarkTheme ? 'home-bg-style1' : 'home-bg-style2'
      const imageUrl = !isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/home-light-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/home-dark-img.png'
      const headingStyle = !isDarkTheme
        ? 'home-heading-style1'
        : 'home-heading-style2'
      return (
        <>
          <Navbar />
          <div className={`home-container ${backgroundColor}`}>
            <img className="home-image-style" src={imageUrl} alt="home" />
            <h1 className={`home-heading-style ${headingStyle}`}>Home</h1>
          </div>
        </>
      )
    }}
  </ThemeContext.Consumer>
)

export default Home
