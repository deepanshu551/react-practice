import React,{useContext} from 'react';
import {FaAngleUp, FaAngleDown} from "react-icons/fa";
import {CartContext} from "../../context/cart";
export default function CartItem({image,id,title,price,amount }) {

    const {removeItem}=useContext(CartContext )
    return (
        <article className="cart-item">
            <img src={image} alt={title}/>
            <div>
                <h4>{title}</h4>
                <h5>₹{price}</h5>
                <button type="button" className="cart-btn remove-btn" onClick={()=>removeItem(id)}>remove</button>
            </div>
            <div>
                <button type='button' className="cart-btn amount-btn" onClick={()=>console.log("amount increased")}><FaAngleUp/></button>
                <p className='item-amount'>{amount}</p>
                <button type='button' className="cart-btn amount-btn" onClick={()=>console.log("amount decreased")}><FaAngleDown/></button>
            </div>
        </article>
    )
}
