import '../styles/utilities.css'
import Homepage from '../src/pages/Homepage/homepage'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar/navbar'
import Items from './pages/Items/items'
import About from './pages/About/about'
import Location from './pages/Location/Location'
import Footer from './components/Footer/footer'

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Homepage />}/>
          <Route path='/items' element={<Items />}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/location' element={<Location />}/>
          {/* <Route path='/cart' element={<Cart />}/>
          <Route path='*' element={<PageNotFound />}/> */}
        </Routes>
        <Footer />
      </Router>
    </>
  )
}

export default App
