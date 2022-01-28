import React from 'react'
import loading from "../assets/loading2.gif";
export default function Loading() {
    return (
        <div className="loading">
        <h2>loading...</h2>
            <img src={loading} alt="loading" />
        </div>
    )
}
