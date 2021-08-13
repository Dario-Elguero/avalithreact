
import React, {useState, useEffect} from 'react'
import { Product } from './Product'
import productsDB from './db_products'
import './cataloge.css'


export const Cataloge = () => {
    
    const [products, setProducts] = useState()
    
    useEffect(() => {
        setProducts(productsDB)
    }, [])
    
    const [checked, setChecked] = useState(true)
    
    const handleClick = ()=>{
        if (checked){
            const onlyStock = products.filter(prod => prod.stock === true)
            setProducts(onlyStock)
            setChecked(false)
        }else{
            setProducts(productsDB)
            setChecked(true)
        }
    }
    let index = 0;
    return (
        <>
            <div className="contrainerToggle">
                <div className="toggleStock">
                    <p className="titleCheck">
                        VER SOLO PRODUCTOS CON STOCK 
                    </p>
                    <label className="switch"> 
                        <input type="checkbox" onClick={handleClick} />
                        <span className="slider round"></span>
                    </label>
                </div>
            </div>

            <div className='contrainerCataloge'>
                
                {products?.map(prod => (
                    <div key={index = index + 1}>
                        <Product product = {prod}/> 
                    </div>
                    ))}
                
            </div>
        </>
    )
}
