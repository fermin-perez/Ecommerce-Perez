import { useState } from "react";

export const ItemCount = ({ stock, initial, onAdd }) => {
  const [counter, setCounter] = useState(initial);

  const handleAdd = () => {
    if (counter < stock) {
      setCounter(counter + 1);
    }
  };

  const handleSubstract = () => {
    if (counter > initial) {
      setCounter(counter - 1);
    }
  };

  return (
    <>
      <h2> {counter} </h2>
      <button onClick={handleAdd}>+</button>
      <button onClick={handleSubstract}>-</button>
      <button
        onClick={() => {
          if (stock > 1) onAdd(counter);
        }}
      >
        Agregar al carrito
      </button>
    </>
  );
};
