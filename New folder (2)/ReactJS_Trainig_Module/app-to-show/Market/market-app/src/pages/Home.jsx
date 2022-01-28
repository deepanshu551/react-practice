import React from 'react'

import Hero from "../components/Hero";
import {Link} from "react-router-dom";
export default function Home() {
    return (
        <>
            <Hero>
                <Link to ="/products" className='btn btn-primary btn-block btn-hero'>Product</Link>
                </Hero>
        </>
    )
}
