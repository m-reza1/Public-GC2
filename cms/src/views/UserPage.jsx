import React from 'react';
import UserForm from '../components/UserForm';

const UserPage = () => {
  return (
    <section className="col-md-9 ms-sm-auto col-lg-10 px-md-4" id="new-user-section">
      <div className="row">
        <div className="col-12 col-md-6">
          <div className="pt-3 pb-2 mb-3 border-bottom">
            <UserForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default UserPage;