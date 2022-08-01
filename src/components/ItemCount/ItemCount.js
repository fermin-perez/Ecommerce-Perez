import "./ItemCount.css";
import { useState } from "react";

export const ItemCount = ({ stock, initial, onAdd }) => {
  const [count, setCount] = useState(initial);

  const handleAdd = () => {
    if (count < stock) {
      setCount(count + 1);
    }
  };

  const handleSubstract = () => {
    if (count > initial) {
      setCount(count - 1);
    }
  };

  return (
    <div className="item-count">
      <div className="item-count__stock">
        <span>Stock disponible: {stock}</span>
      </div>
      <div className="item-count__controlls">
        <button onClick={handleSubstract}>-</button>
        <span>{count}</span>
        <button onClick={handleAdd}>+</button>
      </div>
      <div className="item-count__add">
        <button
          className="item-count__add-enabled"
          onClick={() => {
            if (stock > 1) onAdd(count);
          }}
        >
          Agregar al carrito
        </button>
      </div>
    </div>
  );
};
