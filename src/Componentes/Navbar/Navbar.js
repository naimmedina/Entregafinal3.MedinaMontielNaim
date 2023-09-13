import CartWidget from "../CartWidget/CartWidget"

const Navbar = () => {
    return (
    <nav className="navbar is-light" role="navigation" aria-label="dropdown navigation">
        <div className="navbar-brand">
    <a href="">
      <img src="https://1000logos.net/wp-content/uploads/2022/10/GameStop-logo.png" alt="" width="120"/>
    </a>
        </div>

        <div className="navbar-item has-dropdown is-hoverable navbar-end">
         <a className="navbar-link">
            Categorias
         </a>
        <div className="navbar-dropdown">
         <a className="navbar-item">
            Equipos
         </a>
         <a className="navbar-item">
            Componentes
         </a>
         <a className="navbar-item">
            Perifericos
         </a>
        <hr className="navbar-divider" />
        </div>
        </div>
        <CartWidget />
    </nav>
    
)
}

export default Navbar

