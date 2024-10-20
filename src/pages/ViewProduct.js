// src/pages/ThankYouPage.js

import {useHistory} from 'react-router-dom'

const products = [
  {
    id: 1,
    name: 'Lava Z3',
    image: 'https://img.etimg.com/photo/msid-98815516,imgsize-24654/LavaZ3.jpg',
    summary: `
      The Lava Z3 is a budget-friendly smartphone from the Indian mobile manufacturer Lava. It aims to provide essential features and good performance at an affordable price point.
    `,
  },
  {
    id: 2,
    name: 'The NexG N6 Block',
    image:
      'https://waltonbd.com/image/catalog/home-page/half-block/nexg-n6-block.jpg',
    summary: `
      The NexG N6 Block is a feature phone designed to provide basic functionality with modern touches. It caters to users who prefer a straightforward and easy-to-use mobile device without the complexity of smartphones. 
    `,
  },
  {
    id: 3,
    name: 'Lenovo IdeaPad',
    image:
      'https://i5.walmartimages.com/seo/Lenovo-Ideapad-5-14-1080p-Touchscreen-Laptop-AMD-Ryzen-7-5700U-8GB-RAM-512GB-SSD-Windows-11Home-Graphite-Grey-82LM00UEUS_bd7e44d5-ecc2-492a-9fe7-56c8599372bd.31d4c74bec047ea8f7dd7939c4e7801b.jpeg',
    summary: `
      The Lenovo IdeaPad series is a range of laptops designed to offer versatile computing solutions for different user needs, from casual use to professional productivity. The IdeaPad series is known for its affordability, variety of models, and reliable performance.
    `,
  },
  {
    id: 4,
    name: 'Sony Bravia 108 cm',
    image:
      'https://www.reliancedigital.in/medias/SONY-43-UHD-SMART-LED-TV-43X64L-493841864-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3w2MjQxNnxpbWFnZS9qcGVnfGltYWdlcy9oMmEvaDZkLzk5ODkxNzEzMTQ3MTguanBnfDJiNjJlODYzMDM1MDZhMTVkYjYxZWUxYTRkZDUyNTc1ZjNhYzE4NDllNDIxM2JjMTNiMDA0MGYzMjI4Njc3NTI',
    summary: `
      The Sony Bravia 108 cm (approximately 43 inches) is a smart LED TV known for its excellent picture quality and impressive features. Sony's Bravia series is designed to deliver a premium viewing experience, combining high-definition visuals, advanced audio technology, and smart TV capabilities.
    `,
  },
  {
    id: 5,
    name: 'Wireless black earphone',
    image:
      'https://media.istockphoto.com/id/1646426505/photo/in-ear-headphones-black-wireless-earphones-in-ear-with-charging-case-wireless-earbuds-or.jpg?s=612x612&w=0&k=20&c=8nQvJtdCJV3aCyODf_GGZ80EIeE5pVc8MuaPDFZwSn0=',
    summary: `
      Wireless black earphones are a popular audio accessory, designed for convenience and style. They offer great sound quality without the hassle of tangled wires, making them suitable for a wide range of activities.
    `,
  },
  {
    id: 6,
    name: 'boAt Earbuds',
    image: 'https://m.media-amazon.com/images/I/71N48OjXkdL._AC_SL1500_.jpg',
    summary: `
      Boat is a popular brand known for producing affordable audio products, including a wide range of earbuds. Their earbuds are well-regarded for offering good sound quality, stylish design, and advanced features at a budget-friendly price.
    `,
  },
  {
    id: 7,
    name: 'boAt Rockerz 450 Pro',
    image: 'https://m.media-amazon.com/images/I/61jlFEwSt+L._SY450_.jpg',
    summary: `
      The boAt Rockerz 450 Pro is a popular wireless Bluetooth on-ear headphone known for its stylish design, long battery life, and powerful sound. It offers a range of features that cater to music lovers and those who want a comfortable, high-quality audio experience.
    `,
  },
  {
    id: 8,
    name: 'Boult X Mustang Torq',
    image: 'https://m.media-amazon.com/images/I/719xn0KawFL._AC_UL320_.jpg',
    summary: `
      The Boult X Mustang Torq is a popular wireless Bluetooth on-ear headphone known for its stylish design, is a pair of true wireless earbuds designed for music enthusiasts and active users.
    `,
  },
  // Add more products as needed
]

const ViewProduct = props => {
  const {match} = props
  const {params} = match
  const {id} = params

  const history = useHistory()
  const goBack = () => {
    history.push(`/`)
  }

  const filtred = products.filter(each => each.id === parseInt(id))

  return (
    <div className="view-product">
      <div className="img-card">
        <img
          src={filtred[0].image}
          alt={filtred[0].name}
          className="product-img"
        />
      </div>
      <div className="para-cart">
        <h1 className="view-head">{filtred[0].name}</h1>
        <p>{filtred[0].summary}</p>
        <button type="submit" onClick={goBack}>
          Go Back
        </button>
      </div>
    </div>
  )
}

export default ViewProduct
