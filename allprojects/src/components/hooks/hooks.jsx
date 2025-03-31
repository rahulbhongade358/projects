import React from 'react'
import './Hooks.css'
function hooks() {
  return (
    <div>
      This project based on Hook's
      <div className='main-cart'>
      <h2>Pizza Cart 🍕🍕🍔</h2>
      <img src="https://images3.alphacoders.com/104/1041781.jpg" alt="Pizza" />
      <p className='desc'>Delicious cheesy pizza with fresh toppings and a crispy crust.</p>
      <p className='price'>Price: ₹399</p>
      <button className='plus'>-</button>
      <p className='total'>Total: 0 </p>
      <button className='minus'>+</button>
    </div>
    </div>
  )
}

export default hooks
