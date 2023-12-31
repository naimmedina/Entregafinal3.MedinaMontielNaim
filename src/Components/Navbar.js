import { Link, NavLink } from "react-router-dom";
import CartWidget from './CartWidget/CartWidget';
import imglogo from '../img/toyota.logo.png'

const Navbar = () => {
  return (
    <nav className="navbar is-dark" role="navigation" aria-label="dropdown navigation">
      <div className="navbar-brand">
        <Link to='/'>
          <img src={imglogo}  alt="" width="80" />
        </Link>
      </div>

      <div className="navbar-item has-dropdown is-hoverable navbar-end">
        <NavLink className="navbar-link">
          Categorias
        </NavLink>
        <div className="navbar-dropdown">
          <NavLink to={`/category/Deportivo`} className='ActiveOption'>Deportivos</NavLink>
          <hr />
          <NavLink to={`/category/Todoterreno`} className='ActiveOption'>Todoterreno</NavLink>
          <hr />
          <NavLink to={`/category/Casual`} className='ActiveOption'>Casual</NavLink>
          <hr className="navbar-divider" />
        </div>
      </div>
      <CartWidget />
    </nav>
  )
}

export default Navbar;
