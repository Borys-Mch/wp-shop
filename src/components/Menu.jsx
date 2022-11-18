import { NavLink } from "react-router-dom";

const Menu = () => {
  return (
    <nav>
      <NavLink to=".">Home</NavLink>
      <NavLink to="products">Products</NavLink>
      <NavLink to="contacts">Contacts</NavLink>
    </nav>
  );
};

export default Menu;
