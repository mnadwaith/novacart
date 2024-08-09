import React from 'react';

const BannerDisplay = ({ bannerData }) => {

    if (bannerData) {
        return (
            <>
                {bannerData.map((item, index) => (
                    <div key={item.id || index} className={`carousel-item ${index === 0 ? 'active' : ''}`} data-bs-interval="2000">
                        <img src={item.image} className="d-block w-100" alt="offer banner" />
                    </div>
                ))}
            </>
        )
    }
}

export default BannerDisplay