import React,{useContext} from 'react'
import {ProductContext}  from "../context/products";
import Loading from "../components/Loading";
import ProductList from "../components/products/ProductList";
export default function Products() {
    const {loading,products}=useContext(ProductContext);
    console.log(loading,products)
    return (
        <div>
            {loading?<Loading/>:<ProductList title="product titlte" products={products}/>}
        </div>
    )
}
