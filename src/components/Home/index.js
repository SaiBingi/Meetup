import {Link} from 'react-router-dom'
import MeetupContext from '../../context/MeetupContext'
import './index.css'

const Home = () => (
  <MeetupContext.Consumer>
    {value => {
      const {username, selectedTopic} = value
      let displayTopic = ''
      switch (selectedTopic) {
        case 'ARTS_AND_CULTURE':
          displayTopic = 'Arts and Culture'
          break
        case 'CAREER_AND_BUSINESS':
          displayTopic = 'Career and Business'
          break
        case 'EDUCATION_AND_LEARNING':
          displayTopic = 'Education and Learning'
          break
        case 'FASHION_AND_BEAUTY':
          displayTopic = 'Fashion and Learning'
          break
        case 'GAMES':
          displayTopic = 'Games'
          break
        default:
          break
      }

      const isUserRegistered =
        username === '' ? (
          <>
            <h1 className="heading">Welcome to Meetup</h1>
            <p className="description">Please register for the topic</p>
            <div>
              <Link to="/register">
                <button type="button" className="register-button">
                  Register
                </button>
              </Link>
            </div>
          </>
        ) : (
          <>
            <h1 className="heading-2">Hello {username}</h1>
            <p className="description-2">Welcome to {displayTopic}</p>
          </>
        )

      return (
        <div className="container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/meetup/website-logo-img.png"
            alt="website logo"
          />
          <div className="home-container">
            {isUserRegistered}
            <img
              src="https://assets.ccbp.in/frontend/react-js/meetup/meetup-img.png"
              alt="meetup"
              className="meetup"
            />
          </div>
        </div>
      )
    }}
  </MeetupContext.Consumer>
)

export default Home
