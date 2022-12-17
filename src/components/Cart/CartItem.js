import React from "react";

const CartItem = ({ item, value }) => {
  const { id, title, img, price, total, count } = item;
  const { increment, decrement, removeItem } = value;
  return (
    <div className="row my-2 text-capitalize text-center">
      <div className="col-10 mx-auto col-lg-2">
        <img
          src={img}
          style={{ width: "5rem", height: "6rem" }}
          className="img-fluid"
          alt="product"
        />
      </div>
      <div className="col-10 mx-auto col-lg-2">
        <span className="d-lg-none">Product: </span>
        {title}
      </div>
      <div className="col-10 mx-auto col-lg-2">
        <span className="d-lg-none">Price: </span>
        {price}
      </div>
      <div className="col-10 mx-auto col-lg-2 my-2 my-lg-0">
        <div className="d-flex justify-content-center">
          <button
            className="icon-btn remove-btn mx-1"
            onClick={() => decrement(id)}
          >
            <i class="fa-solid fa-minus d-flex justify-content-center"></i>
          </button>
          <button className="icon-btn mx-1">
            <span>{count}</span>
          </button>

          <button className="icon-btn mx-1" onClick={() => increment(id)}>
            <i className="fa-solid fa-plus d-flex justify-content-center"></i>
          </button>
        </div>
      </div>
      <div className="col-10 mx-auto col-lg-2">
        <div className="cart-icon text-yellow h5" onClick={() => removeItem(id)}>
          <i className="fas fa-trash"></i>
        </div>
      </div>
      <div className="col-10 mx-auto col-lg-2">
        <strong>item total: $ {total}</strong>
      </div>
    </div>
  );
};

export default CartItem;
