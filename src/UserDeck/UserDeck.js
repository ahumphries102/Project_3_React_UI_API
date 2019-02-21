import React from 'react'
const UserDeck = (props)=>{
	//map over the deck with a new array and display the cards name in the deck section
	const newDeckArr = props.usersDeck.map((usersCards, i)=>{
		return <li className="cardWindow enlarge" key={i} onClick={props.deleteCard.bind(null, i)}><img src={usersCards.image_uris.normal} alt='magic cards'/></li>
	})
	return(

		<div>
			<ul >
				{newDeckArr}
			</ul>
		</div>
	)
}
	
export default UserDeck