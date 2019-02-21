import React, { Component } from 'react';
export default class PostUserDeck extends Component {
    postUsersDeck = async (props) => {
        const data = this.props.usersDeck

        const dataToDb = data.map((elements, i)=>{
            return {name:elements.name, mana_cost:elements.mana_cost, cmc:elements.cmc, type_line:elements.type_line, oracle_text:elements.oracle_text, power:elements.power, toughness:elements.toughness, colors:elements.colors, color_id:elements.color_identity, setif:elements.set, rarity:elements.rarity}
        })
        try {
            const addCard = await fetch('http://localhost:9000/addCard', {
                method: "POST", // *GET, POST, PUT, DELETE, etc.
                headers: {
                    "Content-Type": "application/json",
                    // "Content-Type": "application/x-www-form-urlencoded",
                },
                body:JSON.stringify({dataToDb}) // body data type must match "Content-Type" header
            })
            const addCardsJson = await addCard.json()
            this.setState({ cardsAdded:addCardsJson})
            //needed to turn your information into human readable data
            
            return addCardsJson
        } catch (err) {
            console.log(err, 'catch caught an error')
            return err
        }
    }
    render(){
        return( 
            <div>
                <button onClick={this.postUsersDeck}>Save Deck</button>
            </div>
        )
    }
}