import React ,{ useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";


const ListingDisplay = ({ items }) => {

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 2000); // 2000 milliseconds = 2 seconds
        return () => clearTimeout(timer);
    }, []);

    let navigate = useNavigate()
    const proceed = (itemName) => {
        navigate(`/placeOrder/${itemName}`)
    }

    if (items && items.length > 0) {
        return (
            <>
                {items.map((item, index) => (

                    <div class="card" style={{ width: "18rem", height: "fit-content" }} key={item.id || index}>
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
    } else {
        return (
            <>
                <div className="container text-center">
                {loading ? (
                <>
                    <img src="https://i.ibb.co/fp04DCk/loading.gif" alt="loading" border="0" />
                    <h2>Loading....</h2>
                </>
            ) : (
                <h2>No Data Found</h2>
            )}
                </div>
            </>
        )
    }
}

export default ListingDisplay;