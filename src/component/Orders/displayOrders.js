import React from "react";

const DisplayOrders = ({ orderData }) => {
    if (orderData && orderData.length > 0) {

        

        return (
            <div className="container">
                <center><h3>Orders</h3></center>
                <table className="table table-bordered">
                    <thead>
                        <tr>
                            <th>Order Id</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Item Name</th>
                            <th>Cost</th>
                            <th>Address</th>
                            <th>Phone No.</th>
                        </tr>
                    </thead>
                    <tbody>
                        {orderData.map((item, index) => (
                            <tr key={index}>
                                <td>{item.orderId}</td>
                                <td>{item.name}</td>
                                <td>{item.email}</td>
                                <td>{item.item_name}</td>
                                <td>{item.cost}</td>
                                <td>{item.address}</td>
                                <td>{item.phone}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        )

    } else {
        return (
            <h1>No Orders</h1>
        )
    }
}

export default DisplayOrders