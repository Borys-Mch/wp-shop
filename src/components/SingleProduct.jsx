import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import publicApiConnect from "../connectionApi";

const SingleProduct = () => {
  const [product, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const params = useParams();
  const producrNumber = params.id;
  const getProduct = `products/${producrNumber}`;

  useEffect(() => {
    fetch(`${publicApiConnect.url}${getProduct}?${publicApiConnect.key}`)
      .then((resp) => resp.json())
      .then((product) => setProducts(product))
      .catch((error) => setError(error.message))
      .finally((loading) => setLoading(false));
  }, []);

  return (
    <>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <div>
          <h1>{product.name}</h1>
          <img src={product.images[0].src} alt={product.name} />
        </div>
      )}
    </>
  );
};

export default SingleProduct;
