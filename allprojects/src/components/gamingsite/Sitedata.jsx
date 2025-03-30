import React from 'react'
import './game.css'
function Sitedata({imgUrl,name,description,state}) {
  return (
    <div className='game-card'>
      <img 
      src={imgUrl} 
      className='imgURL'
      />
      <h1 className='game-card-title'>{name}</h1>
      <p>{description}</p>
      <p>{state}</p>
    </div>
  )
}

export default Sitedata
