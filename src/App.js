// Published URL  ==>  https://saimeetup.ccbp.tech/

import {Component} from 'react'
import {Switch, Route, Redirect} from 'react-router-dom'
import Home from './components/Home'
import Register from './components/Register'
import NotFound from './components/NotFound'
import MeetupContext from './context/MeetupContext'
import './App.css'

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

class App extends Component {
  state = {
    username: '',
    selectedTopic: topicsList[0].id,
    showError: false,
  }

  onChangeName = username => {
    this.setState({username})
  }

  onChangeTopic = selectedTopic => {
    this.setState({selectedTopic})
  }

  onChangeShowErrorMsgStatus = () => {
    this.setState({
      showError: true,
    })
  }

  render() {
    const {username, selectedTopic, showError} = this.state

    return (
      <MeetupContext.Provider
        value={{
          username,
          selectedTopic,
          showError,
          onChangeName: this.onChangeName,
          onChangeTopic: this.onChangeTopic,
          onChangeShowErrorMsgStatus: this.onChangeShowErrorMsgStatus,
        }}
      >
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/not-found" component={NotFound} />
          <Redirect to="/not-found" />
        </Switch>
      </MeetupContext.Provider>
    )
  }
}

export default App
