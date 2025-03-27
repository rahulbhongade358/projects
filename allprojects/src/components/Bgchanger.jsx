import React, { useState } from 'react'

function Bgchanger() {
  const [color, setcolor] = useState("burlywood")

  return (
    <div className="w-full h-screen duration-200"
    style={{backgroundColor: color}}>
      <h2>Background Changer</h2>
      <button 
      onClick={()=>(setcolor('red'))}
      className="h-8 m-8 cursor-pointer p-2.5 border-2 bg-red-500 text-white hover:bg-red-600 transition duration-300 flex items-center justify-center rounded-lg">
  Red
</button>
    </div>
  )
}

export default Bgchanger
