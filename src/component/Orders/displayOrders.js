import React from "react";

const DisplayOrders = ({ orderData }) => {
    if (orderData) {
        if (orderData.length > 0) {



            return (
                <div className="container-fluid">
                    <center><h3>Orders</h3></center>
                    <table className="table table-bordered">
                        <thead>
                            <tr>
                                <th>Order Id</th>
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
    }else {
        return (
            <>
                <div className="container text-center">
                    <img src="https://i.ibb.co/fp04DCk/loading.gif" alt="loading" border="0" />
                    <h2>Loading....</h2>
                </div>
            </>
        )
    }
}

export default DisplayOrders