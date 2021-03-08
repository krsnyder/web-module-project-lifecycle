import React from 'react'
import axios from 'axios'
import UserCard from './components/UserCard'
import './App.css';

class App extends React.Component {
  state = {
    userInfo: {}
  }

  componentDidMount() {
    axios.get(`https://api.github.com/users/krsnyder`)
      .then(res => {
        this.setState({ userInfo: res.data })
      })
      .catch(err => console.log(err))
  }


  render() {
    return (
      <div className="App">
        <h1>Module 2 Project</h1>
        <UserCard userDetails={this.state.userInfo} />
      </div>
    )
}
}

export default App;
