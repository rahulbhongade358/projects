import React, { useState } from 'react'

function Bgchanger() {
  const [color, setcolor] = useState("Olive")

  return (
    <div className="w-full h-screen duration-2000"
    style={{backgroundColor: color}}>
      <h2>Background Changer</h2>
        <button 
          onClick={()=>(setcolor('red'))}
         className="h-8 m-8 cursor-pointer p-2.5 border-2 bg-red-500 text-white hover:bg-red-600 transition duration-300 flex items-center justify-center rounded-lg">
          Red
        </button>
        <button 
          onClick={()=>(setcolor('pink'))}
          className="h-8 m-8 cursor-pointer p-2.5 border-2 bg-pink-500 text-white hover:bg-pink-600 transition duration-300 flex items-center justify-center rounded-lg">
          Pink
        </button>
      <button 
        onClick={()=>(setcolor('burlywood'))}
        className="h-8 m-8 cursor-pointer p-2.5 border-2 bg-[burlywood] text-white hover:bg-[burlywood] transition duration-300 flex items-center justify-center rounded-lg">
        burlywood
      </button>
      <button 
        onClick={()=>(setcolor('black'))}
        className="h-8 m-8 cursor-pointer p-2.5 border-2 bg-black text-white hover:bg-black-600 transition duration-300 flex items-center justify-center rounded-lg">
        Black
      </button>
      <button 
        onClick={()=>(setcolor('violet'))}
        className="h-8 m-8 cursor-pointer p-2.5 border-2 bg-violet-500 text-white hover:bg-violet-600 transition duration-300 flex items-center justify-center rounded-lg">
        Violet
      </button>
      <button 
        onClick={()=>(setcolor('aqua'))}
        className="h-8 m-8 cursor-pointer p-2.5 border-2 bg-[aqua] text-white hover:bg-[aqua]transition duration-300 flex items-center justify-center rounded-lg">
        Aqua
      </button>
        
    </div>
  )
}

export default Bgchanger
