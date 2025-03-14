
import Order from "./Order"

export default function AllOrdersContainer({orders}) {

    return(
        <div className="all-orders-container">
            {orders && orders.map((el, index) => (
                <Order key={index} order={el} orderIndex={index} />
            ))}
        </div>
    )
}