import React from 'react';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
const HomePage = () => {
  return (
    <section className="container-fluid" id="home-section">
      <div className="row">
        <Navbar />
        <Sidebar />
      </div>
    </section>
  );
};

export default HomePage;