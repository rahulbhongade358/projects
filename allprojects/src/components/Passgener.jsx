import React, { useCallback, useEffect, useState } from 'react'
import toast, {Toaster} from 'react-hot-toast'
function Passgener() {

    const [Length, setLength] = useState(6)
    const [Numbers, setNumbers] = useState(false)
    const [Charecter, setCharecter] = useState(false)
    const [Password, setPassword] = useState("")

    const PasswordGener = useCallback(
      () => {
        let pass = ""
        let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
        if(Numbers){
            str += "0123456789"
        }
        if(Charecter){
            str += "!~`@$#%&^*()_+{[}]:;'<,>./?/*-\|+-"
        }
        for (let i = 1; i <= Length; i++) {
            let char = Math.floor(Math.random()*str.length + 1)
            pass += str.charAt(char)
        }
        setPassword(pass)
      },
      [Length,Numbers,Charecter,setPassword],
    )
    
    useEffect(() => {
      PasswordGener()
    
    }, [Length,Charecter,Numbers,PasswordGener])
    
    const submit = ()=> toast('Copied succesfully',{
      style: {
        background: '#333',
        color: '#fff',
        fontFamily:'serif'
      },
    });

  return (
    <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500">
      <h1 className='text-white text-center my-3'> PASSWORLD GENERATOR</h1>
      <div className="flex shadow rounded-lg overflow-hidden mb-4">
        <input 
        className="outline-none w-full py-1 px-3"
        type="text" 
        value={Password} 
        readOnly
        />
        <button 
        onClick={submit}
        className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'>
            Copy
        </button>
        <Toaster/>
      </div>
      <div className='flex text-sm gap-x-2'>
        <div className='flex items-center gap-x-1'> 
            <input 
             className='cursor-pointer'
             type="range"
            value={Length}
            min={6}
            max={11}
            onChange={(e)=>(setLength(e.target.value))} />
            <label>Length: {Length}</label>
        </div>
        <div>
            <input className="flex items-center gap-x-1"
            type="checkbox" 
            defaultChecked={Numbers} 
            onChange={()=>(
                setNumbers((prev)=>(!prev))
            )}
            id='numperinput'
            />
         <label htmlFor="numberInput">Number</label>
      </div>
      <div className="flex items-center gap-x-1">
          <input
              type="checkbox"
              defaultChecked={Charecter}
              id="characterInput"
              onChange={() => {
                  setCharecter((prev) => !prev )
              }}
          />
          <label htmlFor="characterInput">Characters</label>
      </div>
    </div>
</div>
    
  )
}

export default Passgener
