import "./ItemListContainer.css";
import { useState, useEffect } from "react";
import { getProducts, getProductsByCategory } from "../../asyncMock";
import { ItemList } from "../ItemList/ItemList";
import { SpinnerLoader } from "../SpinnerLoader/SpinnerLoader";
import { useParams } from "react-router-dom";

export const ItemListContainer = ({ greeting }) => {
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const asyncFunction = id ? getProductsByCategory : getProducts;
    setLoading(true);
    asyncFunction(id)
      .then((response) => {
        setProducts(response);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [id]);

  return (
    <section className="item-list-container">
      {loading ? (
        <SpinnerLoader />
      ) : (
        <>
          <h1 className="item-list-container__title">
            {id ? id.charAt(0).toUpperCase() + id.slice(1) : greeting}
          </h1>
          <ItemList products={products} />
        </>
      )}
    </section>
  );
};
