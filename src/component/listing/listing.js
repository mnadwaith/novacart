import React, { useEffect, useState } from "react";
import ListingDisplay from "./listingDisplay";
import { useParams } from 'react-router-dom';
import axios from 'axios';
import './listing.css'

const categories = {
    electronics: "http://localhost:9110/electronics",
    fasion: "http://localhost:9110/fasion",
    home_kitchen: "http://localhost:9110/home_kitchen",
    sports_outdoor: "http://localhost:9110/sports_outdoor",
    toys_games: "http://localhost:9110/toys_games",
    beauty_personal_care: "http://localhost:9110/beauty_personal_care",
};




const Listing = () => {
    let { link } = useParams();
    const [items, setItems] = useState();
    useEffect(() => {
        const url = categories[link]
        axios.get(url)
            .then((res) => {
                setItems(res.data)
            })
    }, [])

    return (
        <>
            <div id="mainContainer">
                <div id="filter">
                </div>
                <div id="listingContainer">
                    <ListingDisplay items={items} />
                </div>
            </div>

        </>

    )
}

export default Listing;