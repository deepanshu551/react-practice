import React from 'react';
import ReactDOM from 'react-dom';
import CartProvider, { CartContext } from "./context/cart";
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import ProductProvider from "./context/products";
ReactDOM.render(
  <ProductProvider>
<CartProvider>
<App />
</CartProvider>
    

    
  </ProductProvider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
