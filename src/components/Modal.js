import React from "react";
import styled from "styled-components";
import { ProductConsumer } from "../context";
import { ButtonContainer } from "./ui/Button";
import { Link } from "react-router-dom";

const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.3);

  #modal {
    background: var(--mainWhite);
    padding: 1rem;
    margin: 2rem auto;
    max-width: 40rem;
    border-radius: 1rem;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
    transition: border-radius cubic-bezier(0.075, 0.82, 0.165, 1) 1s,
      transform cubic-bezier(0.075, 0.82, 0.165, 1) 1s;
    &:hover {
      transform: scale(1.05);
    }
  }
`;

const Modal = () => {
  return (
    <ProductConsumer>
      {(value) => {
        const { modalOpen, closeModal } = value;
        const { img, title, price } = value.modalProduct;
        if (!modalOpen) {
          return null;
        } else {
          return (
            <ModalContainer>
              <div className="container">
                <div className="row">
                  <div
                    className="col-8 mx-auto col-md-6 col-lg-4 p-5 text-center text-capitalize"
                    id="modal"
                  >
                    <h5>item added to cart</h5>
                    <img src={img} className="img-fluid" alt="" />
                    <h5>{title}</h5>
                    <h5 className="text-muted">price : ${price}</h5>
                    <Link to="/">
                      <ButtonContainer
                        onClick={() => {
                          closeModal();
                        }}
                      >
                        Continue Shopping
                      </ButtonContainer>
                    </Link>
                    <Link to="/cart">
                      <ButtonContainer
                        cart
                        onClick={() => {
                          closeModal();
                        }}
                      >
                        Go To Cart
                      </ButtonContainer>
                    </Link>
                  </div>
                </div>
              </div>
            </ModalContainer>
          );
        }
      }}
    </ProductConsumer>
  );
};

export default Modal;
