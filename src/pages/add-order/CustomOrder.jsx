import React, {useState, useContext, useEffect} from "react"
import CreateOrder from "./CreateOrder"
import BackButton from "../../components/BackButton";
import { useNavigate } from "react-router-dom";
import { products } from "../../data/products";
import {usePounds} from "../../hooks/CashConverter";
import {useContactChecker} from "../../hooks/ContactDetailChecker"
import ContactBox from "../../components/contact-box/ContactBox";


import { CurrentOrderItemsContext } from "../../Context/CurrentOrderItemsContext";

export default function CustomOrder() {

    const {productArray, setProductArray} = useContext(CurrentOrderItemsContext);
    const [bINProductArray, setBINProductArray] = useState({});

    const navigate = useNavigate();

    const [productName, setProductName] = useState("")
    const [productQuantity, setProductQuantity] = useState(1)
    const [productPrice, setProductPrice] = useState("0.00");
    const [comments, setComments] = useState("");

    const [isShowPurchaseContactBox, setIsShowPurchaseContactBox] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault()
    }
    
    const handlePriceChange = (e) => {

        const value = e.target.value.replace(/[^0-9]/g, '')
        
        if(value === ''){
            setProductPrice("0.00")
        }

        const pence = value.padStart(3, '0')

        const pounds = (parseInt(pence) / 100).toFixed(2)

        setProductPrice(pounds)
    }


    const handleAddToBasket = () => {
        const name = productName ? productName : "Custom Product"
        setProductArray((prev) => {
            return [...prev, {
                productName: name,
                comments: comments, 
                price: Number(productPrice),
                quantity: productQuantity
            }]
        })

        navigate('/')
    }

    const handleBuyNow = () => {
        setBINProductArray({
            productName: productName,
            comments: comments,
            price: Number(productPrice),
            quantity: productQuantity
        })
        setIsShowPurchaseContactBox(true)
    }
    

    useEffect(
        () => {
            console.log(productArray)
        },
        [productArray]
    )

    return(
        <>  
            <div className="custom-order-container tab-styling">
                <form onSubmit={handleSubmit}>  
                    <center>
                        <input type="text" className="custom-order-product-name" onChange={(e) => setProductName(e.target.value)} value={productName} placeholder="Custom Product..." />
                    </center>
                    <textarea className="custom-order-comments" onChange={(e) => setComments(e.target.value)} value={comments}/>

                   <div className="custom-order-payment-container">
                        <div className="custom-order-price-container" >
                            <input className="price-text" type="number"  onChange={handlePriceChange} value={productPrice} name="price" />
                            
                            
                        </div>
                        
                        <div className="custom-order-quantity-container">
                            <p className="custom-order-quantity">{productQuantity}</p>
                            
                            <svg className="plus-svg custom-order-pm" onClick={() => productQuantity < 9 && setProductQuantity((prev) => prev + 1)} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 144L48 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l144 0 0 144c0 17.7 14.3 32 32 32s32-14.3 32-32l0-144 144 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-144 0 0-144z"/></svg>
                            <svg className="minus-svg custom-order-pm" onClick={() => productQuantity > 1 && setProductQuantity((prev) => prev-1)} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M432 256c0 17.7-14.3 32-32 32L48 288c-17.7 0-32-14.3-32-32s14.3-32 32-32l352 0c17.7 0 32 14.3 32 32z"/></svg>
                        </div>

                        <div className="custom-order-purchase-buttons">
                            <button name="add-to-basket" className="add-to-basket" onClick={handleAddToBasket} >Add to basket</button>
                            <button name="buy-now" className="buy-now" onClick={handleBuyNow}>Buy now</button>
                        </div>
                    </div> 
                    
                </form>
                
            </div>
            {isShowPurchaseContactBox && <ContactBox hide={setIsShowPurchaseContactBox} isBuyNow="true" setProductArray={setBINProductArray} productArray={bINProductArray} />}
        </>
    )
}