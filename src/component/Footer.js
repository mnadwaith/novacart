import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <>
            <div className="container-fluid">
                <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
                    <p className="col-md-4 mb-0 text-body-secondary">© 2024 Nova Cart, Inc</p>

                    <a href="/" className="col-md-4 d-flex align-items-center justify-content-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none">
                        {/* <svg className="bi me-2" width="40" height="32"><use xlink:href="#bootstrap"></use></svg> */}
                    </a>

                    <ul className="nav col-md-4 justify-content-end">
                        <li className="nav-item"><Link className="nav-link px-2 text-body-secondary" aria-current="page" to="/">Home</Link></li>
                        <li className="nav-item"><a href="#0" className="nav-link px-2 text-body-secondary">FAQs</a></li>
                        <li className="nav-item"><a href="#0" className="nav-link px-2 text-body-secondary">About</a></li>
                    </ul>
                </footer>
            </div>
        </>
    )
}

export default Footer