import { Link } from "react-router-dom";

const CategoryProduct = (props) => {
  const { name, sku, price, images, id } = props;
  return (
    <Link
      to={String(id)}
      className="p-3 m-3 w-[23%] h-[400px] rounded-lg border border-gray-300 bg-white cursor-pointer">
      <img className="max-h-[250px]" src={images[0].src} alt={images[0].name} />
      <h4>{name}</h4>
      <h5>sku: {sku}</h5>
      <h3>{price} UAH</h3>
    </Link>
  );
};

export default CategoryProduct;
