import React from 'react';

const RecommendationDisplay = (props) => {
    console.log(props)

    const listRecom = ({ recommendData }) => {
        if (recommendData) {
            return recommendData.map((item,index) => {
                return (
                    <div className="card" key={index} style={{ width: '18.5rem' }}>
                        <img src="" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">{item.title}</h5>
                            <p className="card-text">
                                <strong>Year:</strong> {item.year}<br />
                                <strong>Language:</strong> {item.language}<br />
                                <strong>Rating:</strong> {item.rated}<br />
                                <strong>Genres:</strong> {item.genres.join(', ')}
                            </p>
                            <a href="#0" className="btn btn-primary">Watch</a>
                        </div>
                    </div>
                )
            })
        }
    }
    return (
        <>
            {listRecom(props)}
        </>
    )
}

export default RecommendationDisplay