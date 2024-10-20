// src/components/AddToCartModal.js
import {useContext} from 'react'
import {CartContext} from '../context/CartContext'

const AddToCartModal = ({product, onClose}) => {
  const {addToCart} = useContext(CartContext)

  const handleAddToCart = () => {
    addToCart(product)
    onClose() // Close the modal after adding the product
  }

  return (
    <div className="modal">
      <div className="modal-content">
        <h2>Add {product.name} to Cart?</h2>
        <p>Price: ${product.price}</p>
        <button type="submit" onClick={handleAddToCart}>
          Add to Cart
        </button>
        <button type="submit" onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  )
}

export default AddToCartModal
