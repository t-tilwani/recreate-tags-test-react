
import { CurrentOrderAddressProvider } from "../Context/CurrentOrderAddressContext";
import { CurrentOrderItemsProvider } from "../Context/CurrentOrderItemsContext";
import { PurchasedOrdersProvider } from "../Context/PurchasedOrdersContext";

export default function ContextProviderWrap({children}) {
    return(
        <>
            <PurchasedOrdersProvider>
                <CurrentOrderItemsProvider>
                    <CurrentOrderAddressProvider>
                        {children}
                    </CurrentOrderAddressProvider>
                </CurrentOrderItemsProvider>
            </PurchasedOrdersProvider>
        </>
    )
}