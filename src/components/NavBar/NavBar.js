import "./NavBar.css";
import brand from "../../assets/img/brand.png";
import { CartWidget } from "../CartWidget/CartWidget";

export const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="navbar__logo">
        <a href="">
          <img src={brand} alt="Xperiment Brand"></img>
        </a>
      </div>
      <ul className="navbar__links">
        <li className="navbar__link">
          <a href="" className="navbar__link--active">
            Inicio
          </a>
        </li>
        <li className="navbar__link">
          <a href="" className="navbar__link--disabled">
            Celulares
          </a>
        </li>
        <li className="navbar__link">
          <a href="" className="navbar__link--disabled">
            Notebooks
          </a>
        </li>
        <li className="navbar__link">
          <a href="" className="navbar__link--disabled">
            Tablets
          </a>
        </li>
      </ul>
      <CartWidget />
    </nav>
  );
};
