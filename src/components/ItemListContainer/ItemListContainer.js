import "./ItemListContainer.css";
import { useState, useEffect } from "react";
import { getProducts } from "../../asyncMock";
import { ItemList } from "../ItemList/ItemList";

export const ItemListContainer = ({ greeting }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts().then((response) => {
      setProducts(response);
    });
  }, []);

  return (
    <section className="item-list-container">
      <h1 className="item-list-container__title">{greeting}</h1>
      <ItemList products={products} />
    </section>
  );
};
