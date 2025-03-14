import { useState, useContext, useEffect } from "react";
import Footer from "../../Footer";
import { PurchasedOrdersContext } from "../../Context/PurchasedOrdersContext";
import AllOrdersContainer from "../../components/all-orders/AllOrdersContainer";


export default function Orders() {
    const {orders, setOrders} = useContext(PurchasedOrdersContext);
    const orderCheck = Array.isArray(orders) ? [...orders] : [orders];
    const [filteredOrders, setFilteredOrders] = useState(orderCheck); 
    const [filterValue, setFilterValue] = useState("all")

    

    useEffect(() => {
        const filteredOrders = orderCheck.filter((order) => {
            if (filterValue === "complete") return order.complete === true;
            if (filterValue === "paid") return order.paid === true;
            return true; // for "all" filter
        });
        setFilteredOrders(filteredOrders)
    }, 
    [filterValue, orders])

    useEffect(() => {
        console.log(filteredOrders)
    },
    [filteredOrders])
    const handleExport = () => {
        /* N/A */
    }

    return(
        <>
            <div className="orders-main-container tab-styling">
                <svg onClick={handleExport} xmlns="http://www.w3.org/2000/svg" className="export-orders-btn" viewBox="0 0 576 512"><path d="M0 64C0 28.7 28.7 0 64 0L224 0l0 128c0 17.7 14.3 32 32 32l128 0 0 128-168 0c-13.3 0-24 10.7-24 24s10.7 24 24 24l168 0 0 112c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-28.7-64-64L0 64zM384 336l0-48 110.1 0-39-39c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l80 80c9.4 9.4 9.4 24.6 0 33.9l-80 80c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l39-39L384 336zm0-208l-128 0L256 0 384 128z"/></svg>
                
                <h1>Purchased Orders</h1>
                <select className="orders-filter" name="orders-filter" onChange={(e) => setFilterValue(e.target.value)}>
                    <option value="all">All</option>
                    <option value="complete">Complete</option>
                    <option value="paid">Paid</option>
                </select>
                <AllOrdersContainer orders={filteredOrders}/>
            </div>
            <Footer />
        </>
    )
}
