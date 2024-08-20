import React, { useEffect, useState } from "react";
import axios from 'axios';
import DisplayOrders from "./displayOrders";

const url = "http://localhost:9811/orders"

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