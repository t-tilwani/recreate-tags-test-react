import React, {useContext} from "react";

import { CurrentOrderAddressContext } from "../Context/CurrentOrderAddressContext";

export function useContactChecker() {
    const {contact} = useContext(CurrentOrderAddressContext)

    return (contact.name && contact.name && contact.phoneNumber && contact.address && contact.postcode) ? true : false
}