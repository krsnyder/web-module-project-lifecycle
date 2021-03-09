import React from 'react'
import axios from 'axios'
import UserCard from './components/UserCard'
import Followers from './components/Followers'
import './App.css';

class App extends React.Component {
  state = {
    userInfo: {},
    followers: []
  }

  componentDidMount() {
    axios.get(`https://api.github.com/users/krsnyder`)
      .then(res => {
        this.setState({...this.state, userInfo: res.data })
      })
      .catch(err => console.log(err))
    
    axios.get('https://api.github.com/users/krsnyder/following')
      .then(res => {
        this.setState({...this.state, followers: res.data })
      })
      .catch(err => console.log(err))
    
  }

  
  render() {
    return (
      <div className="App">
        <h1>Module 2 Project</h1>
        <UserCard userDetails={this.state.userInfo} />
        <h2>This is who I follow: </h2>
        <Followers followers={this.state.followers} />
      </div>
    )
}
}

export default App;
