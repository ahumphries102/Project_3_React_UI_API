import React, { Component } from 'react';

export default class GetUserDeck extends Component {
    //An incomplete component that is not used. It was designed with the intention of having multiple users that could view their magic cards
    state ={
        users:[]
    }
    getUsersDeck = async () => {
        try {
            const users = await fetch('http://localhost:9000/users')
            const usersJson = await users.json()

            this.setState({ users:usersJson})
            //needed to turn your information into human readable data
            return usersJson
        } catch (err) {
            console.log(err, 'catch caught an error')
            return err
        }
    }
    componentDidMount() {
        this.getUsersDeck().then((data) => console.log(data, 'HOME ROUTE'))
    }

    render(){
        return(
            <div>
                <h1>USERS ROUTE</h1>
            </div>
        )
    }
}