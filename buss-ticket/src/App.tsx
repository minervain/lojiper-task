import React, { useState } from 'react';
import './App.css';
import Navbarc from './Components/NavbarC';
import { Outlet } from 'react-router-dom';

function App() {
  const [isLoggedIn, setLoggedIn] = useState(false); 

  return (
    <div className="bg-black">
      {isLoggedIn && <Navbarc />}
      <Outlet />
    </div>
  );
}

export default App;