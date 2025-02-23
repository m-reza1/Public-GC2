import React from 'react';

const UpdateImageForm = () => {
  return (
    <form id="register-form">
      <h1 className="h3 mb-3 display-1">Update Image</h1>
      <div className="input-group mb-3">
        <input type="file" className="form-control pb-2" id="inputGroupFile02" autoComplete="off" required />
      </div>
      <button className="btn btn-lg btn-primary rounded-pill w-100 p-2 mt-3" type="submit">Update Image</button>
    </form>
  );
};

export default UpdateImageForm;