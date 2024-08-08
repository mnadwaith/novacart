import React, { useEffect, useState } from 'react';
import axios from 'axios';
import BannerDisplay from './BannerDisplay';

const url = "http://localhost:9110/banner"

const [bannerImg, setBannerImg] = useState()

const Banner = () => {

    useEffect(() => {
        axios.get(url)
            .then((res) => {
                setBannerImg(res.data)
            })

    }, [])

    return (
        <>
            <div id="carouselExampleInterval" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-inner">
                    <BannerDisplay bannerData={bannerImg} />
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
        </>
    )
}

export default Banner