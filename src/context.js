import React, { Component, createContext } from "react";
import { storeProducts, detailProduct } from "./data";

const ProductContext = createContext();

export default class ProductProvider extends Component {
  state = {
    products: [],
    detailProduct: detailProduct,
    cart: [],
  };
  componentDidMount() {
    this.setProducts();
  }
  //copy data from storeProducts and save it in state products
  setProducts = () => {
    let tempProducts = [];
    storeProducts.forEach((item) => {
      const singleItem = { ...item };
      tempProducts = [...tempProducts, singleItem];
    });
    this.setState(() => {
      return { products: tempProducts };
    });
  };

  getId = (id) => {
    const productId = this.state.products.find((item) => item.id === id);
    return productId;
  };

  //change detailProduct with the specific product we choose
  handleDetail = (id) => {
    const productDetail = this.getId(id);
    this.setState(() => {
      return { detailProduct: productDetail };
    });
  };

  addToCart = (id) => {
    let tempProducts = [...this.state.products];
    const index = tempProducts.indexOf(this.getId(id));
    const cartProduct = tempProducts[index];
    cartProduct.inCart = true;
    cartProduct.count = 1;
    const price = cartProduct.price;
    cartProduct.total = price;
    this.setState(
      () => {
        return {
          products: tempProducts,
          cart: [...this.state.cart,cartProduct],
        };
      },
      () => {
        console.log(this.state);
      }
    );
  };

  render() {
    return (
      <div>
        <ProductContext.Provider
          value={{
            ...this.state,
            handleDetail: this.handleDetail,
            addToCart: this.addToCart,
          }}
        >
          {this.props.children}
        </ProductContext.Provider>
      </div>
    );
  }
}
const ProductConsumer = ProductContext.Consumer;
export { ProductProvider, ProductConsumer };
