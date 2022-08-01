import "./Item.css";

export const Item = ({ product }) => {
  return (
    <div className="item">
      <div className="item__title-container">
        <h3 className="item__title">{product.name}</h3>
      </div>
      <div className="item__image-container">
        <img src={product.img} alt={product.name} />
      </div>
      <div className="item__price">
        <span>${product.price}</span>
      </div>
      <div className="item__details-button-container">
        <div className="item__details-button">
          <a href="">Ver Detalle</a>
        </div>
      </div>
    </div>
  );
};
