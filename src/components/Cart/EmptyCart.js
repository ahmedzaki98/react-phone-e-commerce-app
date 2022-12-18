import React from "react";
import Title from "../ui/Title";
import Logo from "../layout/Logo.png";
import styled from "styled-components";
import { Link } from "react-router-dom";

const ButtonWrapper = styled.button`
  position: relative;
  font-size: 14px;
  font-family: "Oswald", sans-serif;
  letter-spacing: 3px;
  height: 3em;
  padding: 0 3em;
  border: none;
  background-color: var(--mainBlue);
  color: #fff;
  text-transform: uppercase;
  overflow: hidden;
  border-radius: 5px;
  &::before {
    content: "";
    display: block;
    position: absolute;
    z-index: 0;
    bottom: 0;
    left: 0;
    height: 0px;
    width: 100%;
    background: darkorange;
    transition: 0.2s;
  }
  .label {
    font-size: 1rem;
    position: relative;
  }
  .icon {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 3em;
    width: 3em;
    position: absolute;
    top: 3em;
    right: 0;
    opacity: 0;
    transition: 0.4s;
  }
  &:hover::before {
    height: 100%;
  }

  &:hover .icon {
    top: 0;
    opacity: 1;
  }
`;

const EmptyCart = () => {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-10 mx-auto text-center text-title">
          <img className="mb-3 mt-0 mx-auto d-flex img-fluid" src={Logo} alt="logo" />
          <Title name="Your cart is" title="empty!" />
          <Link to="/">
            <ButtonWrapper>
              <span class="label">start shopping</span>
              <span class="icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="24"
                  height="24"
                >
                  <path fill="none" d="M0 0h24v24H0z"></path>
                  <path
                    fill="currentColor"
                    d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z"
                  ></path>
                </svg>
              </span>
            </ButtonWrapper>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default EmptyCart;
