import React, {useState, useContext, useEffect} from "react";
import { useNavigate } from "react-router-dom";
import { CurrentOrderAddressContext } from "../../Context/CurrentOrderAddressContext";
import { PurchasedOrdersContext } from "../../Context/PurchasedOrdersContext";

export default function ContactBox({hide, isBuyNow, setProductArray , productArray, totalPrice}) {

    const {
            contact, setContact
    } = useContext(CurrentOrderAddressContext);
    
    const {
        orders, setOrders
    } = useContext(PurchasedOrdersContext);

    const navigate = useNavigate()

    const [name, setName] = useState(contact ? contact.name : '');
    const [email, setEmail] = useState(contact ? contact.email : '');
    const [phoneNumber, setPhoneNumber] = useState(contact ? contact.phoneNumber : '');
    const [address, setAddress] = useState(contact ? contact.address : '');
    const [postcode, setPostcode] = useState(contact ? contact.postcode : '')
    const [isPopulated, setIsPopulated] = useState(false)


    const handleSave = () => {
        setContact({
            name: name,
            email: email,
            phoneNumber: phoneNumber,
            address: address,
            postcode: postcode
        })
        hide(false)
    }

    const handleBuyNow = () => {

        setOrders((prev) => ( 
            [...prev,{
                products: {...productArray},
                contactDetails: {
                    name: name,
                    email: email,
                    phoneNumber: phoneNumber,
                    address: address,
                    postcode: postcode
                },
                totalPrice: totalPrice,
                complete: false,
                paid: false
            }]
        ))

        navigate('/orders')
    }

    

    useEffect(() => {
        console.log(orders)
    }, [orders])

    const handleClose = () => {
        contact && setName(contact.name);
        contact && setEmail(contact.email);
        contact && setPhoneNumber(contact.phoneNumber);
        contact && setAddress(contact.address);
        contact && setPostcode(contact.postcode);
        hide(false)
    }

    const handleEnter = (e) => {
        if(e.key === 'Enter' | e.key === 'Return'){
            e.preventDefault()
            const inputs = document.querySelectorAll('.contact-inputs');
            const currentIndex = Array.from(inputs).indexOf(e.target);
            const nextIndex = (currentIndex + 1);
            

            if(name && email && phoneNumber && address && postcode){
                setIsPopulated(true)
                inputs[currentIndex].blur()
            }else if(nextIndex < inputs.length){
                setIsPopulated(false)
                inputs[nextIndex].focus();
            }else{
                setIsPopulated(false)
                inputs[currentIndex].blur()
            }
            
        }
    }

    return(
        <>
            
            <div className="transluscent-background"></div>
            <div className="contact-box-container" >
                <h3>Contact Details</h3>
                <form onSubmit={(e) => e.preventDefault()}>
                    <button type="button" className="contact-box-close" onClick={handleClose}>Close</button>

                    <label htmlFor="name">Full name</label>
                    <input enterKeyHint={isPopulated ? "done" : "next"} className="inputs contact-inputs" type="name" onChange={(e) => setName(e.target.value)} value={name} name="name" onKeyPress={handleEnter} />
                    
                    <label htmlFor="email">Email</label>
                    <input enterKeyHint={isPopulated ? "done" : "next"} className="inputs contact-inputs" type="email" onChange={(e) => setEmail(e.target.value)} value={email} name="email" onKeyPress={handleEnter} />

                    <label htmlFor="phone-number">Phone number</label>
                    <input enterKeyHint={isPopulated ? "done" : "next"} className="inputs contact-inputs" type="tel"  onChange={(e) => setPhoneNumber(e.target.value)} value={phoneNumber} name="phone-number" onKeyPress={handleEnter} />

                    <label htmlFor="address">Delivery Address</label>
                    <input enterKeyHint={isPopulated ? "done" : "next"} className="inputs contact-inputs" type="text" onChange={(e) => setAddress(e.target.value)} value={address} name="address" onKeyPress={handleEnter} />

                    <label htmlFor="postcode">Delivery postcode</label>
                    <input autoCapitalize="characters" enterKeyHint="done" className="inputs contact-inputs" type="text" onChange={(e) => setPostcode(e.target.value)} value={postcode} name="postcode" onKeyPress={handleEnter} />
                    
                    <button type="button" className="contact-box-save" onClick={isBuyNow ? handleBuyNow : handleSave}>{isBuyNow ? "Buy now" : "Save"}</button>
                </form>
            </div>
        </>
    )
}