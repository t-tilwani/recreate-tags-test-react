import React, {createContext, useState} from "react";

export const CurrentOrderItemsContext = createContext();

export function CurrentOrderItemsProvider({children}) {

    const [productArray, setProductArray] = useState([])
    

    return(
        <CurrentOrderItemsContext.Provider value={{
            productArray, setProductArray
        }}>
            {children}
        </CurrentOrderItemsContext.Provider>
    )
};



