import React from "react";
import Title from "../ui/Title";

const EmptyCart = () => {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-10 mx-auto text-center text-title">
          <Title name="Your cart is" title="empty" />
        </div>
      </div>
    </div>
  );
};

export default EmptyCart;
