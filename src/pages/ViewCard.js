import {useHistory} from 'react-router-dom'

const ViewCard = ({product, onAddToCart}) => {
  const history = useHistory()

  const handleViewProduct = () => {
    history.push(`/view-product/${product.id}`)
  }

  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} />
      <h3>{product.name}</h3>
      <p>{product.price}</p>
      <button type="submit" onClick={handleViewProduct}>
        View Product
      </button>
      <button type="submit" onClick={() => onAddToCart(product)}>
        Add to Cart
      </button>
    </div>
  )
}

export default ViewCard
