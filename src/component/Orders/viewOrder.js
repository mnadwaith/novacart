import React, { useEffect, useState } from "react";
import axios from 'axios';
import DisplayOrders from "./displayOrders";

const url = "https://novacartapi.onrender.com/viewOrder"

const ViewOrder = () => {

    const [orders, setOrders] = useState();

    useEffect(() => {
        axios.get(url)
            .then((res) => {
                setOrders(res.data)
            })
    }, [orders])

    return (
        <>
            <DisplayOrders orderData={orders} />
        </>
    )
}

export default ViewOrder