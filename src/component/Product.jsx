
import React from 'react'
import './product.css'

export const Product = ({product}) => {
    const { name, price, description, stock } = product
    return (
        <div className="containerProduct">
            <div className="title">
                {name}
            </div>
            <div className="description">
                {description}
            </div>
            <div className="price">
                ${price}
            </div>
            <div className="stock">
                {stock ? <p className="st-true">STOCK: SI</p> : <p className="st-false">STOCK: NO</p>}
            </div>

        </div>
    )
}
