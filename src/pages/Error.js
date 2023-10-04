import { Link } from "react-router-dom";

function Error (){
    return(

        <div>
            <section className="hero is-danger">
                <div className="container has-text-centered hero-body">
                <h1 className="title">Error 404</h1>
                <p className="subtitle">Pagina no encontrada</p>
                </div>
            </section>
            <Link to='/'>Volver</Link>
        </div>
    )
};

export default Error;