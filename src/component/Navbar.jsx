import { Link, NavLink } from "react-router-dom";
export const Navbar = () => {
  const NavLinkStyles = ({ isActive }) => {
    return {
      fontWeight: isActive ? "bold" : "normal",
      textDecoration: isActive ? "none" : "underline",
    };
  };
  return (
    <nav>
      <NavLink to="/" style={NavLinkStyles}>
        Home
      </NavLink>
      <NavLink to="/about" style={NavLinkStyles}>
        About
      </NavLink>
    </nav>
  );
};
