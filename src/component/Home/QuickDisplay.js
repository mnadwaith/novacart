import React from 'react';

const QuickDisplay = ({ searchData }) => {
    if (searchData) {
        return (
            <>
                {searchData.map((item, index) => (
                    <div className="col-lg-4" key={item.id || index}>
                        <svg className="bd-placeholder-img rounded-circle" width="140" height="140" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="var(--bs-secondary-color)"></rect></svg>
                        <h2 className="fw-normal">{item.name}</h2>
                        <p>Some representative placeholder content for the three columns of text below the carousel. This is the first column.</p>
                        <p><a className="btn btn-secondary" href="#0">View »</a></p>
                    </div>

                ))}
            </>
        )
    }
}

export default QuickDisplay