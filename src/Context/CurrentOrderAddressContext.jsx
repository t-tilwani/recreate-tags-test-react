import React, { createContext, useState} from "react";

export const CurrentOrderAddressContext = createContext();

export function CurrentOrderAddressProvider({children}){
    
    const [contact, setContact] = useState();

    return(
        <CurrentOrderAddressContext.Provider value={{
            contact, setContact
        }} >
            {children}
        </CurrentOrderAddressContext.Provider>
    )
}
