import { Link } from "react-router-dom";
import "./Nav.css";

const Nav = () => {
  const links = [
    { title: "Products", url: "/products" },
    { title: "Shops", url: "/products" },
    { title: "Partnership", url: "/products" },
    { title: "Contact", url: "/products" },
  ];
  return (
    <nav>
      {links.map((link) => (
        <Link className="NavLink" to={link.url} key={link.title}>
          {link.title}
        </Link>
      ))}
    </nav>
  );
};

export default Nav;
