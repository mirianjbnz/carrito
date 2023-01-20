import React from 'react';

const Carrousel = () => {
    return (
        <div>
            <div id="carouselExampleIndicators" className='carousel slide' data-bs-ride="true">
                <div className='carousel-indicators'>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className='active' aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className='carousel-inner'>
                    <div className='carousel-item active'>
                        <img src="https://cdn.pixabay.com/photo/2020/12/03/10/33/headphones-5800167_960_720.jpg" className='d-block w-100' alt="..." />
                        <div class="carousel-caption d-none d-md-block">
                            <h3>Compra lo mejor en tecnologia</h3>
                            <p>Some representative placeholder content for the first slide.</p>
                        </div>
                    </div>
                    <div className='carousel-item'>
                        <img src="https://cdn.pixabay.com/photo/2021/03/13/15/57/controller-6092067_960_720.jpg" className='d-block w-100' alt="..." />
                        <div class="carousel-caption d-none d-md-block">
                            <h3>Llevá tus juegos al siguiente nivel!</h3>
                           
                        </div>
                    </div>
                    <div className='carousel-item'>
                        <img src="https://cdn.pixabay.com/photo/2020/07/28/21/21/laptop-5446361_960_720.jpg" className='d-block w-100' alt="..." />
                        <div class="carousel-caption d-none d-md-block">
                            <h3>Elegí tu notebook ideal para trabajar o jugar</h3>
                            
                        </div>

                    </div>
                </div>
                <button className='carousel-control-prev' type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                    <span className='carousel-control-prev-icon' aria-hidden="true"></span>
                    <span className='visually-hidden'>Previous</span>
                </button>
                <button className='carousel-control-next' type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                    <span className='carousel-control-next-icon' aria-hidden="true"></span>
                    <span className='visually-hidden'>Next</span>
                </button>
            </div>
        </div>
    );
}

export default Carrousel;
