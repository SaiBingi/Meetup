import MeetupContext from '../../context/MeetupContext'
import './index.css'

const errorMsg = 'Please enter your name'
const topicsList = [
  {
    id: 'ARTS_AND_CULTURE',
    displayText: 'Arts and Culture',
  },
  {
    id: 'CAREER_AND_BUSINESS',
    displayText: 'Career and Business',
  },
  {
    id: 'EDUCATION_AND_LEARNING',
    displayText: 'Education and Learning',
  },
  {
    id: 'FASHION_AND_BEAUTY',
    displayText: 'Fashion and Learning',
  },
  {
    id: 'GAMES',
    displayText: 'Games',
  },
]

const Register = props => {
  const {history} = props

  console.log(history)

  return (
    <MeetupContext.Consumer>
      {value => {
        const {
          username,
          selectedTopic,
          onChangeName,
          onChangeTopic,
          showError,
          onChangeShowErrorMsgStatus,
        } = value

        const onSubmitForm = event => {
          event.preventDefault()

          if (username !== '' && selectedTopic !== '') {
            history.push('/')
            onChangeShowErrorMsgStatus()
          } else {
            onChangeShowErrorMsgStatus()
          }
        }

        const changeName = event => onChangeName(event.target.value)

        const changeTopic = event => onChangeTopic(event.target.value)

        return (
          <div className="container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/meetup/website-logo-img.png"
              alt="website logo"
            />
            <label className="register-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/meetup/website-register-img.png"
                alt="website register"
                className="website-register"
              />
              <form onSubmit={onSubmitForm}>
                <h1 className="heading">Let us join</h1>
                <label htmlFor="name" className="label">
                  NAME
                </label>
                <div className="input-container">
                  <input
                    type="text"
                    id="name"
                    onChange={changeName}
                    value={username}
                    placeholder="Your name"
                    className="input"
                  />
                </div>
                <label htmlFor="topics" className="label">
                  TOPICS
                </label>
                <br />
                <div>
                  <select
                    id="topics"
                    value={selectedTopic}
                    className="input-container"
                    onChange={changeTopic}
                  >
                    {topicsList.map(eachTopic => (
                      <option key={eachTopic.id} value={eachTopic.id}>
                        {eachTopic.displayText}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <button type="submit" className="register-now-button">
                    Register Now
                  </button>
                </div>
                {showError && <p className="err-msg">{errorMsg}</p>}
              </form>
            </label>
          </div>
        )
      }}
    </MeetupContext.Consumer>
  )
}

export default Register
