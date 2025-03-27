import React from 'react'
import { Route,Routes } from 'react-router-dom'
import Home from './Home'
import Bgchanger from './Bgchanger'
import Passgener from './Passgener'
import Currency from './Currency'
import Smallsite from './Smallsite'
function Allroutes() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/bgchanger' element={<Bgchanger/>}/>
        <Route path='/passgener' element={<Passgener/>}/>
        <Route path='/currency' element={<Currency/>}/>
        <Route path='/smallsite' element={<Smallsite/>}/>
      </Routes>
    </div>
  )
}

export default Allroutes
