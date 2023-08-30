import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="nav-section">
        <Link className="nav-section__link" to="/sign-in">
          <i className="fa fa-user-circle nav-section__icone"></i>
          Sign In
        </Link>
    </nav>
  );
};

export default Navbar;
