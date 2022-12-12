import React from "react";
import { Link } from "react-router-dom";
import logo from './logo.svg';
import styled from "styled-components";
import {ButtonContainer} from '../ui/Button';


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
