import React, { useContext } from 'react';
import { cartContext } from '../context/Cartcontext';

const CartItem = ({ id, name, price, quantity, img }) => {
    const { removeItem } = useContext(cartContext);

    return (
        <div className='container'>
            <picture>
                <img src={img} alt={name} className="imgContainer" />
            </picture>
            <div className='productsCategorie'>
                <h2>{name}</h2>
                <p>Cantidad: {quantity}</p>
                <p>Subtotal: ${quantity * price}</p>
                <button className="button  is-danger is-outlined" onClick={() => removeItem(id)}>Eliminar</button>
            </div>
        </div>
    );
};

export default CartItem;

