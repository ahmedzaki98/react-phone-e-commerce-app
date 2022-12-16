import React from "react";
import { Link } from "react-router-dom";
import logo from "./Logo.png";
import styled from "styled-components";
import { ButtonContainer } from "../ui/Button";
import { ProductConsumer } from "../../context";

const NavWrapper = styled.nav`
  background: var(--mainBlue);
  .nav-link {
    color: var(--mainWhite) !important;
    font-size: 1.3rem;
    text-transform: capitalize;
  }
  img {
    width: 5.5rem;
    hight: 5.5rem;
  }
`;
const SpanWrapper = styled.span`
  i {
    max-width:0.9rem;
    margin-left: -1rem;
    margin-right: 1rem;
    color: var(--mainYellow);
    font-size: 1.3rem;
  }
  .badge:after {
    content: attr(value);
    font-size: 0.7rem;
    color: #fff;
    background: var(--mainBlue);
    border-radius: 50%;
    padding: 2px 5px;
    position: relative;
    left: -8px;
    top: -10px;
    opacity: 0.9;
  }
`;

const Navbar = () => {
  return (
    <ProductConsumer>
      {(value) => {
        const counter = value.cart.length;
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
                <SpanWrapper>
                  <span><i class="fa badge fa-lg" value={counter}>
                    &#xf07a;
                  </i></span>
                </SpanWrapper>
                <span> My cart</span>
              </ButtonContainer>
            </Link>
          </NavWrapper>
        );
      }}
    </ProductConsumer>
  );
};
export default Navbar;
