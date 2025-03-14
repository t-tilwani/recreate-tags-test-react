import React, {createContext, useState} from "react";

export const PurchasedOrdersContext = createContext();

export function PurchasedOrdersProvider({children}) {

    const fakeOrder = [
        {products: {
            base: {
                name: "Crystal Clear BA Personalised Luggage Tag",
                image: "https://static.wixstatic.com/media/bfba88_4ca637a095f04eee86971947df89d649~mv2.jpg/v1/fill/w_336,h_420,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/bfba88_4ca637a095f04eee86971947df89d649~mv2.jpg",
                price: 12.5,
                link: "https://www.recreatehq.com/product-page/crystal-clear-ba-personalised-luggage-tag"
            },
            productName: "Crystal Clear BA Personalised Luggage Tag",
            customText: [
                "FSD"
            ],
            comments: "",
            price: 12.53,
            quantity: 1,
            productIndex: 2
        },
        "contactDetails": {
            name: "tarun tilwani",
            email: "taruntilwani@outlook.com",
            phoneNumber: "07865338440",
            address: "44 st leonards gdns",
            postcode: "tw59dh"
        },
        totalPrice: "6.26",
        complete: true,
        paid: false,
        index: 1
    },{products: {
        base: {
            name: "Crystal Clear BA Personalised Luggage Tag",
            image: "https://static.wixstatic.com/media/bfba88_4ca637a095f04eee86971947df89d649~mv2.jpg/v1/fill/w_336,h_420,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/bfba88_4ca637a095f04eee86971947df89d649~mv2.jpg",
            price: 12.5,
            link: "https://www.recreatehq.com/product-page/crystal-clear-ba-personalised-luggage-tag"
        },
        productName: "Crystal Clear BA Personalised Luggage Tag",
        customText: [
            "FSD"
        ],
        comments: "",
        price: 12.53,
        quantity: 1,
        productIndex: 2
    },
    "contactDetails": {
        name: "tarun tilwani",
        email: "taruntilwani@outlook.com",
        phoneNumber: "07865338440",
        address: "44 st leonards gdns",
        postcode: "tw59dh"
    },
    totalPrice: "6.26",
    complete: false,
    paid: true,
    index: 2
    },
    {products: {
            base: {
                name: "Crystal Clear BA Personalised Luggage Tag",
                image: "https://static.wixstatic.com/media/bfba88_4ca637a095f04eee86971947df89d649~mv2.jpg/v1/fill/w_336,h_420,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/bfba88_4ca637a095f04eee86971947df89d649~mv2.jpg",
                price: 12.5,
                link: "https://www.recreatehq.com/product-page/crystal-clear-ba-personalised-luggage-tag"
            },
            productName: "Crystal Clear BA Personalised Luggage Tag",
            customText: [
                "FSD"
            ],
            comments: "",
            price: 12.53,
            quantity: 1,
            productIndex: 2
        },
        "contactDetails": {
            name: "tarun tilwani",
            email: "taruntilwani@outlook.com",
            phoneNumber: "07865338440",
            address: "44 st leonards gdns",
            postcode: "tw59dh"
        },
        totalPrice: "6.26",
        complete: false,
        paid: false,
        index: 3
    },{products: {
        base: {
            name: "Crystal Clear BA Personalised Luggage Tag",
            image: "https://static.wixstatic.com/media/bfba88_4ca637a095f04eee86971947df89d649~mv2.jpg/v1/fill/w_336,h_420,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/bfba88_4ca637a095f04eee86971947df89d649~mv2.jpg",
            price: 12.5,
            link: "https://www.recreatehq.com/product-page/crystal-clear-ba-personalised-luggage-tag"
        },
        productName: "Crystal Clear BA Personalised Luggage Tag",
        customText: [
            "FSD"
        ],
        comments: "",
        price: 12.53,
        quantity: 1,
        productIndex: 2
    },
    "contactDetails": {
        name: "tarun tilwani",
        email: "taruntilwani@outlook.com",
        phoneNumber: "07865338440",
        address: "44 st leonards gdns",
        postcode: "tw59dh"
    },
    totalPrice: "6.26",
    complete: true,
    paid: true,
    index: 4
    },
    {products: {
            base: {
                name: "Crystal Clear BA Personalised Luggage Tag",
                image: "https://static.wixstatic.com/media/bfba88_4ca637a095f04eee86971947df89d649~mv2.jpg/v1/fill/w_336,h_420,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/bfba88_4ca637a095f04eee86971947df89d649~mv2.jpg",
                price: 12.5,
                link: "https://www.recreatehq.com/product-page/crystal-clear-ba-personalised-luggage-tag"
            },
            productName: "Crystal Clear BA Personalised Luggage Tag",
            customText: [
                "FSD"
            ],
            comments: "",
            price: 12.53,
            quantity: 1,
            productIndex: 2
        },
        "contactDetails": {
            name: "tarun tilwani",
            email: "taruntilwani@outlook.com",
            phoneNumber: "07865338440",
            address: "44 st leonards gdns",
            postcode: "tw59dh"
        },
        totalPrice: "6.26",
        complete: false,
        paid: false,
        index: 5
    },{products: {
        base: {
            name: "Crystal Clear BA Personalised Luggage Tag",
            image: "https://static.wixstatic.com/media/bfba88_4ca637a095f04eee86971947df89d649~mv2.jpg/v1/fill/w_336,h_420,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/bfba88_4ca637a095f04eee86971947df89d649~mv2.jpg",
            price: 12.5,
            link: "https://www.recreatehq.com/product-page/crystal-clear-ba-personalised-luggage-tag"
        },
        productName: "Crystal Clear BA Personalised Luggage Tag",
        customText: [
            "FSD"
        ],
        comments: "",
        price: 12.53,
        quantity: 1,
        productIndex: 2
    },
    "contactDetails": {
        name: "tarun tilwani",
        email: "taruntilwani@outlook.com",
        phoneNumber: "07865338440",
        address: "44 st leonards gdns",
        postcode: "tw59dh"
    },
    totalPrice: "6.26",
    complete: false,
    paid: false,
    index: "6"
    }
]

    const [orders, setOrders] = useState([...fakeOrder]);
    return(
        <PurchasedOrdersContext.Provider value={{
            orders, setOrders
        }}>
            {children}
        </PurchasedOrdersContext.Provider>
    )
}