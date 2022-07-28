import { useState, useEffect } from "react";
import { getProducts } from "../asyncMock";
import { ItemList } from "./ItemList";

export const ItemListContainer = ({ greeting }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts().then((response) => {
      setProducts(response);
    });
  }, []);

  return (
    <>
      <h1 className="text-center">{greeting}</h1>
      <ItemList products={products} />
    </>
  );
};
