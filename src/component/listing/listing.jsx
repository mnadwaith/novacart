import React, { useEffect, useState } from "react";
import ListingDisplay from "./listingDisplay";
import { useParams } from 'react-router-dom';
import axios from 'axios';
import './listing.css';
import CostFilter from '../filters/costFilter'



const categories = {
    electronics: "https://novacartapi.onrender.com/electronics",
    fashion: "https://novacartapi.onrender.com/fashion",
    home_kitchen: "https://novacartapi.onrender.com/home_kitchen",
    sports_outdoor: "https://novacartapi.onrender.com/sports_outdoor",
    toys_games: "https://novacartapi.onrender.com/toys_games",
    beauty_personal_care: "https://novacartapi.onrender.com/beauty_personal_care",
    items: "https://novacartapi.onrender.com/items"
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
