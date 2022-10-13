import React from "react";

const Cart = ({ isOpenCart, onOpenCart, carts, onChangeQuantity }) => {
  
  if (!isOpenCart) {
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
                Carts
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
                onClick={onOpenCart}
              />
            </div>
            <div className="modal-body">
              <table className="table">
                <thead>
                  <tr>
                    <th>Number</th>
                    <th>image</th>
                    <th>Name</th>
                    <th>Quantity</th>
                    <th>Price</th>
                    <th>Total price</th>
                  </tr>
                </thead>
                
                <tbody>
                  {
                    carts.map((item, index) => (
                      <tr key={item.id}>
                        <td>{index + 1}</td>
                        <td>
                          <img src={item.image} alt={item.name} width='50px' height='50px' />
                        </td>
                        <td>{item.name}</td>
                        <td>
                          <button
                          className="border-0 rounded-circle"
                          onClick={() => onChangeQuantity(item.id, -1)} disabled={item.quantity === 1}>-</button>
                          <span className="">{item.quantity}</span>
                          <button className="border-0 rounded-circle" onClick={() => onChangeQuantity(item.id, 1)}>+</button>
                        </td>
                        <td>{item.price}</td>
                        <td>{item.quantity * item.price}</td>
                      </tr>
                    ))
                  }
                </tbody>
              </table>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
                onClick={onOpenCart}
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

export default Cart;
