// src/components/Header.js
import {Link} from 'react-router-dom'

const Header = () => (
  <header>
    <input type="text" placeholder="Search Products..." />
    <div>
      <span>
        <Link to="/" className="product-link">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSLU5_eUUGBfxfxRd4IquPiEwLbt4E_6RYMw&s"
            alt="profile"
            width="35px"
          />
        </Link>
      </span>
      <span>
        <Link to="/cart" className="product-link">
          <img
            src="https://cdn-icons-png.flaticon.com/512/1413/1413908.png"
            alt="profile"
            width="35px"
          />
        </Link>
      </span>
    </div>
  </header>
)

export default Header
