import React from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const Homepage = () => {
  const navigate = useNavigate();

  const goProductPage = () => {
    navigate('/products?q=pants');
  };

  return (
    <div>
      <h1>Homepage</h1>
      <Link to="/about">Go to About Page!</Link>
      <button onClick={goProductPage}>Go to Product Page</button>
    </div>
  )
}

export default Homepage