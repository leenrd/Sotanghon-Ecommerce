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
            <div className="cartEmpty">
                <img src="/assets/UnboxingDoodle.png" alt="" className='emptyStateImage'/>
                <h1 className='emptyText'>Your cart is empty</h1>
                <button
                className="btn-secondary"
                onClick={() => cartFunction()}
                >Continue Browsing</button>
            </div>
            <div className="cartItems">
              {/* <CartItem /> */}
            </div>
            {/* <div className="transaction">
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
                <span>Taxes(VAT)</span>
                <span>some nums</span>
              </div>
              <hr />
              <div className="total text-flex">
                <span>Total</span>
                <span>total num</span>
              </div>
              <button className="checkOut ">Proceed to Checkout</button>
            </div> */}
        </div>
    </>
  )
}

export default Cart


const CartItem = () => {
  return (
    <div className="boxContainer">
      <div className="boxItem">
        <img src="/assets/Cheezymada-1024x681.jpg" alt="" />
        <div className="Cartgrid">
          <div className="Cartleft">
              <span className='itemName'>Cheezymada</span>
            <span className="tick">In Stock</span>
          </div>
          <div className="Cartright">
            <span>48 ₽</span>
            <div className="operations">
              <div className="adder">ewan</div>
              <button className="remove btn-primary"><i className="fa-solid fa-trash"></i></button>
            </div>
          </div>
        </div>
</div>
      <hr />
    </div>
  )
}

