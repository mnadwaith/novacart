import React from 'react';

const BannerDisplay = (bannerData) => {

    if (bannerData) {
        return bannerData.map((item, index) => {

            return (
                <>
                    <div class="carousel-inner" key={index}>
                        <div class="carousel-item active" data-bs-interval="2000">
                            <img src={item.image} class="d-block w-100" alt="offer banner" />
                        </div>
                    </div>
                </>
            )
        })
    }
}

export default BannerDisplay