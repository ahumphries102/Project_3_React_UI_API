import React from 'react'
import MagicCards from '../MagicCards/MagicCards'

const UserDeck = (props)=>{
	//map over the deck with a new array and display the cards name in the deck section
	const newDeckArr = props.usersDeck.map((usersCards, i)=>{
		return <li key={i}>{usersCards.name}</li>
	})
	return(
		<ul>
			WeWork!
			{newDeckArr}
		</ul>
	)
}
	
export default UserDeck