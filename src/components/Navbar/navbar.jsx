import './style-navbar.css'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import Cart from '../../pages/Cart/cart'

const Navbar = () => {
    const [navbar, setNavbar] = useState(false)
    const [cartOn, setCartOn] = useState(false)

    const changeStyle = () => {
        if(window.scrollY >= 94) {
            setNavbar(true)
        } else {
            setNavbar(false)
        }
    }

    window.addEventListener("scroll", changeStyle)

    const handleCart = () => {
        setCartOn(prevOn => !prevOn)
    }

 return (
    <>
    {cartOn && <Cart cartFunction={handleCart}/>}
    <div className={navbar ? 'navbar container active' : 'navbar container'}>
            <nav>
                <div className="left">
                <a href='/' className='logolink'>Sotanghon</a>
                </div>
                <div className="center navlinks">
                        <Link className='btn-ghost' to='/'>Home</Link>
                        <Link className='btn-ghost' to='/items'>Items</Link>
                        <Link className='btn-ghost' to='/About'>About</Link>
                        <Link className='btn-ghost' to='/Locations'>Locations</Link>
                </div>
                <div className="right">
                    <button onClick={handleCart}><i className="fa-solid fa-cart-shopping"></i></button>
                </div>
            </nav>
    </div>
    </>
 )
}

export default Navbar