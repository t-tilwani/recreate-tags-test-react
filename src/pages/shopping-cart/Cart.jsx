import React, {useState, useContext, useEffect} from "react";
import Product from "../../components/shopping-cart/Product";

import { CurrentOrderAddressContext } from "../../Context/CurrentOrderAddressContext";
import { CurrentOrderItemsContext } from "../../Context/CurrentOrderItemsContext";

import ContactBox from "../../components/contact-box/ContactBox";

export default function Cart() {
    const {contact, setContact} = useContext(CurrentOrderAddressContext)
    const {productArray, setProductArray} = useContext(CurrentOrderItemsContext)

    const [discountCodeInput, setDiscountCodeInput] = useState('');

    const [isShipping, setIsShipping] = useState(false)
    const [isDiscountValid, setIsDiscountValid] = useState(false);
    

    const [discountCodeAmount, setDiscountCodeAmount] = useState(0)
    const [currItemPriceTotal, setCurrItemPriceTotal] = useState(0)
    

    const [prevSubtotalPrice, setPrevSubtotalPrice] = useState(0)
    const [subtotalPrice, setSubtotalPrice] = useState(0)
    const [discountTotal, setDiscountTotal] = useState(0)
    const [codeDiscount, setCodeDiscount] = useState(0);
    const [totalPrice, setTotalPrice] = useState(0)

    const [isShowPurchaseContactBox, setIsShowPurchaseContactBox] = useState(false)


    const validDiscountCodes = {
        RECREATE5: 0.05,
        RECREATE10: 0.1,
        RECREATE15: 0.15,
        RECREATE20: 0.2,
        RECREATE25: 0.25,
        RECREATE30: 0.3,
        RECREATE40: 0.4,
        RECREATE50: 0.5,
        
    }


    useEffect(() => {
        let subtotal = 0;
        let prevSubtotal = 0;
        const shipping = isShipping ? 3.5 : 0;
        
        // sort out custom order. price shows undefined in the forEach? figure it out
        productArray.forEach((el) => {
            subtotal += (el.price * el.quantity);
            if(el.base){
                
                if(el.base.price > el.price){
                    prevSubtotal += (el.base.price * el.quantity);
                }else if(el.base.price < el.price){
                    prevSubtotal += (el.price * el.quantity)
                }
            }else if(!el.base){
                prevSubtotal += (el.price * el.quantity);
            }
        })
        const discount = subtotal * discountCodeAmount;
        const totalDiscount = (prevSubtotal - subtotal) + discount;
        const total = subtotal - (subtotal * discountCodeAmount);
        setSubtotalPrice(Number(subtotal).toFixed(2));
        setPrevSubtotalPrice(Number(prevSubtotal).toFixed(2));
        setDiscountTotal(Number(totalDiscount).toFixed(2));
        setCodeDiscount(Number(discount).toFixed(2))
        setTotalPrice(Number(total + shipping).toFixed(2));
    }, [productArray, discountCodeAmount, isShipping])
    
    useEffect(() => {
        /* console.log(`subtotal:${subtotalPrice}   previous subtotal:${prevSubtotalPrice}   discount total:${discountTotal}   total price: ${totalPrice}`) */ 
    }, [subtotalPrice, prevSubtotalPrice, discountTotal, totalPrice])

    const handleDiscountCode = (e) => {
        setDiscountCodeInput(e.target.value)
        const discountCode = validDiscountCodes[(e.target.value).toUpperCase()];
        if(discountCode){
            setIsDiscountValid(true);
            setDiscountCodeAmount(discountCode)
        }else{
            setIsDiscountValid(false);
            setDiscountCodeAmount(0)
        }
    }

    
    const handlePurchase = () => {
        if(productArray){
            setIsShowPurchaseContactBox(true)
        }else{
            alert("Cart is empty")
        }
    }

    return(
        <>
            <div className="cart-container tab-styling">

                <center><h1 className="cart-header" >Shopping Cart</h1></center>
                <div className="cart-products-container">
                    {productArray.map((el, index) => (
                        <Product key={index} product={el} productIndex={index} setProductArray={setProductArray} productArray={productArray}/>
                    ))}
                </div>


                
                <div className="cart-info-bar">
                    <input autoCapitalize="characters" className={`discount-code-input ${isDiscountValid ? 'discount-true' : 'discount-false'}`} id="discount-code-input" name="discount-code-input" type="text" onChange={handleDiscountCode} value={discountCodeInput}/>
                    <div className="cart-price">
                        <p className="cart-subtotal">Subtotal: {(prevSubtotalPrice !== subtotalPrice) && <del>£{prevSubtotalPrice}</del>} <span className="cart-price-number">£{subtotalPrice}</span></p>
                        {isDiscountValid && <p className="cart-total-discount" style={{color: 'var(--tertiary)'}}>Discount: <strong style={{color: 'var(--tertiary)'}}>-</strong>£{codeDiscount}</p>}
                        <p className="cart-total"><strong>Total</strong>: <span className="cart-price-number">£{totalPrice}</span></p>
                    </div>
                </div>
                
                <button className="cart-purchase" onClick={handlePurchase}>Purchase</button>
                
            </div>
            {isShowPurchaseContactBox && <ContactBox hide={setIsShowPurchaseContactBox} isBuyNow="true" productArray={productArray} setProductArray={setProductArray} totalPrice={totalPrice} />}
        </>
    )
}