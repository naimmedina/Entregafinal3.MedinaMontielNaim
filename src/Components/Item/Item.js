import { Link } from "react-router-dom"

const Item = ({id, name, img, price, stock}) => {
    return (
        <article className="card productos-columns">
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
                    Stock disponible: {stock}
                </p>
            </section>
            <footer className="card-content">
                <Link className="button is-outlined" to={`/Item/${id}`}>Ver detalle</Link>
            </footer>
        </article>
    )
}

export default Item

