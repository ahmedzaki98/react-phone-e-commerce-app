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
        <div className="text-yellow">
          <i
            className="fa-solid fa-cart-shopping"
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
            {/* title */}
            <div className="row">
              <div className="col-10 mx-auto text-center text-slanted text-blue my-5">
                <h1>{title}</h1>
              </div>
            </div>
            {/* end of title */}
            <div className="row">
              <div className="col-10 mx-auto col-md-6 my-3">
                <img src={img} className="img-fluid" alt="" />
              </div>
              {/* prdoduct info */}
              <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
                <h1>model : {title}</h1>
                <h4 className="text-title text-uppercase text-muted mt-3 mb-2">
                  made by : <span className="text-uppercase">{company}</span>
                </h4>
                <h4 className="text-blue">
                  <strong>
                    price : <span>$</span>
                    {price}
                  </strong>
                </h4>
                <p className="text-capitalize font-weight-bold mt-3 mb-0">
                  some info about product :
                </p>
                <p className="text-muted lead">{info}</p>
                {/* buttons */}
                <div>
                  <Link to="/">
                    <ButtonContainer>
                      <span>
                        <i className="fas fa-reply"></i>
                      </span>
                      <span>back to products</span>
                    </ButtonContainer>
                  </Link>
                  <ButtonContainer
                    disabled={inCart ? true : false}
                    onClick={() => {
                      value.addToCart(id);
                      value.openModal(id);
                    }}
                  >
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
