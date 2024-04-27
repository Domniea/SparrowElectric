import { useState } from 'react'
import './App.css'


import Header from './components/Header'
import WeCanHelp from './components/WeCanHelp'

function App() {


  return (
    <div>
      <Header/>
      <div className='Body'>
      <WeCanHelp/>  
      </div>
    </div>
  )
}

export default App
