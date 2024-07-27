import React from 'react'
import { useState } from 'react'
import App from './App'
const Header = (names) => {
    
 const [count,setcount]=useState(0)
 function increment(){
    setcount((precount)=>precount+=1)
 }
function decrement(){
    setcount((precount)=>precount-=1)

}

    
 
  

  return (
    <div>
    
      
       <button onClick={decrement} >dec</button>
        <p>count is{count}</p>
        <button onClick={increment} >ADD</button>
    </div>
  )
}

export default Header