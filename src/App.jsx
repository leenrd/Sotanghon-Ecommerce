// import { useState } from 'react'
import '../styles/utilities.css'
import Homepage from '../src/pages/Homepage/homepage'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar/navbar'
import Items from './pages/Items/items'
import About from './pages/About/about'
import Contact from './pages/Contact/contact'

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Homepage />}/>
          <Route path='/items' element={<Items />}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/contact' element={<Contact />}/>
          {/* <Route path='/cart' element={<Cart />}/>
          <Route path='*' element={<PageNotFound />}/> */}
        </Routes>
      </Router>
    </>
  )
}

export default App
