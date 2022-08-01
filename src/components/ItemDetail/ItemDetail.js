import "./ItemDetail.css";
import { ItemCount } from "../ItemCount/ItemCount";

export const ItemDetail = ({ product }) => {
  const handleOnAdd = (quantity) => {
    console.log("Cantida de Items agregados:", quantity);
  };

  return (
    <div className="item-detail">
      <div className="item-detail__picture">
        <div className="item-detail__picture-container">
          <img src={product.img} alt={product.name} />
        </div>
      </div>
      <div className="item-detail__info">
        <div className="item-detail__info-container">
          <h3 className="item-detail__title">{product.name}</h3>
          <p className="item-detail__description">{product.description}</p>
          <div className="item-detail__price">
            <span>${product.price}</span>
          </div>
          <div className="item-detail__counter">
            <ItemCount stock={product.stock} initial={1} onAdd={handleOnAdd} />
          </div>
        </div>
      </div>
    </div>
  );
};
