import React, { Component } from "react";
import products from "./data.json";
import ProductDetails from "./ProductDetails";
import ProductList from "./ProductList";
export default class ShoesShop extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedProduct: null,
      isModalDetails: false,
    };
  }

  handleToggleDetails = (product) => {
    this.setState((state) => ({ isModalDetails: !state.isModalDetails, selectedProduct: product }));
    console.log(this.state.selectedProduct);
  };
  
  closeDetails = () => {
    this.setState((state) => ({ isModalDetails: !state.isModalDetails }));
  };

  render() {
    return (
      <div className="container">
        <h1 className="text-primary text-center">Shoes Shop</h1>
        <ProductList
          onDetails={this.handleToggleDetails}
          productsData={products}
        />
        <ProductDetails
          isOpenDetails={this.state.isModalDetails}
          onCloseDetails={this.closeDetails}
          product={this.state.selectedProduct}
        />
      </div>
    );
  }
}
