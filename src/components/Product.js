import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { ProductConsumer } from "../context";
import PropTypes from "prop-types";

const ProductWrapper = styled.div`
.card{
  width: 100%;
  height: 20rem;
  border-color: transparent;
  border-radius: .7rem;
  transition: all 0.5s linear;
  background: linear-gradient(180deg, #FFB7B7 0%, #727272 100%), radial-gradient(60.91% 100% at 50% 0%, #FFD1D1 0%, #260000 100%), linear-gradient(238.72deg, #FFDDDD 0%, #720066 100%), linear-gradient(127.43deg, #00FFFF 0%, #FF4444 100%), radial-gradient(100.22% 100% at 70.57% 0%, #FF0000 0%, #00FFE0 100%), linear-gradient(127.43deg, #B7D500 0%, #3300FF 100%);
  background-blend-mode: screen, overlay, hard-light, color-burn, color-dodge, normal;  
  &:hover{
    .card{
      border: 0.04rem solid rgba(0,0,0,2);
      box-shadow: 2px 2px 5px 0px rgba(0, 0, 0, 2);
    }
    filter: brightness(1.1);
    ::before{
      filter: brightness(.5);
      top: -100%;
      left: 200%;
    }
  }
}
.card-footer{
  width: 100%;
  font-size:1.2rem;
  background: transparent;
  border-top: transparent;
}
.img-container{
  position: relative;
  overflow: hidden;
}
.card-img-top{
  transition: 1s all;
  width: 100%;
  max-height: 10rem;
  object-fit: scale-down;
}
.img-container:hover .card-img-top{
  transform: scale(1.2);
}
.cart-btn{
  position: absolute;
  bottom: 0;
  right: 0;
  background-color: var(--mainWhite);
  color: var(--lightBlue);
  border: none;
  font-size: 1.6rem;
  border-radius: 0.6rem 0 0 0;
  transform: translate(100%, 100%);
  transition: 1s all;
}
.img-container:hover .cart-btn{
  transform: translate(0, 0);
}
.cart-btn:hover{
  cursor: pointer;
  color: var(--mainBlue);
}
}`;

const Product = ({ product }) => {
  const { id, title, img, price, inCart } = product;
  return (
    <ProductWrapper className="col-9 mx-auto col-md-6 col-lg-3 my-3">
      <div className="card">
        <ProductConsumer>
          {(value) => (
            <div
              className="img-container p-5"
              onClick={() => value.handleDetail(id)}
            >
              <Link to="/details">
                <img src={img} alt="product" className="card-img-top" />
              </Link>
              <button
                className="cart-btn"
                disabled={inCart ? true : false}
                onClick={() => {
                  value.addToCart(id);
                }}
              >
                {inCart ? (
                  <p className="text-capitalize mb-0" disabled>
                    in Card
                  </p>
                ) : (
                  <i className="fas fa-cart-plus"></i>
                )}
              </button>
            </div>
          )}
        </ProductConsumer>
        {/* cart footer */}
        <div className="card-footer d-flex justify-content-between mb-0">
          <p className="align-self-center mb-0">{title}</p>
          <h5 className="text-blue font-italic mb-0">
            <span className="mr-1">$</span>
            {price}
          </h5>
        </div>
      </div>
    </ProductWrapper>
  );
};
export default Product;
Product.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number,
    img: PropTypes.string,
    title: PropTypes.string,
    price: PropTypes.number,
    inCart: PropTypes.bool,
  }).isRequired,
};
