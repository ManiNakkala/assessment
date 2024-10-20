// src/components/ProductCard.js
// import {useState, useEffect} from 'react' // Correct import from React
import {Link, useHistory} from 'react-router-dom' // Router-specific imports

const ProductCard = ({product, onAddToCart}) => {
  const history = useHistory()

  const handleViewProduct = () => {
    history.push(`/view-product/${product.id}`)
  }

  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} />
      <h3>{product.name}</h3>
      <p>{product.price}</p>
      <div className="but-card">
        <Link to={`/view-product/${product.id}`} className="product-link">
          <button type="submit" onClick={handleViewProduct}>
            View Product
          </button>
        </Link>
        <button type="submit" onClick={() => onAddToCart(product)}>
          Add to Cart
        </button>
      </div>
    </div>
  )
}

export default ProductCard
