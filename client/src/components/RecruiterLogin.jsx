import React, { useState } from 'react'

const RecruiterLogin = () => {

    const[state,setState]=useState('Login')
    const[name,setName]=useState('')
    const [password,setPassword]=useState('')
    const [email,setEmail]=useState('')

    const[image,setImage]=useState(false)

    const[isTextDataSubmitted,setIsTextDataSubmitted]=useState(false)


  return (
    <div>
      Login Pop up
    </div>
  )
}

export default RecruiterLogin
