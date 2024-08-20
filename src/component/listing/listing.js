import React, { useEffect, useState } from "react";
import ListingDisplay from "./listingDisplay";
import { useParams } from 'react-router-dom';
import axios from 'axios';
import './listing.css';
import CostFilter from '../filters/costFilter'



const categories = {
    electronics: "http://localhost:9110/electronics",
    fashion: "http://localhost:9110/fashion",
    home_kitchen: "http://localhost:9110/home_kitchen",
    sports_outdoor: "http://localhost:9110/sports_outdoor",
    toys_games: "http://localhost:9110/toys_games",
    beauty_personal_care: "http://localhost:9110/beauty_personal_care",
    items: "http://localhost:9110/items"
};

const Listing = () => {
    let { link } = useParams();
    const [items, setItems] = useState([]);
    const [sidebarOpen, setSidebarOpen] = useState(false);

    useEffect(() => {
        sessionStorage.setItem('link', link)
        const url = categories[link];
        if (url) {
            axios.get(url)
                .then((res) => {
                    setItems(res.data);
                })
                .catch((err) => {
                    console.error('Failed to fetch data', err);
                });
        }
    }, [link]);

    // Close the sidebar when the window is resized to a larger size
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth > 768) {
                setSidebarOpen(false);
            }
        };

        window.addEventListener('resize', handleResize);

        // Cleanup event listener on component unmount
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <>
            <div id="mainContainer">
                {window.innerWidth <= 768 && (
                    <button
                        className="open-sidebar-btn"
                        onClick={() => setSidebarOpen(!sidebarOpen)}
                    >
                        {sidebarOpen ? 'Close' : 'Open'} Filter
                    </button>
                )}
                <div id="filter" className={`sidebar ${sidebarOpen ? 'open' : ''}`}>
                    <CostFilter filter={categories[link]} itemPerCost={(data) => { setItems(data) }} />
                </div>
                <div id="listingContainer">
                    <ListingDisplay items={items} />
                </div>
            </div>
        </>
    );
}

export default Listing;
