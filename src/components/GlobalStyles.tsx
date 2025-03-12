import styled, { keyframes } from "styled-components";

export const SectionTitle = styled.h1`
  font-size: 70px;
  margin: auto;
`;

export const CenteredText = styled.p`
  text-align: center;
  margin: auto;
  font-size: 25px;
`;

export const Logo = styled.img`
  height: 50px;
  width: auto;
  margin-left: auto;
  color: black;
`;

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-height: 100vh;
`;

export const HeroContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 120vh;
  text-align: center;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-attachment: fixed;
  margin-top: -90px;
  flex-direction: column;
`;

export const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const HeroText = styled.h1`
  font-size: 100px;
  margin-top: -150px;
  margin-bottom: 10px;
  position: relative;
  color: white;
  text-shadow: 2px 2px 10px rgba(0, 0, 0, 0.7);
  opacity: 0;
  animation: ${fadeIn} 6s ease-out forwards;

  @media screen and (max-width: 1000px) {
    font-size: 60px;
  }
`;

export const HeroSubText = styled.p`
  color: white;
  text-shadow: 2px 2px 10px rgba(0, 0, 0, 0.7);
  position: relative;
  display: flex;
`;

export const Section = styled.section`
  border: 2px solid rgba(105, 105, 105, 0.7);
  width: 85vw;
  margin: 20px auto;
  padding: 10px 15px;
  border-radius: 10px;

  h1 {
    margin: 2px;
    font-size: 60px;
  }

  h2 {
    text-align: center;
    font-weight: 100;
  }

  p {
    font-size: 25px;
    text-align: center;
  }

  ul {
    font-size: 18px;
    text-align: center;
    list-style-position: inside;
  }
`;

// Navbar
export const NavbarStyles = styled.nav`
  background: white;
  color: white;
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
`;

export const NavLinks = styled.div`
  display: flex;
  gap: 5rem;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);

  .ham-burger-menu {
      display: none;
  }

  a {
    color: black;
    text-decoration: none;
    font-size: 18px;
    position: relative;

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
      color: rgb(26, 119, 201) !important;
    }
    &:hover::after {
      width: 100%;
    }
  }

  @media screen and (max-width: 1000px) {
    a {
        display: none;
    }

    left: 90%;
    up: 10px;
    
    .ham-burger-menu {
      margin-top: 10px;
      display: flex !important;
    }
  }
`;

export const SideBar = styled.div`
display: inline;
position: fixed;
top: 0;
left: -250px;
width: 250px;
height: 100%;
background-color: #333333;
color: #ffffff;
transition: transform 0.3s ease-in-out, visibility 0.3s ease-in-out;
padding: 20px;
box-shadow: -2px 0 5px rgba(42, 42, 42, 0.5);
font-size: 22px;
z-index: 1;
visibility: hidden;

&.open {
  transform: translateX(250px);
  visibility: visible;
}

ul {
margin-top: 50px !important;
list-style-type: none;
padding: 0;      
margin: 0;
}

ul li {        
line-height: 60px;
}

a {
color: white;   
}
`;