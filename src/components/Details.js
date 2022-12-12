import React from "react";
import { ProductConsumer } from "../context";
import { Link } from "react-router-dom";
import { ButtonContainer } from "./ui/Button";

const Details = () => {
  const inCartCheck = (value) => {
    if (!value) {
      return (
        <div>
          <i
            className="fa-solid fa-plus"
            style={{ transition: "all 0.2s ease-in-out" }}
          ></i>
          <span>add to cart</span>
        </div>
      );
    } else {
      return (
        <div>
          <i
            class="fa-solid fa-cart-shopping"
            style={{ transition: "all 0.2s ease-in-out" }}
          ></i>
          <span>in cart</span>
        </div>
      );
    }
  };
  return (
    <ProductConsumer>
      {(value) => {
        const { id, company, img, info, price, title, inCart } =
          value.detailProduct;
        return (
          <div className="container py-5">
            <div className="row">
              <div className="col-10 mx-auto text-center text-slanted text-blue my-5">
                <h1>{title}</h1>
              </div>
            </div>
            <div className="row">
              <div className="col-10 mx-auto col-md-16 my-3">
                <img className="img-fluid" alt="product" src={img}></img>
              </div>
              <div className="col-10 mx-auto col-md-16 my-3 text-capitalize">
                <h2>model: {title}</h2>
                <h4 className="text-title text-uppercase text-muted mt-3 mb-2">
                  made by: <span className="text-uppercase"> {company}</span>
                </h4>
                <h4 className="text-blue">
                  <strong>
                    price : <span>$</span> {price}{" "}
                  </strong>
                </h4>
                <p className="text-capitalize font-weight-bold mt-3 mb-0">
                  Product info:
                </p>
                <p className="text-muted lead"> {info} </p>
                <div>
                  <Link to="/">
                    <ButtonContainer>
                      <i
                        className="fas fa-reply"
                        style={{ transition: "all 0.2s ease-in-out" }}
                      ></i>
                      <span>back to products</span>
                    </ButtonContainer>
                  </Link>
                  <ButtonContainer disabled={inCart ? true : false}>
                    {inCartCheck(inCart)}
                  </ButtonContainer>
                </div>
              </div>
            </div>
          </div>
        );
      }}
    </ProductConsumer>
  );
};

export default Details;
