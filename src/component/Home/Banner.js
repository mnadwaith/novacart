import React, { useEffect, useState } from 'react';
import axios from 'axios';
import BannerDisplay from './BannerDisplay';

const url = "https://novacartapi.onrender.com/banner"


const Banner = () => {
    const [bannerImg, setBannerImg] = useState()

    useEffect(() => {
        axios.get(url)
            .then((res) => {
                setBannerImg(res.data)
            })
    }, [])

    return (
        <>
            <div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <BannerDisplay bannerData={bannerImg} />
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </>
    )
}

export default Banner