import "./CartWidget.css";
import logoCart from "../../assets/img/cart.png";

export const CartWidget = () => {
  return (
    <div className="navbar__cart">
      <a href="">
        <div className="navbar__cart-container">
          <img src={logoCart} alt="Carrito de compras"></img>
          <div className="navbar__cart-quantity">0</div>
        </div>
      </a>
    </div>
  );
};
