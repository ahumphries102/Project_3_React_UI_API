import React, { Component } from "react";
import MagicCards from "../MagicCards/MagicCards"
import UserDeck from "../UserDeck/UserDeck"
import Navigation from "../Routes/Navigation"
import PostUserRoute from "../Routes/PostUserRoute"
import { BrowserRouter as Router } from "react-router-dom";

export default class MainContainer extends Component {
    state = {
        magicCards: [],
        usersDeck: [],
        deckName:""
    }
     //When the browser is ready it will fetch the API
     componentDidMount() {
            this.getMagicCards().then((data) => console.log(data, "did mount"))
    }
    //Fetch the API
    getMagicCards = async () => {
        try {
            const magicApi = await fetch("https://api.scryfall.com/cards/search?order=set&q=e%3Arna&unique=prints")
            const magicData = await magicApi.json()

            this.setState({ magicCards: magicData.data })
        } catch (err) {
            console.log(err, "catch caught an error")
            return err
        }
    }
    //This function pushes objects into the users new deck which appears on the right side of the browser.
    addCard = (i)=>{
        const newUserDeck = this.state.usersDeck
        //magicCards[i] is accessing the bind"s index (i) in MagicCards.js
        newUserDeck.push(this.state.magicCards[i])
        this.setState({
            usersDeck: newUserDeck
        })
    }
    //this button will delete the chosen card from the users new deck
    deleteCard = (i)=>{
        const newUserDeck = this.state.usersDeck
        //deleting card at specific index using bind in UserDeck.js
        newUserDeck.splice(i,1)
        this.setState({
            usersDeck: newUserDeck
        })
    }
    render() {
        return (
        //Router is establishing links to other pages
          <Router>
            <section>
              <section className="transBg">
                <h1>Deck Builder</h1>
                <img src="https://zone1-vgu.netdna-ssl.com/wp-content/uploads/2019/01/MagicThe-Gathering-Ravnica-Allegiance-New-Mechanics-Breakdown.jpg" alt="hero" className="heroBg"/>
              </section>
              <section className = "ui two column divided grid">
                <div className = "twelve wide column scroll">
                {/* Inserting the Navigation into the main Container */}
                <Navigation />
            {/*Inserting the Magic cards component while also passing the magicCard state down and addCard function down */}
                  <MagicCards magicCards={this.state.magicCards} addCard={this.addCard}/>
                }
                </div>
                <div className = "four wide column rightColumnScroll">
                  <h2>New Deck</h2>
            {/*Inserting the Userdeck component while also passing the usersDeck state down and deleteCard function down */}
                  <UserDeck usersDeck = {this.state.usersDeck} deleteCard={this.deleteCard}/>
            {/*Inserting PosUserRoute and passing down the usersDeck state*/}
                  <PostUserRoute usersDeck = {this.state.usersDeck}/>
                </div>
              </section>
            </section>
          </Router>
        );
    }
}