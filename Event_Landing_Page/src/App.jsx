import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import Home from './pages/Home'
import Schedule from './pages/Schedule'
import Speakers from './pages/Speakers'
import Registration from './pages/registration'
import Footer from './components/Footer'

function App() {

  return (
    <>
     <Header/>
     <Home/>
     <Schedule/>
     <Speakers/>
     <Registration/>
     <Footer/>
    </>
  )
}

export default App
