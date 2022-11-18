import { useEffect, useState } from "react";
import CategoryProduct from "./CategoryProduct";
import publicApiConnect from "../connectionApi";

function Products() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const perPage = "?per_page=20";
  const pageNumber = "&page=1";
  const getProducts = `products${perPage}${pageNumber}`;

  useEffect(() => {
    fetch(`${publicApiConnect.url}${getProducts}&${publicApiConnect.key}`)
      .then((resp) => resp.json())
      .then((products) => setProducts(products))
      .catch((error) => setError(error.message))
      .finally((loading) => setLoading(false));
  }, []);

  return (
    <>
      <h1>Products</h1>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <main className="flex flex-wrap">
          {products.map((product) => (
            <CategoryProduct key={product.id} {...product} />
          ))}
        </main>
      )}
    </>
  );
}

export default Products;
