import React from 'react';
import ProductTable from '../components/ProductTable';
import ProductForm from '../components/ProductForm';

const ProductPage = () => {
  return (
    <section className="col-md-9 ms-sm-auto col-lg-10 px-md-4" id="product-section">
      <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
        <h1 className="display-2">Products</h1>
        <button className="btn btn-primary rounded-pill" id="new-product"><span className="icon material-symbols-outlined">add</span>New Product</button>
      </div>
      <ProductTable />
      <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
        <h1 className="display-2">New Product / Update Product</h1>
      </div>
      <div className="row">
        <div className="col-12 col-md-6">
          <ProductForm />
        </div>
      </div>
    </section>
  );
};

export default ProductPage;