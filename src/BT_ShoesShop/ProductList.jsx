import React from 'react'
import ProductItem from './ProductItem'

const ProductList = ({ productsData, onDetails }) => {
  return (
    <div className='row'>
      {
        productsData.map((product) => {
          return (
            <ProductItem onDetails={onDetails} product={product} key={product.id}>
            </ProductItem>
          )
        })
      }
    </div>
  )
}

export default ProductList