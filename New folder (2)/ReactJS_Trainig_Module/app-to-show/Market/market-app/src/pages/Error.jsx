import React from 'react'
import {Link} from "react-router-dom";
export default function Error() {
    
    return (
        <section className="error-page section">
            <div className="error-container">
                <h1>oops! please check your url</h1>
<Link to="/" className='btn btn-primary'>back to home</Link>
            </div>
        </section>
    )
}
