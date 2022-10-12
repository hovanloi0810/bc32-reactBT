import React from "react";

const ProductDetails = ({ isOpenDetails, onCloseDetails, product }) => {
  if (!isOpenDetails) {
    return null;
  }
  
  return (
    <>
      {/* Modal */}
      <div
        className="modal fade show d-block"
        tabIndex={-1}
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Product Details
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
                onClick={onCloseDetails}
              />
            </div>
            <div className="modal-body d-flex justify-content-between align-items-center">
              <div className="">
                <img src={product.image} alt="" width="100px"/>
              </div>
              <div className="pl-5 d-block">
                <h3>Name: {product.name}</h3>
                <p><b>Alias</b>: {product.alias}</p>
                <p><b>Price</b>: {product.price} $</p>
                <p><b>Description</b>: {product.shortDescription}</p>
              </div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
                onClick={onCloseDetails}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Overlay */}
      <div className="modal-backdrop fade show" />
    </>
  );
};

export default ProductDetails;
