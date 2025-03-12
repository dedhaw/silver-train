import { useEffect, useState, useRef } from "react";
import styled from "styled-components";
import { NavbarStyles, NavLinks, SideBar } from "../GlobalStyles";
import { Link } from "react-router-dom";
import { Logo } from "../GlobalStyles";
import { GiHamburgerMenu } from "react-icons/gi";

const NavbarStylesW = styled(NavbarStyles)`
  background: rgba(0, 0, 0, 0);
  border-bottom: 1px solid rgba(255, 255, 255, 0.6);
  transition: all 0.3s ease-in-out;

  &:hover {
    background: white;
  }
`;

const NavLinksW = styled(NavLinks)`
${NavbarStylesW}:hover & a {
    color: #333;
    text-shadow: none !important;
  }

  a {
    color: white;
  }
`;

// const NavLinks = styled.div`
//   display: flex;
//   gap: 5rem;
//   position: absolute;
//   left: 50%;
//   transform: translateX(-50%);

//   ${NavbarStyles}:hover & a {
//     color: #333;
//     text-shadow: none !important;
//   }

//   a {
//     color: white;
//     text-decoration: none;
//     font-size: 18px;
//     position: relative;
//     text-shadow: 2px 2px 10px rgba(0, 0, 0, 0.7);

//     &::after {
//       content: "";
//       position: absolute;
//       left: 50%;
//       bottom: -3px;
//       width: 0%;
//       height: 2px;
//       background-color: rgb(26, 119, 201);
//       transition: all 0.3s ease-in-out;
//       transform: translateX(-50%);
//     }
//     &:hover {
//       color: rgb(26, 119, 201) !important;
//     }
//     &:hover::after {
//       width: 100%;
//     }
//   }
// `;

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const sidebarRef = useRef<any>(null);
  const hamburgerRef = useRef<any>(null);

  const handleClickOutside = (event: MouseEvent) => {
    if (
      sidebarRef.current &&
      !sidebarRef.current.contains(event.target as Node) &&
      hamburgerRef.current &&
      !hamburgerRef.current.contains(event.target as Node)
    ) {
      setIsOpen(false);
    }
  };

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    console.log(isOpen);
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <>
      <NavbarStylesW
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <NavLinksW>
          <Link to="/apparel">Apparel</Link>
          <Link to="/mission">Our Story</Link>
          <Link to="/contact">Contact</Link>
          <div ref={hamburgerRef} className="ham-burger-menu">
          <GiHamburgerMenu color={isHovered ? "black" : "white"} size={35} onClick={toggleSidebar}/>
          </div>
        </NavLinksW>
        <Link to={"/"}>
        <Logo src={isHovered ? "/alt-logo.png" : "/logo.png"} alt="Brand" />
        </Link>
      </NavbarStylesW>
      <SideBar className={isOpen ? "open": ""} ref={sidebarRef}>
        <ul>
          <li><Link to="/apparel">Apparel</Link></li>
          <li><Link to="/mission">Our Story</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </SideBar>
    </>
  );
};

export default Navbar;