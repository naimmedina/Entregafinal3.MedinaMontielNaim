import Itemcount from "../ItemCount/Itemcount"

const Itemdetail = ({id, name, img, price, stock, category, description}) => {
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
            <Itemcount initial ={1} stock={stock} onAdd={(quantity) => console.log('cantidad agregada ',quantity)}/>
            </footer>
        </article>
    )
}

export default Itemdetail