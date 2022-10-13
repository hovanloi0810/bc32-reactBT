import React from "react";

const ProductItem = ({ product, children, onDetails, onAddToCart }) => {
  
  return (
    <div className="col-sm-4 mt-5">
      <div className="card" style={{width: "20rem"}}>
        <div>
          <img src={product.image} className="card-img-top" alt={product.name} />
          <div className="card-body">
            <h5 className="card-title">{product.name}</h5>
            <p className="card-text">
              {product.price} $
            </p>
            <div className="d-flex justify-content-around">
              <a onClick={() => onDetails(product)} href="#" className="btn btn-dark border border-secondary">
                Details
                <i className="bi bi-check" />
              </a>
              
              <a onClick={() => onAddToCart(product)} href="#" className="btn btn-secondary border border-secondary">
                Add to cart
                <i style={{'paddingLeft': "10px"}} className="bi bi-bag-check" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
