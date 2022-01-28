import React,{createContext,useState,useEffect} from 'react'
import localCart from "../utils/localCart";
export const CartContext=createContext();

export default function CartProvider({children}) {
const [cart, setCart] = useState(localCart);
const [total, setTotal] = useState(0);
const [cartItems, setCartItems] = useState(0);
useEffect(() => {
     let newCartItem=cart.reduce((acc,p)=>{
return acc=acc+p.amount;

     },0);
     setCartItems(newCartItem);

     let newTotal=cart.reduce((acc,p)=>{
         return acc=acc+(p.amount*p.price);
     },0)
     newTotal=parseFloat(newTotal.toFixed(2));
     setTotal(newTotal);
}, [cart]);
//remove item
const removeItem=id=>{
    console.log(id)
    const filteredCart=cart.filter(i=>i.id!==id);
    setCart(filteredCart);
};
//increase item
const increaseAmount=id=>{};
//decrease amount
const decreaseAmount=id=>{};
//add to cart
const addToCart=id=>{};
//clear cart
const clearCart=id=>{}; 
    return (
        <CartContext.Provider value={{cart,total,cartItems,removeItem}}>
            {children}
        </CartContext.Provider>
    )
}
