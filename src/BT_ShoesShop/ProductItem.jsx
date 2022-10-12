import React from "react";

const ProductItem = ({ product, children, onDetails }) => {
  
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
            <a onClick={() => onDetails(product)} href="#" className="btn btn-primary border border-secondary bg-dark">
              Details
              <i className="bi bi-check" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
