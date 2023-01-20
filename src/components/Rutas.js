import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Inicio from './Inicio';
import NanBar from './NanBar';
import Error from './Error';
import Carrito from './Carrito';
import Footer from './Footer';



const Rutas = () => {
    return (
        <Router>
            <NanBar />
            <Routes>
                <Route path="/" element={<Inicio />} />
                <Route path="/ProductosA" element={<Carrito />} />
                <Route path="/*" element={<Error />} />
            </Routes>
            <Footer />
        </Router>
    );

}

export default Rutas;
