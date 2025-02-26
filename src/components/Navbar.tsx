import styled from "styled-components";
import { Link } from "react-router-dom";
import { Logo } from "./GlobalStyles";

const NavbarStyles = styled.nav`
  background: white;
  color: white;
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  // border-bottom: 2px solid black;
`;

const NavLinks = styled.div`
  display: flex;
  gap: 5rem;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);

  a {
    color: black;
    text-decoration: none;
    font-size: 18px;
    position: relative;

    /* Add hover underline animation */
    &::after {
      content: "";
      position: absolute;
      left: 50%;
      bottom: -3px;
      width: 0%;
      height: 2px;
      background-color: rgb(26, 119, 201);
      transition: all 0.3s ease-in-out;
      transform: translateX(-50%);
    }
    &:hover {
      color: rgb(26, 119, 201);
    }
    &:hover::after {
      width: 100%;
    }
  }
`;

const Navbar = () => {
  return (
    <NavbarStyles>
      <NavLinks>
        <Link to="/apparel">Apparel</Link>
        <Link to="/mission">Our Story</Link>
        <Link to="/contact">Contact</Link>
      </NavLinks>
      <Link to={"/"}>
        <Logo src="/alt-logo.png" alt="Brand" />
      </Link>
    </NavbarStyles>
  );
};

export default Navbar;
