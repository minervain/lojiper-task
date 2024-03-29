import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo3.png';
import { CiLogout } from "react-icons/ci";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between bg-indigo-400 p-4 text-white" style={{ backgroundColor: "#D23B38" }}>

      <div className="flex items-center">
        <img src={logo} alt="Logo" className="w-16 h-11 mr-2" />
      </div>

      <div className="flex items-center">
        <Link to="/seferler" className="mx-2">Seferler</Link>
        <Link to="/" className="mx-2"><CiLogout size={28} />
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
