import { useEffect, useContext, useState } from "react";
import { PurchasedOrdersContext } from "../../Context/PurchasedOrdersContext";
export default function Order({ orderIndex}) {
    const {orders, setOrders} = useContext(PurchasedOrdersContext)
    
    const order = orders[orderIndex];

    const contactDetails = order.contactDetails;
    const products = order.products;
    

    /* useEffect(() => {
        console.log(order)
    }, [orders])

    useEffect(() => {
        console.log(`order complete?`, order.complete)
        console.log(`order paid?`, order.paid)
      }, [orders, orderIndex]) */

    const handleCheck = (e, checkType) => {
        setOrders((prev) => {

            return [...prev.map((el, index) => {
                if(index === orderIndex){
                    return {...el, [checkType]: e.target.checked}
                }else{
                    return el
                }
            })]


            
        })
    }

    return(
        <div className="oo">
            <h3 className="oo-name">{contactDetails.name}</h3>
            <h4 className="oo-postcode">{contactDetails.postcode}</h4>
            
            <div className="oo-checkboxes">
                <div>
                    <p className="oo-complete-text">Complete</p>
                    <input className="oo-checkbox-complete" type="checkbox" checked={order.complete} onChange={(e) => handleCheck(e, "complete")}/>
                </div>
                <div>
                    <p className="oo-paid-text">Paid</p>
                    <input className="oo-checkbox-paid" type="checkbox" checked={order.paid} onChange={(e) => handleCheck(e, "paid")}/> 
                </div>
            </div>
            
            <h4 className="oo-price">£{Number(products.price).toFixed(2)}</h4>
        </div>
    )
};