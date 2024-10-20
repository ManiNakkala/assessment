// src/App.js
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Header from './components/Header'
import ProductListing from './pages/ProductListing'
import ThankYouPage from './pages/ThankYouPage'
import ViewProduct from './pages/ViewProduct'
import Cart from './components/Cart'
import {CartProvider} from './context/CartContext' // Import Cart Provider
import './App.css'

const App = () => (
  <CartProvider>
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" component={ProductListing} />
        <Route path="/view-product/:id" component={ViewProduct} />
        <Route path="/thank-you" component={ThankYouPage} />
        <Route path="/cart" component={Cart} /> {/* New Cart Route */}
      </Switch>
    </Router>
  </CartProvider>
)

export default App
