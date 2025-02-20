import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";

const NavbarStyles = styled.nav`
  background: white;
  color: white;
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  border-bottom: 2px solid black;
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

const Brand = styled.img`
  height: 50px;
  width: auto;
  margin-left: auto;
  color: black;
`;

const Navbar = () => {
  return (
    <NavbarStyles>
      <NavLinks>
        <a href="#">Mens</a>
        <a href="#">Womens</a>
        <Link to="/about">About</Link>
        <a href="#">Contact</a>
      </NavLinks>
      <Link to={"/"}>
        <Brand src="/temp.png" alt="Brand" />
      </Link>
    </NavbarStyles>
  );
};

export default Navbar;
