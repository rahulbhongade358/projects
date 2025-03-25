import React from 'react'
import { Link,NavLink } from 'react-router-dom'
function Nav() {
  return (
    <div className='bg-blue-600 flex items-center text-[18px] font-serif text-cyan-50 justify-around h-[35px] p-2 m-2.5 rounded-2xl '>
      <NavLink to={"/"}  className={({isActive})=>isActive?"text-fuchsia-400":""}> <p>Home</p> </NavLink>
      <NavLink to={"/bgchanger"}  className={({isActive})=>isActive?"text-fuchsia-400":""}> <p>Bgchanger</p> </NavLink>
      <NavLink to={"/currency"}  className={({isActive})=>isActive?"text-fuchsia-400":""}> <p>Currency</p> </NavLink>
      <NavLink to={"/passgener"}  className={({isActive})=>isActive?"text-fuchsia-400":""}> <p>Passgener</p> </NavLink>
    </div>
  )
}

export default Nav
