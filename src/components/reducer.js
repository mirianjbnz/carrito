

import { TYPES } from "./actions";

export const CarritoInitialState = {
    products: [],
    carrito: [],
};




export function CarritoReducer(state, action) {
    switch (action.type) {
        case TYPES.READ_STATE: {
            return {
                ...state,
                products: action.payload[0],
                carrito: action.payload[1],
            }
        }

        case TYPES.ADD_TO_CART: {
            let nuevoItem = state.products.find((producto) => producto.id === action.payload);

            let itemEnCarrito = state.carrito.find((item) => item.id === action.payload);

            return itemEnCarrito
                ? {
                    ...state,
                    carrito: state.carrito.map((item) => item.id === nuevoItem.id ? {
                        ...item, cantidad: item.cantidad + 1,
                    } : item),
                }
                : {
                    ...state, carrito: [...state.carrito, nuevoItem]
                };
        }

        case TYPES.REMOVE_ITEM: {
            let itemAEliminar = state.carrito.find((item) => item.id === action.payload);

            return itemAEliminar.cantidad > 1 ? {

                ...state,
                carrito: state.carrito.map((item) => item.id === action.payload ? { ...item, cantidad: item.cantidad - 1 } : item),
            } : {
                ...state,
                carrito: state.carrito.filter((item) => item.id !== action.payload)
            };
        }

        case TYPES.REMOVE_ALL_ITEMS: {
            let itemAEliminar = state.carrito.find(
                (item) => item.id === action.payload
            );
            return {
                ...state,
                carrito: state.carrito.filter((item) => item.id !== action.payload)
            }

        }
        case TYPES.CLEAR_CART: {
            return {
                ...state,
                carrito: []
            };
        }
        default:
            return state;
    }


};

