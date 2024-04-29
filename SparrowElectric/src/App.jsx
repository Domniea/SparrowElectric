import { useState } from 'react'
import './App.css'


import Header from './components/Header'
import WeCanHelp from './components/WeCanHelp'
import DiscoverBenefits from './components/DiscoverBenefits'
import OurServices from './components/OurServices'
import FAQ from './components/FAQ'
import GoSolar from './components/GoSolar/GoSolar'
import Footer from './components/Footer'

function App() {


  return (
    <div>
      <Header/>
      <div className='Body'>
        <WeCanHelp/>
        <DiscoverBenefits/>
        <OurServices />
        <FAQ />
        <GoSolar />
        <Footer />
      </div>
    </div>
  )
}

export default App
