import React from "react";
import { useNavigate } from "react-router-dom";


const ListingDisplay = ({ items }) => {

    let navigate = useNavigate()
    const proceed = (itemName) => {
        navigate(`/placeOrder/${itemName}`)
    }

    if (items && items.length>0) {
        return (
            <>
                {items.map((item, index) => (

                    <div class="card" style={{ width: "18rem", height:"fit-content" }} key={item.id || index}>
                        <img src="..." class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title">{item.name}</h5>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <button class="btn btn-primary" onClick={() => proceed(item.name)}>Buy</button>
                        </div>
                    </div>

                ))}
            </>
        )
    }else{
        return(
            <h2>No Items Found</h2>
        )
    }
}

export default ListingDisplay;