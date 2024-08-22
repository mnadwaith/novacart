import React from 'react';

const BannerDisplay = ({ bannerData }) => {

    if (bannerData) {
        return (
            <>
                {bannerData.map((item, index) => (
                    <div key={item.id || index} className={`carousel-item ${index === 0 ? 'active' : ''}`} data-bs-interval="1500">
                        <img src={item.image} className="d-block w-100" alt="offer banner" />
                    </div>
                ))}
            </>
        )
    } else {
        return (
            <>
                <div className="container text-center">
                    <img src="https://i.ibb.co/fp04DCk/loading.gif" alt="loading" border="0" />
                    <h2>Loading....</h2>
                </div>
            </>
        )
    }
}

export default BannerDisplay