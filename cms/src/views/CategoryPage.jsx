import React from 'react';
import CategoryTable from '../components/CategoryTable';

const CategoryPage = () => {
  return (
    <section className="col-md-9 ms-sm-auto col-lg-10 px-md-4" id="category-section">
      <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
        <h1 className="display-2">Categories</h1>
      </div>
      <CategoryTable />
    </section>
  );
};

export default CategoryPage;