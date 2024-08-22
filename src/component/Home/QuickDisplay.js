import React from 'react';
import { Link } from 'react-router-dom';

const QuickDisplay = ({ searchData }) => {
    if (searchData) {
        return (
            <>
                {searchData.map((item, index) => (
                    <div className="col-lg-4" key={item.id || index}>
                        <img className="bd-placeholder-img rounded-circle" width="140" height="140" src={item.image} alt="Placeholder" aria-label="Placeholder" style={{ objectFit: "cover" }} />
                        <h2 className="fw-normal">{item.name}</h2>
                        <p>Some representative placeholder content for the three columns of text below the carousel. This is the first column.</p>
                        <p><Link className="btn btn-secondary" to={`/${item.link}`}>View »</Link></p>
                    </div>

                ))}
            </>
        )
    }else {
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

export default QuickDisplay