import React from 'react'

const ItemCarrito = ({ data, deleteFromCart }) => {

    const { id, nombre, precio, cantidad } = data;


    return (
        <tr>
            <td scope="col">{nombre}</td>
            <td scope="col" >$ {precio} x {cantidad} = $ {precio * cantidad} </td>
            <td scope="col" >
                <button onClick={() => deleteFromCart(id)} className="btn btn-dark m-md-2" >Eliminar uno</button>
                <button onClick={() => deleteFromCart(id, true)} className="btn btn-dark m-md-2" >Eliminar todo</button>
            </td>
        </tr>
    );
}
export default ItemCarrito;