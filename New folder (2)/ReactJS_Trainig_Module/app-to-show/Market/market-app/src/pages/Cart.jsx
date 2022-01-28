import React,{useContext} from 'react'
import {CartContext} from "../context/cart";
import CartEmpty from "../components/cart/CartEmpty";
import CartItem from "../components/cart/CartItem";
import {Link} from "react-router-dom";
export default function Cart() {
let user=true;
   const {cart,total}=useContext(CartContext);
   console.log(cart,total)
   if(cart.length===0){
       return  <CartEmpty/>
   }
    return <section className="cart-items section">
        <h2>My Cart</h2>
        {cart.map(item=>{
            return<CartItem key={item.id } {...item}/>
        })}
        <h2>total: ₹{total}</h2>
        {user?<Link to="/checkout" className="btn btn-primary btn-block">Checkout</Link>:<Link to="/login" className="btn btn-primary btn-block">Login</Link>}
    </section>
}
