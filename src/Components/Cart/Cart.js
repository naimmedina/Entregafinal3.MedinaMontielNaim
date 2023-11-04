import { useContext } from "react";
import { Link } from "react-router-dom";
import CartItem from '../CartItem/CartItem';
import { cartContext } from "../context/Cartcontext";

const Cart = () => {
    const { cart , clearCart, TotalQuantity, total} = useContext(cartContext)

    if(TotalQuantity === 0) {
        return (
            <div>
                <h1>No hay Items en el carrito</h1>
                <Link to= '/' className="Option">Productos</Link>
            </div>
        )
    }
    return (
        <div>
            { cart.map(p => <CartItem key={p.id}{...p}/>)}
            <h3>Total: ${total}</h3>
            <button onClick={()=>clearCart()} className="button is-info is-outlined">Limpiar Carrito</button>
            <Link to='/checkout' className="button is-primary is-outlined">Checkout</Link>
        </div>
    )
}

export default Cart;