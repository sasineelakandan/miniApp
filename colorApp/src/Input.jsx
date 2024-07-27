import React, { useState } from 'react'

const Input = ({onSubmit}) => {
    const [name ,setName]=useState('')
    

    function handlesubmit(e){
        e.preventDefault()
        onSubmit(name)
        setName('')
    }
  return (
    <form onSubmit={handlesubmit} >
        <input type="text" value={name} onChange={(e)=>setName(e.target.value)} />
        <button type='submit'>submit</button>
    </form>
  )
}

export default Input