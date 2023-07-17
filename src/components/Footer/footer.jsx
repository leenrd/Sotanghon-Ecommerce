import './style-footer.css'

function Footer() {
  return (
    <div className="footer">
        <div className="grid">
            <div className="footText">
                <h1>Baked At Midnight </h1>
                <span className='circle'></span>
            </div>
            <div className="links">
                <div className="menu">
                    <span>Items</span>
                    <span>About</span>
                    <span>Locations</span>
                    <span>Cart</span>
                </div>
                <div className="contacts">
                    <span>09783782898</span>
                    <span className='emailSotanghon'>sotanghon.hello.com</span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer