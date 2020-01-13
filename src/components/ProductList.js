import React from 'react';
import data from '../data';
const { products } = data;

// {
//   "id": 1,
//   "name": "Handmade Metal Fish",
//   "material": "Soft",
//   "adjective": "Gorgeous",
//   "companyId": 2,
//   "department": "Books",
//   "description": "Handmade Metal Fish is made of Soft and it is Gorgeous."
// }

function ProductList() {
  return (
    <div className='col-sm'>
      <h2>Products</h2>
      {products.map((product, i) => {
        return (
          <div className='card m-2' key={product.name + i}>
            <div className='card-body'>
              <h5 className='card-title'>{product.name}</h5>
              <p className='card-text'>{product.description}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default ProductList;
