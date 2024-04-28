import { useState } from 'react'
import './App.css'


import Header from './components/Header'
import WeCanHelp from './components/WeCanHelp'
import DiscoverBenefits from './components/DiscoverBenefits'
import OurServices from './components/OurServices'

function App() {


  return (
    <div>
      <Header/>
      <div className='Body'>
      <WeCanHelp/>
      <DiscoverBenefits/>
      <OurServices />
      </div>
    </div>
  )
}

export default App
