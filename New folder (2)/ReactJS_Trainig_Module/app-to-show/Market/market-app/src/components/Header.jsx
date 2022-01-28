import React from 'react'
import {Link} from "react-router-dom"
export default function Header() {
    return (
        <header className='header'>
 <h1 alt="vintage tech logo" className="logo" >मारKET</h1>
 <nav>
    <ul>
        <div>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/products">Products</Link></li>
        </div>
        <div>
        <li><Link to="/login">Login</Link></li>
        <li><Link to="/cart ">Cart</Link></li>
        </div>
    </ul>
 </nav>
        </header>
    )
}
