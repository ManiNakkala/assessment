// src/pages/ThankYouPage.js

import {Link} from 'react-router-dom'

const ThankYouPage = () => (
  <div className="thank-you">
    <h2>Congratulations Order Placed!</h2>
    <p>Thank you for choosing our services.</p>
    <Link to="/">
      <button className="thank-but" type="submit">
        Continue Shopping
      </button>
    </Link>
  </div>
)

export default ThankYouPage
