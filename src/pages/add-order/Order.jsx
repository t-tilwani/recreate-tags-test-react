import React from "react"
import CreateOrder from "./CreateOrder"
import BackButton from "../../components/BackButton";
import { useParams, useNavigate } from "react-router-dom";
import { products } from "../../data/products";

export default function Order() {
    const {item} = useParams();

    return(
        <>  
            <BackButton />
            <CreateOrder itemIndex={item} orderType='order'/>
        </>
    )
}