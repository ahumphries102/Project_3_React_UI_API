import React, { Component } from 'react'
import '../App.css'

export default class Login extends Component {
    state = {
        username: '',
        password: ''
    }

    handleSubmit = (event) => {
        //this will make sure that the form does not refresh the page on submit?
        event.preventDefault(event)
        this.props.login(this.state.username)
    }



    handleChange = (event) => {
        this.setState({
            [event.currentTarget.name]: event.currentTarget.value,
        })
    }

    render() {
        return (
        <div>
        	<h1>LOGIN!!!</h1>
            <form onSubmit={this.handleSubmit}>
                <input type='text' name="username" placeholder="username" value={this.state.username} onChange={this.handleChange} />
                <input type='password' name="password" placeholder="password" value={this.state.password} onChange={this.handleChange} />
                <input type='submit' value="Submit" />
            </form>
        </div>
        )
    }
}