import React from 'react'
import './game.css'
function Sitedata({imgUrl,name,state, description, releaseDate,developer,platform,rating}) {
  return (
    <div className='game-card'>
      <img 
      src={imgUrl} 
      className='imgURL'
      />
      <h1 className='game-card-title'>{name}</h1>
     
      <div className='containt'>
    <p>State: {state}</p>
    <p>Developer: {developer}</p>
    <p>Rating: {rating}</p>
    <p>Release : {releaseDate}</p>
    <p>Platform: {platform}</p>
    <p className='descp'>{description}</p>
  
</div>

    </div>
  )
}

export default Sitedata
