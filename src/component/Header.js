import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary rounded" aria-label="Thirteenth navbar example">
                <div className="container-fluid">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample11" aria-controls="navbarsExample11" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse d-lg-flex" id="navbarsExample11">
                        <Link id="title_name" className="navbar-brand col-lg-3 me-0" to="/">BingeBox</Link>
                        <ul className="navbar-nav col-lg-6 justify-content-lg-center">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/shows">All</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to={`/shows?type=movie`}>Movies</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to={`/shows?type=series`}>Series</Link>
                            </li>
                        </ul>
                        <div className="d-lg-flex col-lg-3 justify-content-lg-end">
                            <button className="btn btn-outline-primary me-2">Log In</button>
                            <button className="btn btn-primary">Sign Up</button>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default Header;
