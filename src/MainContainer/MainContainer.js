import React, { Component } from 'react';
import MagicCards from '../MagicCards/MagicCards'
import UserDeck from '../UserDeck/UserDeck'
import '../App.css';
import { button } from 'reactstrap';

export default class MainContainer extends Component {
    state = {
        magicCards: [],
        usersDeck: []
    }
    getMagicCards = async () => {
        try {
            const magicApi = await fetch('https://api.scryfall.com/cards/search?order=set&q=e%3Arna&unique=prints')
            const magicData = await magicApi.json()

            this.setState({ magicCards: magicData.data })
        } catch (err) {
            console.log(err, 'catch caught an error')
            return err
        }
    }
    componentDidMount() {
        this.getMagicCards().then((data) => console.log(data, 'did mount'))
    }
    addCard = (i)=>{
        const newUserDeck = this.state.usersDeck
        //magicCards[i] is accessing the bind's index (i) in MagicCards.js
        newUserDeck.push(this.state.magicCards[i])
        this.setState({
            usersDeck: newUserDeck
        })
    }
    render() {
        console.log("this is the userDeck after render", this.state.usersDeck)
        return (
        <section>
          <section className="transBg">
            <h1>Deck Builder</h1>
            <img src="https://zone1-vgu.netdna-ssl.com/wp-content/uploads/2019/01/MagicThe-Gathering-Ravnica-Allegiance-New-Mechanics-Breakdown.jpg" alt="hero" className="heroBg"/>
          </section>
          <button className="primary">Hey</button>
          <section className = "ui two column divided grid">
            <div className = "twelve wide column">
              <MagicCards magicCards={this.state.magicCards} addCard={this.addCard}/>
            </div>
            <div className = "four wide column">
              <h2>Deck Name</h2>
              <UserDeck addCard = {this.addCard} usersDeck = {this.state.usersDeck}/>
            </div>
          </section>
      </section>
        );
    }
}