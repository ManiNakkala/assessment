// src/components/Cart.js
import {useContext} from 'react'
import {useHistory} from 'react-router-dom'
import {CartContext} from '../context/CartContext'

const Cart = () => {
  const {cart, orderPlaced} = useContext(CartContext)

  const history = useHistory()
  const goThankPage = () => {
    history.push(`/thank-you`)
  }

  return (
    <div className="cart-container">
      <h2>Your Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <ul className="cart-items">
            {cart.map(item => (
              <div className="cart-product-card">
                <img src={item.image} alt={item.name} className="cart-img" />
                <h3>{item.name}</h3>
                <p>{item.price}</p>
              </div>
            ))}
          </ul>
          {!orderPlaced && (
            <button type="submit" onClick={goThankPage}>
              Place Order
            </button>
          )}
        </>
      )}
    </div>
  )
}

export default Cart
