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
  border-bottom: 2px solid #333;
`;

const NavLinks = styled.div`
  display: flex;
  gap: 1.5rem;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);

  a {
    color: black;
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }
`;

const Brand = styled.img`
  height: 40px;
  width: auto;
  margin-left: auto;
  color: black;
`;

const Navbar = () => {
  return (
    <NavbarStyles>
      <NavLinks>
        <a href="#">Home</a>
        <a href="#">About</a>
        <a href="#">Services</a>
        <a href="#">Contact</a>
      </NavLinks>
      <Link to={"/"}>
        <Brand src="" alt="Brand" />
      </Link>
    </NavbarStyles>
  );
};

export default Navbar;
