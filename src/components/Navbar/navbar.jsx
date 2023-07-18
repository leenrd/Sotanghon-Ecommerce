import './style-navbar.css'
import { Link } from 'react-router-dom'
import { useState, useContext } from 'react'
import Cart from '../../pages/Cart/cart'
import { CartContext } from '../../App'


const Navbar = () => {
    const [navbar, setNavbar] = useState(false)
    const { cartOn, handleCart } = useContext(CartContext)

    const changeStyle = () => {
        if(window.scrollY >= 94) {
            setNavbar(true)
        } else {
            setNavbar(false)
        }
    }

    window.addEventListener("scroll", changeStyle)

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
                        <Link className='btn-ghost' to='/about'>About</Link>
                        <Link className='btn-ghost' to='/location'>Locations</Link>
                </div>
                <div className="right">
                    <button onClick={handleCart}>
                        <span className='notification-icon'>
                            <i className="fa-solid fa-cart-shopping"></i>
                        </span>
                    </button>
                </div>
            </nav>
    </div>
    </>
 )
}

export default Navbar