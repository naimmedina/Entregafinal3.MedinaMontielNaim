const ItemListContainer = ({ greeting }) => {
    return (
        <section className="hero is-link">
             <div className="container has-text-centered hero-body">
            <h1 className="title">{greeting}</h1>
        </div>
        </section>
    )
}

export default ItemListContainer