import React from 'react'

const magicList = (props)=>{
	const cardsList = props.magicCards.map((magicCards, i)=>{
		return <li key={i} className="three wide column">{magicCards.name}, ({magicCards.set}), {magicCards.rarity}<img src={magicCards.image_uris.large} alt='magic cards' className='enlarge ui fluid image'/><button onClick={props.addCard.bind(null, i)}>Add to deck</button></li>
	})
	return(
		<div>
			<ul className = "ui grid">
				{cardsList}
			</ul>

		</div>
	)
}

export default magicList