import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router,Route,Switch} from "react-router-dom";
import Home from "./pages/Home";
import Error from "./pages/Error";

import Cart from "./pages/Cart";

import Checkout from "./pages/Checkout";
import About from "./pages/About";
import Login from "./pages/Login";

import Products from "./pages/Products";

import ProductDetails from "./pages/ProductDetails";
import Header from "./components/Header";
function App() {
    return ( 
        <Router>
          <Header/>
<Switch>
<Route exact path="/" component={Home} />
          <Route path="/cart" component={Cart} />
          <Route path="/checkout" component={Checkout} />
          <Route path="/about" component={About} />
          <Route path="/login" component={Login} />
          <Route exact path="/products" component={Products} />
          <Route path="/products/:id" component={ProductDetails} />
          <Route path="*" component={Error} />
</Switch>
         
        </Router>
    );
}

export default App;