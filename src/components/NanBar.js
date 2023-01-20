import React from 'react';
import { Link, } from 'react-router-dom';

const NanBar = () => {
    return (
        <nav className='navbar navbar-expand-lg  text-dark'>
            <div className='container-fluid'>
                <Link className='navbar-brand text-white ' to="/">M&S</Link>
                <button className='navbar-toggler' type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                    <span className='navbar-toggler-icon'></span>
                </button>
                <div className='collapse navbar-collapse' id="navbarText">
                    <ul className='navbar-nav me-auto mb-2 mb-lg-0'>
                        <li className='nav-item'>
                            <Link className='nav-link text-white' aria-current="page" to="/">Home</Link>
                        </li>
                        <li className='nav-item'>
                            <Link className='nav-link text-white ' to="/productosA">Productos</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>


    );



}

export default NanBar;

