import React from 'react';

const ProductTable = () => {
  const products = [
    { id: 1, name: 'MILLBERGET', image: 'https://d2xjmi1k71iy2m.cloudfront.net/dairyfarm/id/images/201/1020142_PE831799_S4.jpg', description: 'Swivel chair, murum black', stock: 13, price: 'Rp1.599.000', author: 'admin@mail.com' },
    { id: 2, name: 'MICKE', image: 'https://d2xjmi1k71iy2m.cloudfront.net/dairyfarm/id/images/359/0735981_PE740299_S4.jpg', description: 'Desk, black-brown, 105x50 cm', stock: 30, price: 'Rp1.799.000', author: 'admin@mail.com' },
    { id: 3, name: 'ALEX', image: 'https://d2xjmi1k71iy2m.cloudfront.net/dairyfarm/id/images/777/0977775_PE813763_S3.jpg', description: 'drawer unit, white, 36x70 cm', stock: 12, price: 'Rp1.370.000', author: 'admin@mail.com' },
    { id: 4, name: 'SOCKERBIT', image: 'https://d2xjmi1k71iy2m.cloudfront.net/dairyfarm/id/images/290/1029026_PE835627_S3.jpg', description: 'Storage box with lid, grey-green, 19x26x15 cm', stock: 42, price: 'Rp59.900', author: 'admin@mail.com' },
  ];

  return (
    <div className="row">
      <div className="col-12 table-responsive">
        <table className="table align-middle">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col" width="180px">Image</th>
              <th scope="col" width="250px">Description</th>
              <th scope="col">Stock</th>
              <th scope="col">Price</th>
              <th scope="col">Author</th>
              <th scope="col" width="50px"></th>
            </tr>
          </thead>
          <tbody id="table-product">
            {products.map((product) => (
              <tr key={product.id}>
                <td scope="row">#{product.id}</td>
                <td className="fw-bold">{product.name}</td>
                <td>
                  <img src={product.image} className="img-fluid" alt={product.name} />
                </td>
                <td>{product.description}</td>
                <td>{product.stock}</td>
                <td className="fw-bold">{product.price}</td>
                <td>{product.author}</td>
                <td>
                  <span className="d-flex">
                    <a href="" className="ms-3"><span className="icon material-symbols-outlined text-danger">delete</span></a>
                    <a href="" className="ms-3"><span className="icon material-symbols-outlined text-danger">edit</span></a>
                    <a href="" className="ms-3"><span className="icon material-symbols-outlined text-danger">image</span></a>
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProductTable;