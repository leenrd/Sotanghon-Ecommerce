import './style-cart.css'

function Cart({cartFunction}) {

  return (
    <>
        <div
        className="screenOverlay"
        onClick={() => cartFunction()}
        ></div>
        <div className="cartSheet">
            <div className="headCart">
              <div className="cart">Cart(0)</div>
              <button
                className="closeCart btn-primary"
                onClick={() => cartFunction()}
              >
              <i className="fa-solid fa-xmark"></i>
              </button>
            </div>
            <hr />
            <div className="cartItems">
              <div className="cartEmpty">
                <img src="/assets/UnboxingDoodle.png" alt="" className='emptyStateImage'/>
                <h1 className='emptyText'>Your cart is empty</h1>
              </div>
            </div>
            <div className="transaction">
              <hr />
              <div className="subtotal text-flex">
                <span>Subtotal</span>
                <span>some number 120</span>
              </div>
              <div className="shipping text-flex">
                <span>Shipping</span>
                <span>Free/some</span>
              </div>
              <div className="taxes text-flex">
                <span>Taxes</span>
                <span>some nums</span>
              </div>
              <hr />
              <div className="total text-flex">
                <span>Total</span>
                <span>total num</span>
              </div>
              <button className="checkOut ">Proceed to Checkout</button>
            </div>
        </div>
    </>
  )
}

export default Cart