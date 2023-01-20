import React from 'react';



const Producto = (props) => {
    const { data, addToCart } = props;

    return (

        <div className=' card col-m-6 col-md-4 g-3' >

            <img src={data.src} className="img-fluid"  alt="..." />

            <div class="card-body">
                <h4>{data.nombre}</h4>
                <h5>$ {data.precio}</h5>
                <button onClick={() => addToCart(data.id)} className='btn btn-danger  -sm'>AGREGAR</button>
            </div>
        </div>







    );
};

export default Producto;