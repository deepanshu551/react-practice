import React from 'react'
import Product from "./Product";
export default function ProductList({title,products}) {
    console.log(title,products)
    return (
        <section>
           <h1 className="section-title">{title}</h1>
           <div className="products-center">
{products.map(item=>{
    return <Product key={item.id} item={item}/>
})}
           </div>
        </section>
    )
}
