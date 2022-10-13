import { Button } from "bootstrap";
import React, { Component } from "react";
import Cart from "./Cart";
import products from "./data.json";
import ProductDetails from "./ProductDetails";
import ProductList from "./ProductList";
export default class ShoesShop extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedProduct: null,
      isModalDetails: false,
      isModalCart: false,
      carts: [],
    };
  }

  handleToggleDetails = (product) => {
    this.setState((state) => ({
      isModalDetails: !state.isModalDetails,
      selectedProduct: product,
    }));
  };

  closeDetails = () => {
    this.setState((state) => ({ isModalDetails: !state.isModalDetails }));
  };

  handleToggleCart = () => {
    this.setState((state) => ({ isModalCart: !state.isModalCart }));
  };
  
  handleAddToCart = (product) => {
    const index = this.state.carts.findIndex((item) => item.id === product.id);
    if (index === -1) {
      this.setState((state) => ({carts: [...state.carts, {...product, quantity: 1}]}));
    } else {
      const newCarts = [...this.state.carts];
      newCarts[index].quantity += 1;
      this.setState({carts: newCarts});
    }
  }
  
  handleChangeQuantity = (productId, quantity) => {
    const index = this.state.carts.findIndex((item) => item.id === productId);
    const newCarts = [...this.state.carts];
    newCarts[index].quantity += quantity;
    this.setState({carts: newCarts});
  }

  render() {
    return (
      <div className="container">
        <h1 className="text-primary text-center">Shoes Shop</h1>
        <button onClick={this.handleToggleCart} className="btn btn-primary">Cart</button>

        <ProductList
          onDetails={this.handleToggleDetails}
          productsData={products}
          onAddToCart={this.handleAddToCart}
        />
        <ProductDetails
          isOpenDetails={this.state.isModalDetails}
          onCloseDetails={this.closeDetails}
          product={this.state.selectedProduct}
        />

        <Cart
          isOpenCart={this.state.isModalCart}
          onOpenCart={this.handleToggleCart}
          carts={this.state.carts}
          onChangeQuantity={this.handleChangeQuantity}
        />
      </div>
    );
  }
}
