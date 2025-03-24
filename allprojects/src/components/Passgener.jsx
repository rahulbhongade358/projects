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
    </div>
  )
}

export default Passgener
