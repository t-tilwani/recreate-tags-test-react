import React, { useEffect, useState } from "react";

export default function Product({product, productIndex,setProductArray, productArray }) {

    const [productQuantity, setProductQuantity] = useState(product.quantity)

    const handleAddQuantity = () => { 
        setProductQuantity((prev) => prev + 1);
    };

    const handleSubtractQuantity = () => {

        if(productQuantity > 0){
            setProductQuantity((prev) => prev - 1);
        }
        
    };

    const handleProductArray = (q) => {
        setProductArray(
            productArray.map((product, i) => i === productIndex ? {...product, quantity: q} : product)
        )
    }
    
    useEffect(() => {
        if(productQuantity === 0){
            if(confirm(`Are you sure you want to delete ${product.productName}?`)){
                setProductArray((prev) => prev.filter((_, i) => i !== productIndex))
            }else{
                setProductQuantity(1);
                handleProductArray(1);
            }
            
        }
        
        if(productQuantity > 0){
            handleProductArray(productQuantity)
        }
        
    }, [productQuantity])

    return(
        <div className="product-comp-container">
            <h3 className="product-comp-name">{product.productName}</h3>
                <h4 className="product-comp-quantity">{productQuantity}</h4>
                <div className="product-comp-quantity-pm-container">
                    <svg className="product-comp-pm-svg pc-plus" onClick={handleAddQuantity} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 144L48 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l144 0 0 144c0 17.7 14.3 32 32 32s32-14.3 32-32l0-144 144 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-144 0 0-144z"/></svg>
                    <svg className="product-comp-pm-svg pc-minus" onClick={handleSubtractQuantity} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M432 256c0 17.7-14.3 32-32 32L48 288c-17.7 0-32-14.3-32-32s14.3-32 32-32l352 0c17.7 0 32 14.3 32 32z"/></svg>  
                </div>
            
            <h3 className="product-comp-price">£{product.price.toFixed(2)}</h3>
        </div>
    )
};