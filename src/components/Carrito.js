import React from 'react';
import { useReducer, useEffect } from 'react'
import { TYPES } from './actions';
import ItemCarrito from './ItemCarrito';
import Producto from './Producto';
import { CarritoInitialState, CarritoReducer } from './reducer';
import axios from 'axios';


const Carrito = () => {

    const [state, dispatch] = useReducer(CarritoReducer, CarritoInitialState);




    const actualizarEstado = async () => {
        const productsoURL = "http://localhost:3333/products";
        const carritoURL = "http://localhost:3333/carrito";


        //1_peticiones  axios de tipo  HTTP GET (peticion de datos a una api)

        const listaProductos = await axios.get(productsoURL);
        const carrito = await axios.get(carritoURL);


        const nuevosProductos = listaProductos.data;
        const nuevoCarrito = carrito.data;







        //2_por payload le mando a la accion read_state , la respuesta de la peticion de axios

        dispatch({ type: TYPES.READ_STATE, payload: [nuevosProductos, nuevoCarrito] })

    };
    useEffect(() => {
        actualizarEstado();

    }, [])




    const { products, carrito } = state;

    const addToCart = (id) => {

        dispatch({ type: TYPES.ADD_TO_CART, payload: id });
    };
    const deleteFromCart = (id, eliminarTodos) => {
        if (eliminarTodos) {
            dispatch({ type: TYPES.REMOVE_ALL_ITEMS, payload: id });
        } else {
            dispatch({ type: TYPES.REMOVE_ITEM, payload: id })
        }
    };

    const CleanCart = () => {
        dispatch({ type: TYPES.CLEAR_CART })
    }


    return (
        <div className='container-fluid'>

            <h1 className='text-center m-3'>PRODUCTOS</h1>

            <div className='row m-md-2 '>
                {products.map((producto) => { return (<Producto key={producto.id} data={producto} addToCart={addToCart} />); })}
            </div>
            <hr class="my-4" />
            <div className='container'>
                <div className='row'>
                    <i className='bi bi-cart-fill p-2'> CARRITO</i>
                    <table className='table table-secondary'>
                        <thead>
                            <tr>
                                <th>Producto</th>
                                <th>Cantidad</th>
                                <th>Acciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            {carrito.map((item, index) => {
                                return <ItemCarrito key={index} data={item} deleteFromCart={deleteFromCart} />;
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
            <hr class="my-4" />

            <button onClick={() => CleanCart()} className='btn btn-danger'><i className='bi bi-trash3'></i></button>
           

        </div>
    )

};
export default Carrito;