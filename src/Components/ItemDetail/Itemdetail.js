import Itemcount from "../ItemCount/Itemcount";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { cartContext } from "../context/Cartcontext";

const Itemdetail = ({id, name, img, price, stock, category, description}) => {
    const [quantityAdded, setQuantityAdded] = useState(0);

    const { addItem } = useContext (cartContext);

    const handleOnAdd = (quantity) => {
        setQuantityAdded (quantity)

        const item = {
            id, name, price, img
        }

        addItem(item, quantity)
    };

    return (
        <article className="card productos-details">
            <picture>
                <img src={img} alt={name} className="card-image"/>
            </picture>
            <header>
                <h2 className="title">
                    {name}
                </h2>
            </header>
            <hr/>
            <section className="card-content">
                <p className="subtitle">
                    precio: ${price}
                </p>
                <p className="subtitle">
                    Descripcion: {description}
                </p>
                <p className="subtitle">
                    Categoria: {category}
                </p>
            </section>
            <footer className="card-content">
            {
                quantityAdded > 0 ? (
                   <Link className="button is-info is-outlined" to='/cart' >Terminar Compra</Link>
                ) : (
                    <Itemcount initial ={1} stock={stock} onAdd={handleOnAdd}/>
                )
            }
            <Link to='/'className="button is-info is-outlined">Volver</Link>
            </footer>
        </article>
    )
};

export default Itemdetail

//<Itemcount initial ={1} stock={stock} onAdd={(quantity) => console.log('cantidad agregada ',quantity)}/>