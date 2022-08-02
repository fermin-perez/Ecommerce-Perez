import "./ItemDetailContainer.css";
import { useState, useEffect } from "react";
import { getProduct } from "../../asyncMock";
import { ItemDetail } from "../ItemDetail/ItemDetail";
import { SpinnerLoader } from "../SpinnerLoader/SpinnerLoader";
import { useParams } from "react-router-dom";

export const ItemDetailContainer = () => {
  const [loading, setLoading] = useState(true);
  const [product, setProduct] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    setLoading(true);
    getProduct(id)
      .then((response) => {
        setProduct(response);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <section className="item-detail-container">
      {loading ? <SpinnerLoader /> : <ItemDetail product={product} />}
    </section>
  );
};
