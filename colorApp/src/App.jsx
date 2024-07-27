import { useState } from 'react'

import './App.css'
import Header from './Header'
import Input from './Input'

function App() {

  const [data,setdata]=useState('')
  function getdata(data){
    setdata(data)
  }

  return (
    <>
     
     <p>who is best performer {data} </p>
     <Header/>
     <Input onSubmit={getdata} />
    </>
  )
}

export default App
