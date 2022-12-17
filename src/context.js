import React, { Component, createContext } from "react";
import { storeProducts, detailProduct } from "./data";

const ProductContext = createContext();

export default class ProductProvider extends Component {
  state = {
    products: [],
    detailProduct: detailProduct,
    cart: [],
    modalProduct: detailProduct,
    modalOpen: false,
    cartSubTotal: 0,
    cartTax: 0,
    cartTotal: 0,
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
    this.setState(() => {
      return {
        products: tempProducts,
        cart: [...this.state.cart, cartProduct],
      };
    });
  };
  openModel = (id) => {
    const productId = this.getId(id);
    this.setState(() => {
      return {
        modalProduct: productId,
        modalOpen: true,
      };
    });
  };

  closeModal = () => {
    this.setState(() => {
      return { modalOpen: false };
    });
  };

  increment = (id) => {
    console.log("increment");
  };

  decrement = (id) => {
    console.log("decrement");
  };

  removeItem = (id) => {
    console.log("remove item");
  };

  clearCart = () => {
    console.log("clear");
  };

  render() {
    return (
      <div>
        <ProductContext.Provider
          value={{
            ...this.state,
            handleDetail: this.handleDetail,
            addToCart: this.addToCart,
            openModel: this.openModel,
            closeModal: this.closeModal,
            increment: this.increment,
            decrement: this.decrement,
            removeItem: this.removeItem,
            clearCart: this.clearCart,
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
