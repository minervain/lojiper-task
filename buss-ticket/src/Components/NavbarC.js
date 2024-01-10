import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo3.png';

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between bg-indigo-400 p-4 text-white" style={{backgroundColor:"#D23B38"}}>

      <div className="flex items-center">
        <img src={logo} alt="Logo" className="w-16 h-11 mr-2" />
      </div>

      <div className="flex items-center">
        <Link to="/login" className="mx-2">Seferler</Link>
        <Link to="/register" className="mx-2">Logout</Link>
      </div>
    </nav>
  );
};

export default Navbar;
