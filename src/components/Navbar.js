import React from "react";
import { Link } from "react-router-dom";
import logo from "../logo.svg";
import styled from "styled-components";

const ButtonContainer = styled.button`
  text-transform: capitalize;
  font-size: 1.3rem;
  background: white;
  border: 0.05rem solid var(--lightBlue);
  border-radius: 1.5rem;
  color: var(--lightBlue);
  padding: 0.25rem 0.7rem;
  cursor: pointer;
  margin: 0.2rem 0.5rem 0.2rem auto;
  transition: all 0.5s ease-in-out;
  span {
    margin-left: 0.3em;
    transition: all 0.3s ease-in-out;
  }
  &:hover {
    background: var(--lightBlue);
    color: white;
  }
  &:focus{
    outline: none;
  }
`;

const NavWrapper = styled.nav`
  background: var(--mainBlue);
  .nav-link {
    color: var(--mainWhite) !important;
    font-size: 1.3rem;
    text-transform: capitalize;
  }

`;

const Navbar = () => {
  return (
    <NavWrapper className="navbar navbar-expand-sm navbar-dark px-sm-5">
      <Link to="/">
        <img src={logo} alt="store" className="navbar-brand"></img>
      </Link>
      <ul className="navbar-nav align-items-center">
        <li className="nav-item ml-5">
          <Link to="/" className="nav-link">
            products
          </Link>
        </li>
      </ul>
      <Link to="/cart" style={{ marginLeft: "auto" }}>
        <ButtonContainer>
          <span className="mr-2">
            <i className="fas fa-cart-plus"></i>
          </span>
          <span>my cart</span>  
        </ButtonContainer>
      </Link>
    </NavWrapper>
  );
};
export default Navbar;
