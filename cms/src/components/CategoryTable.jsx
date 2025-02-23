import React from 'react';

const CategoryTable = () => {
  const categories = [
    { id: 1, name: 'Furniture' },
    { id: 2, name: 'Workspace' },
    { id: 3, name: 'Storage' },
    { id: 4, name: 'Textile' },
  ];

  return (
    <div className="row">
      <div className="col-12">
        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
            </tr>
          </thead>
          <tbody id="table-category">
            {categories.map((category) => (
              <tr key={category.id}>
                <td scope="row">#{category.id}</td>
                <td className="fw-bold">{category.name}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CategoryTable;