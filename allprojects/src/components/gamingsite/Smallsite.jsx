import React from 'react'
import Sitedata from './Sitedata'

const Cards =[
  {
    imgUrl:"https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/247430/capsule_616x353.jpg",
    name:"Hitman" ,
    description:'Blend your style and experience on a global, competitive stage.',
    state:"Stealth",
    releaseDate:"	March 11, 2016",
    developer:"IO Interactive",
    platform:"PS4, Xbox, PC",
    rating:"4.8/5",
  },
  {
    imgUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNDt4C7EDeVyU7nl7FjrLduxCGzXFWi4sX1g&s",
          name:"Minecraft" ,
          description:'Blend your style and experience on a global, competitive stage.',
          state:"Sandbox",
          releaseDate:"November 18, 2011",
          developer:"Mojang Studios",
          platform:"PC, Mobile, Consoles",
          rating:"4.8/5",
  },
  {
    imgUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkpkjOZbKvf52HX8JXPqQiA4ujcPITOTRcFpWp1l0rGu7Pe7nkD_sb_fK0VHd98Uzzh5k&usqp=CAU",
          name:"Far Cry 7" ,
          description:'Blend your style and experience on a global, competitive stage.',
          state:"FPS/Open World",
          releaseDate:"Rumored 2025",
          developer:"Ubisoft",
          platform:"PS5, Xbox, PC",
          rating:"TBA",
  },
  {
    imgUrl:"https://assets2.ignimgs.com/2014/11/17/gta-v-bigjpg-e94b8d1280wjpg-e14d62_160w.jpg",
          name:"GTA 5" ,
          description:'Blend your style and experience on a global, competitive stage.',
          state:"Action-Adventure",
          releaseDate:"September 17, 2013",
          developer:"Rockstar Games",
          platform:"PS3, PS4, PS5, Xbox, PC",
          rating:"4.8/5",
  },
  {
    imgUrl:"https://4kwallpapers.com/images/walls/thumbs_3t/8636.jpg",
          name:"God of War 4" ,
          description:'Blend your style and experience on a global, competitive stage.',
          state:"Action",
          releaseDate:"April 20, 2018",
          developer:"Santa Monica Studio",
          platform:"PS4, PS5, PC",
          rating:"4.9/5",
  },
  {
    imgUrl:"https://www.xgamertechnologies.com/images/pcgames/Need%20For%20Speed%20NFS%20MOST%20WANTED.webp",
          name:"Need For Speed" ,
          description:'Blend your style and experience on a global, competitive stage.',
          state:"Racing",
          releaseDate:"November 11, 2005",
          developer:"EA Black Box",
          platform:"PC, PS2, Xbox, GameCube",
          rating:"4.7/5",
  },
  {
    imgUrl:"https://images.indianexpress.com/2024/08/Valorant-Mobile.jpg",
          name:"Valorant" ,
          description:'Blend your style and experience on a global, competitive stage.',
          state:"Action",
          releaseDate:"June 2, 2020",
          developer:"Riot Games",
          platform:"PC",
          rating:"4.8/5",
  }
]
function Smallsite() {
  return (
    <div>
      <div className='gamedata'>
      {
        Cards.map((gameitem)=>{
          return <Sitedata 
          imgUrl={gameitem.imgUrl}
          name={gameitem.name}
          description={gameitem.description}
          state={gameitem.state}
          releaseDate={gameitem.releaseDate}
          developer={gameitem.developer}
          platform={gameitem.platform}
          rating={gameitem.rating}
          />
        })}
    </div>
    </div>
  )
}

export default Smallsite
