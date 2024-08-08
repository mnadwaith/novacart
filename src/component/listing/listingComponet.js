import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import axios from 'axios';
import ListingDisplay from "./listingDisplay";

const base_url = "http://localhost:9110"

const Listing = () => {
    const location = useLocation();
    const searchParam = new URLSearchParams(location.search);
    const type = searchParam.get('type') || '';

    const [showList, setShow] = useState([]);
    const [currentPage,setCurrentPage] = useState(1)
    const itemPerPage = 9;

    useEffect(() => {   
        axios.get(`${base_url}/allShows?type=${type}`)
            .then((res) => {
                setShow(res.data)
            })
    }, [type])

    const lastIndex = currentPage * itemPerPage;
    const firstIndex = lastIndex - itemPerPage;
    const currentItem = showList.slice(firstIndex,lastIndex);
    const totalPages = Math.ceil(showList.length/itemPerPage);


    return (
        <>
            <div className="container-fluid text-center my-2 ">
                <div className="btn-group me-2">
                    <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" data-bs-auto-close="true" aria-expanded="false">
                        Language
                    </button>
                    <ul className="dropdown-menu">
                        <li><a className="dropdown-item" href="#0">Menu item</a></li>
                        <li><a className="dropdown-item" href="#0">Menu item</a></li>
                        <li><a className="dropdown-item" href="#0">Menu item</a></li>
                    </ul>
                </div>
                <div className="btn-group">
                    <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" data-bs-auto-close="true" aria-expanded="false">
                        Genre
                    </button>
                    <ul className="dropdown-menu">
                        <li><a className="dropdown-item" href="#0">Menu item</a></li>
                        <li><a className="dropdown-item" href="#0">Menu item</a></li>
                        <li><a className="dropdown-item" href="#0">Menu item</a></li>
                    </ul>
                </div>
            </div>
            
            <div className="album py-5 bg-body-tertiary">
                <div className="container">
                    <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                        <ListingDisplay currentItem={currentItem} />
                    </div>
                </div>
            </div>

            <div className="pagination-controls text-center my-4">
                <button
                    className="btn btn-secondary me-2"
                    onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                    disabled={currentPage === 1}
                >
                    Previous
                </button>
                <span>{`Page ${currentPage} of ${totalPages}`}</span>
                <button
                    className="btn btn-secondary ms-2"
                    onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                    disabled={currentPage === totalPages}
                >
                    Next
                </button>
            </div>

        </>
    )
}


export default Listing;