import './style-navbar.css'
import { Link } from 'react-router-dom'
import { useState } from 'react'

const Navbar = () => {
    const [navbar, setNavbar] = useState(false)

    const changeStyle = () => {
        if(window.scrollY >= 94) {
            setNavbar(true)
        } else {
            setNavbar(false)
        }
    }

    window.addEventListener("scroll", changeStyle)

 return (
    <div className={navbar ? 'navbar container active' : 'navbar container'}>
            <nav>
                <div className="left">
                <a href='#' className='logolink'>Sotanghon</a>
                </div>
                <div className="center navlinks">
                        <Link className='btn-ghost' to='/'>Home</Link>
                        <Link className='btn-ghost' to='/items'>Items</Link>
                        <Link className='btn-ghost' to='/About'>About</Link>
                        <Link className='btn-ghost' to='/Contact'>Contact</Link>
                </div>
                <div className="right">
                    <a href="#"><i className="fa-solid fa-cart-shopping"></i></a>
                </div>
            </nav>
    </div>
 )
}

export default Navbar