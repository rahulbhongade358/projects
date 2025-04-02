import React, { useState } from 'react'
import toast, {Toaster} from 'react-hot-toast'
import './Hooks.css'
function hooks() {
  const [quantity, setquantity] = useState(0)
  const increase = ()=>{
    if (quantity==6) {
      toast('😭😭You Reached The Limit ',{
        style: {
          background: '#ffcc00',
          color: 'red',
          fontFamily:'serif',
          fontSize: '20px',
          borderRadius:'20px'
        },
      });
    }else{setquantity(quantity+1)}
    
  }
  const decrease = ()=>{
    if (quantity>1) {
      setquantity(quantity-1)
    }
    
  }
  

  return (
    <div>
      This project based on Hook's
      <div className='main-cart'>
      <h2>Pizza Cart 🍕🍕🍔</h2>
      <img src="https://images3.alphacoders.com/104/1041781.jpg" alt="Pizza" />
      <p className='desc'>Delicious cheesy pizza with fresh toppings and a crispy crust.</p>
      <p className='price'>Price: ₹399</p>
      <button className='minus' onClick={decrease}>-</button>
      <p className='total'>Total:{quantity}</p>
      <button className='plus' onClick={increase}>+</button>
      <Toaster/>
    </div>
    </div>
  )
}

export default hooks
