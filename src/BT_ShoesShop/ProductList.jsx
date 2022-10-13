import React from 'react'
import ProductItem from './ProductItem'

const ProductList = ({ productsData, onDetails, onOpenCart, onAddToCart }) => {
  return (
    <div className='row'>
      {
        productsData.map((product) => {
          return (
            <ProductItem onAddToCart={onAddToCart} onOpenCart={onOpenCart} onDetails={onDetails} product={product} key={product.id}>
            </ProductItem>
          )
        })
      }
    </div>
  )
}

export default ProductList