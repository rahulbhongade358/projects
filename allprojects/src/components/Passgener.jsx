import React, { useCallback, useEffect, useState } from 'react'

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
    

  return (
    <div>
      <h1> PASSWORLD GENERATOR</h1>
      <div>
        <input type="text" 
        value={Password} 
        readOnly
        />
        <button>Copy</button>
      </div>
      <div>
        <div>
            <input type="range"
            value={Length}
            min={6}
            max={11}
            onChange={(e)=>(setLength(e.target.value))} />
            <label>Length : {Length}</label>
        </div>
        <div>
            <input type="checkbox" 
            defaultChecked={Numbers} 
            onChange={()=>(
                setNumbers((prev)=>(!prev))
            )}
            id='numperinput'
            />
         <label htmlFor="numberInput">Numbers</label>
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
