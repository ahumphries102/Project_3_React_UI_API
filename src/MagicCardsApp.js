import React, { Component } from 'react';
import Login from './Login/Login'
import MainContainer from './MainContainer/MainContainer'

export default class MagicCards extends Component {
  state = {
    logged: true,
    username: ''
  }

  login = (username) => {
    this.setState({
      logged: true,
      username: username
    })
  }

  render() {
    return (
      <div className="App">
        {this.state.logged ? <MainContainer username={this.state.username} /> : <Login login={this.login} />}
      </div>
    );
  }
}