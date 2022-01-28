import React,{useContext} from 'react'
import {useParams} from "react-router-dom";
import {ProductContext} from "../context/products";
import Loading from "../components/Loading";
import {useHistory} from "react-router-dom";
export default function ProductDetails() {
    const {id}=useParams();
    const {products} = useContext(ProductContext);
    
    const product=products.find((i)=>i.id===parseInt(id));
    const history=useHistory();
    if(products.length===0){
        return <Loading/>
    }
else{
    const {image,title,price,description}=product;
    return (
        <section className="single-product">
            <img src={image} alt={title} className="single-product-image"/>
            <article>
                <h1>{title}</h1>
                <h2>₹{price}</h2>
                <p>{description}</p>
                <button className="btn btn-primary btn-block" onClick={()=>history.push("/cart")}>Add To Cart</button>
            </article>
           
        </section>
    )
}
    
}
