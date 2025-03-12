import { useState, useEffect, useRef } from "react";
import { NavLinks, NavbarStyles, SideBar } from "./GlobalStyles";
import { Link } from "react-router-dom";
import { Logo } from "./GlobalStyles";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
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
      <NavbarStyles>
        <NavLinks>
          <Link to="/apparel">Apparel</Link>
          <Link to="/mission">Our Story</Link>
          <Link to="/contact">Contact</Link>
          <div ref={hamburgerRef} className="ham-burger-menu">
          <GiHamburgerMenu color="black" size={35} onClick={toggleSidebar}/>
          </div>
        </NavLinks>
        <Link to={"/"}>
          <Logo src="/alt-logo.png" alt="Brand" />
        </Link>
      </NavbarStyles>
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
