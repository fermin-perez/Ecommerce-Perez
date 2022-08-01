import "./ItemDetailContainer.css";
import { useState, useEffect } from "react";
import { getProduct } from "../../asyncMock";
import { ItemDetail } from "../ItemDetail/ItemDetail";

export const ItemDetailContainer = () => {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    getProduct().then((response) => {
      setProduct(response);
    });
  }, []);

  return (
    <section className="item-detail-container">
      <ItemDetail product={product} />
    </section>
  );
};
