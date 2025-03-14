import React, {useState, useRef, useContext, useEffect} from "react";
import { useNavigate } from "react-router-dom";

import { products } from "../../data/products";
import {usePounds} from "../../hooks/CashConverter";

import CustomTextInputs from "../../components/custom-text-inputs/CustomTextInputs";
import ContactBox from "../../components/contact-box/ContactBox";

import { CurrentOrderItemsContext } from "../../Context/CurrentOrderItemsContext";


export default function CreateOrder({itemIndex}){

    const {productArray, setProductArray} = useContext(CurrentOrderItemsContext);
    const [bINProductArray, setBINProductArray] = useState({})


    const navigate = useNavigate()

    const product = products[itemIndex];

    const saveEditInputRef = useRef(null);
    
    const [productQuantity, setProductQuantity] = useState(1)
    const [productPrice, setProductPrice] = useState(products[itemIndex].price );
    const [customTextArray, setCustomTextArray] = useState([]);
    const [comments, setComments] = useState("");

    const [editProductPrice, setEditProductPrice] = useState(false);
    const [isShowPurchaseContactBox, setIsShowPurchaseContactBox] = useState(false);

    const [isComments, setIsComments] = useState(false)



    const handleSubmit = (e) => {
        e.preventDefault()
    }

    const handlePriceInputEnter = (e) => {
        if (e.key === 'Enter'){
            setEditProductPrice(!editProductPrice)
        }
    }
    
    const handlePriceChange = (e) => {
        if(/^\d*\.?\d{0,2}$/.test(e.target.value)){
            setProductPrice(e.target.value)
        }
    }

    const handleClickSaveEdit = () => {
        setEditProductPrice(!editProductPrice);
        if(editProductPrice){
            saveEditInputRef.current.focus();
        }
    }

    const handleAddToBasket = () => {
        setProductArray((prev) => {
            const i = Number(itemIndex);
            const exists = prev.find((obj) => obj.productIndex === i);
            
            if(exists && exists.price === productPrice){
                
                return prev.map((item) => {
                    if(item.productIndex === i){
                        if(item.customText !== customTextArray){
                            return {...item, customText: customTextArray}
                        }
                        return {...item, quantity: item.quantity + productQuantity}
                    }
                    return item
                })
            }else{
                return [...prev, {
                    base: product,
                    productName: product.name,
                    customText: customTextArray,
                    comments: comments, 
                    price: Number(productPrice),
                    quantity: productQuantity,
                    productIndex: i
                }]
            }
            
        })
        navigate('/')
    }

    const handleBuyNow = () => {
        setBINProductArray({
            base: product,
            productName: product.name,
            customText: customTextArray,
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
            <div className='co-container tab-styling'>
                
                <h1 className="order-header" >{product.name}</h1>
                
                <form onSubmit={handleSubmit} >

                    <CustomTextInputs addComment={setIsComments} isComment={isComments} comments={comments} customTextArray={customTextArray} setCustomTextArray={setCustomTextArray} />

                    {isComments && <textarea autoFocus name="co-comment-box" className="co-comment-box" placeholder="Comments" value={comments} onChange={(e) => setComments(e.target.value)} />}
                    
                    
                    <div className="co-payment-container">
                        <div className="co-price-container" >
                            {editProductPrice ? <input className="price-text" autoFocus type="number" ref={saveEditInputRef} onKeyDown={handlePriceInputEnter} onChange={handlePriceChange} value={productPrice} name="price" /> : <p className="price-text" >{usePounds(productPrice)}</p>}
                            <button type="button" onClick={handleClickSaveEdit}>{editProductPrice ? 'Save' : 'Edit'}</button>
                        </div>
                        
                        <div className="co-quantity-container">
                            <p className="co-quantity">{productQuantity}</p>
                            
                            <svg className="plus-svg" onClick={() => productQuantity < 9 && setProductQuantity((prev) => prev + 1)} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 144L48 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l144 0 0 144c0 17.7 14.3 32 32 32s32-14.3 32-32l0-144 144 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-144 0 0-144z"/></svg>
                            <svg className="minus-svg" onClick={() => productQuantity > 1 && setProductQuantity((prev) => prev-1)} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M432 256c0 17.7-14.3 32-32 32L48 288c-17.7 0-32-14.3-32-32s14.3-32 32-32l352 0c17.7 0 32 14.3 32 32z"/></svg>
                        </div>
                        <div className="co-purchase-buttons">
                            <button name="add-to-basket" className="add-to-basket" onClick={handleAddToBasket} >Add to basket</button>
                            <button name="buy-now" className="buy-now" onClick={handleBuyNow}>Buy now</button>
                        </div>
                    </div>
                </form>
            </div>
            
            {/* {isShowContactBox && <ContactBox hide={setIsShowContactBox} isBuyNow="false"/>} */}
            {isShowPurchaseContactBox && <ContactBox hide={setIsShowPurchaseContactBox} isBuyNow="true" setProductArray={setBINProductArray} productArray={bINProductArray} />}
        </>
    )
}

//