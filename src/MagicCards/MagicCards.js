import React from 'react'

//This component will loop through the API we fetch and return a list for each card and a button.
//It is then displayed on the main page.
const magicList = (props)=>{
	const cardsList = props.magicCards.map((magicCards, i)=>{
		return <li key={i} className="three wide column">{magicCards.name}, ({magicCards.set}), {magicCards.rarity}<img src={magicCards.image_uris.large} alt='magic cards' className='enlarge ui fluid image'/><button onClick={props.addCard.bind(null, i) }>Add to deck</button></li>
	})
	return(
		<div>
	{/*displaying the api we fetch*/}
			<ul className = "ui grid">
				{cardsList}
			</ul>

		</div>
	)
}

export default magicList