import { useState } from "react";


const Itemcount = ({stock, initial, onAdd}) => {
    const [quantity, setQuantity] = useState(initial)

    const increment = () => {
        if (quantity < stock) {
            setQuantity(quantity+1)
        }
    }

    const decrement = () => {
        if (quantity > 1){
            setQuantity(quantity -1)
        }
    }

    return (
        <div>
            <div className="contador">
                <button onClick={decrement} className="button is-danger is-outlined contador">-</button>
                    <h4 className="contador-number">{quantity}</h4>
                <button onClick={increment} className="button is-primary is-outlined contador">+</button>
            </div>
            <div>
                <button onClick={() => onAdd(quantity)} disabled ={!stock} className="button is-info is-outlined">
                    Agregar al carrito
                </button>
            </div>
        </div>
    )
}

export default Itemcount