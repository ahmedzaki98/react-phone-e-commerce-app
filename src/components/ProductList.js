import React, { useState } from "react";
import Product from "./Product";
import Title from "./ui/Title";
import { storeProducts } from "../data";
import { ProductConsumer } from "../context";

const ProductList = () => {
  const [products, setProducts] = useState(storeProducts);
  return (
    <React.Fragment>
      <div className="py-5">
        <div className="container">
          <Title name="Our" title="Products" />
          <div className="row">
            <ProductConsumer>
              {(value) => {
                return value.products.map((product) => {
                  return <Product key={product.id} product={product} />;
                });
              }}
            </ProductConsumer>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};
export default ProductList;
