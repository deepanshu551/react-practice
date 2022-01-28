import React from 'react'

export default function Hero({children}) {
    return (
        <div className='hero'>
            <div className="banner">
                <h1>latest collection of brand new products</h1>
                <p>your choices  - we provide</p>
                {children}
            </div>
        </div>
    )
}
