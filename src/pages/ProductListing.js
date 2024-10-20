// src/pages/ProductListing.js
import {useState} from 'react'
import ProductCard from '../components/ProductCard'
import AddToCartModal from '../components/AddToCartModal'
import Pagination from '../components/Pagination'

const products = [
  {
    id: 1,
    name: 'Lava Z3',
    price: '$20',
    image: 'https://img.etimg.com/photo/msid-98815516,imgsize-24654/LavaZ3.jpg',
  },
  {
    id: 2,
    name: 'NexG N6 Block',
    price: '$35',
    image:
      'https://waltonbd.com/image/catalog/home-page/half-block/nexg-n6-block.jpg',
  },
  {
    id: 3,
    name: 'Lenovo IdeaPad',
    price: '$50',
    image:
      'https://i5.walmartimages.com/seo/Lenovo-Ideapad-5-14-1080p-Touchscreen-Laptop-AMD-Ryzen-7-5700U-8GB-RAM-512GB-SSD-Windows-11Home-Graphite-Grey-82LM00UEUS_bd7e44d5-ecc2-492a-9fe7-56c8599372bd.31d4c74bec047ea8f7dd7939c4e7801b.jpeg',
  },
  {
    id: 4,
    name: 'Sony Bravia',
    price: '$25',
    image:
      'https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RW1iN7I?ver=f82e&q=90&m=6&h=705&w=1253&b=%23FFFFFFFF&f=jpg&o=f&p=140&aim=true',
  },
  {
    id: 5,
    name: 'Wireless black earphone',
    price: '$30',
    image:
      'https://media.istockphoto.com/id/1646426505/photo/in-ear-headphones-black-wireless-earphones-in-ear-with-charging-case-wireless-earbuds-or.jpg?s=612x612&w=0&k=20&c=8nQvJtdCJV3aCyODf_GGZ80EIeE5pVc8MuaPDFZwSn0=',
  },
  {
    id: 6,
    name: 'boAt Earbuds',
    price: '$45',
    image: 'https://m.media-amazon.com/images/I/71N48OjXkdL._AC_SL1500_.jpg',
  },
  {
    id: 7,
    name: 'boAt Rockerz 450 Pro',
    price: '$60',
    image: 'https://m.media-amazon.com/images/I/61jlFEwSt+L._SY450_.jpg',
  },
  {
    id: 8,
    name: 'Boult X Mustang Torq',
    price: '$70',
    image: 'https://m.media-amazon.com/images/I/719xn0KawFL._AC_UL320_.jpg',
  },
  // Add more products as needed
]

const ProductListing = () => {
  const [cartProduct, setCartProduct] = useState(null)
  const [currentPage, setCurrentPage] = useState(1)
  const productsPerPage = 4
  const totalPages = Math.ceil(products.length / productsPerPage)

  const indexOfLastProduct = currentPage * productsPerPage
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage
  const currentProducts = products.slice(
    indexOfFirstProduct,
    indexOfLastProduct,
  )

  const handleAddToCart = product => {
    setCartProduct(product)
  }

  return (
    <div className="container">
      <div className="product-list">
        {currentProducts.map(product => (
          <ProductCard
            key={product.id}
            product={product}
            onAddToCart={handleAddToCart}
          />
        ))}
      </div>
      <div className="page">
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
        />
      </div>
      {cartProduct && (
        <AddToCartModal
          product={cartProduct}
          onClose={() => setCartProduct(null)}
        />
      )}
    </div>
  )
}

export default ProductListing
