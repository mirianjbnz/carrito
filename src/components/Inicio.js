import React from 'react';
import { Link } from 'react-router-dom';
import Carrousel from './Carrousel';

const Inicio = () => {
    return (
        <div>
            <section className='py-5 text-center container rounded '>
                <div className='row py-lg-5'>
                    <div className='col-lg-6 col-md-8 mx-auto'>
                        <h1 className='fw-light'>M&S Computación</h1>
                        <p className='lead text-muted'>Encontra  los mejores productos de computacion.</p>
                        <p>
                            <Link to="/productosA" className='btn btn-danger my-2'>Productos</Link>


                        </p>
                    </div>
                </div>
            </section>
            <Carrousel />
            <section className='py-5 text-center container'>
                <div className='row py-lg-5'>
                    <h2 className='fw-light'>Contactanos</h2>
                    <i className='bi bi-whatsapp'> 12225324445</i>
                    <i className='bi bi-envelope-fill'> M&S@gmal.com</i>
                    <i class="bi bi-geo-alt-fill">Buenos aires, Argentina</i>
                </div>
                <div className='container'>
                    <div className='row'>
                        <div className='col'>
                        </div>
                        <div className='col'>
                            <Link>
                                <i className='bi bi-facebook'></i>
                            </Link>
                        </div>
                        <div className='col'>
                            <Link>
                                <i className='bi bi-instagram'></i>
                            </Link>
                        </div>
                        <div className='col'>
                            <Link>
                                <i className='bi bi-twitter'></i>
                            </Link>
                        </div>
                        <div className='col'>
                        </div>
                    </div>
                </div>
                <hr />


            </section>
        </div>

    );
}
export default Inicio;
