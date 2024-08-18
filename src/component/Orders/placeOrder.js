import React, { useState } from "react";
import { useParams,Link } from "react-router-dom";
import './placeOrder.css'


const PlaceOrder = () =>{

    let parems = useParams();
    let [backLink] = useState(sessionStorage.getItem('link'))

    const initialValues = {
        id:Math.floor(Math.random()),
        item_name: parems.itemName,
        orderId: `SIO ${Math.floor(Math.random()*(209900-49100)+49100)}`,
        name:'',
        email:'',
        cost:Math.floor(Math.random()*(2000-400)+400),
        phone:'',
        address: "Home Noida"
    }

    const handleInputChange = (e) =>{
        const {name,value} = e.target;
        setValues({
            ...values,
            [name]:value
        })
    }

    const checkOut = () =>{
        console.log(values)
    }

    const [values,setValues] = useState(initialValues)

    return(

        <>
            <div className="container" id="placeoder">
                <hr/>
                <div className="panel panel-primary">
                    <div className="panel-heading">
                        <h3>Order for {parems.itemName} </h3>
                    </div>
                    <div className="panel-body">
                        <div className="row">
                            <div className="col-md-12 mt-2 form-group">
                                <label htmlFor="fname" className="control-label">Order ID</label>
                                <input className="form-control border-dark" id="orderId" name="orderId" value={values.orderId} readOnly/>
                            </div>
                            <div className="col-md-6 mt-2 form-group">
                                <label htmlFor="fname" className="control-label">Name</label>
                                <input className="form-control" id="fname" name="name" value={values.name} onChange={handleInputChange}/>
                            </div>
                            <div className="col-md-6 mt-2 form-group">
                                <label htmlFor="fname" className="control-label">Email</label>
                                <input className="form-control" id="email" name="email" value={values.email} onChange={handleInputChange}/>
                            </div>
                            <div className="col-md-6 mt-2 form-group">
                                <label htmlFor="fname" className="control-label">Phone</label>
                                <input className="form-control" id="phone" name="phone" value={values.phone} onChange={handleInputChange}/>
                            </div>
                            <div className="col-md-6 mt-2 form-group">
                                <label htmlFor="fname" className="control-label">Address</label>
                                <input className="form-control" id="address" name="address" value={values.address} onChange={handleInputChange}/>
                            </div>
                        </div>

                        <div className="row mt-2">
                            <div className="col-md-10">
                                <h2>Total Prics is Rs. {values.cost}</h2>
                            </div>
                            <div className="col-md-2 my-3">
                                <Link to={`/${backLink}`} className="btn btn-danger mx-4">Back</Link>
                                <button className="btn btn-success mx-1" onClick={checkOut}>Pay</button>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}



export default PlaceOrder