import React from "react";;
import { products } from "../../data/products";
import { useNavigate } from "react-router-dom";
import {usePounds} from "../../hooks/CashConverter";

export default function Items() {
    const navigate = useNavigate();
    return(
        <div className="tags-container tab-styling" >
            {products.map((el, index) => (
                <div onClick={() => navigate(`/add-order/${index}`)} key={el.name + index + 'box'} className="tag-item-container" >
                    <img src={el.image} />
                    <h3>{el.name}</h3>
                    <h4>{usePounds(el.price)}</h4>
                </div>
            ))}            
        </div>
    )
}