import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import data from '../api/sefer.json'
import Navbar from '../Components/NavbarC';
import { Alert, Stack } from '@mui/material';
import AlertSuccess from '../Components/Alert/AlertSucces';



const HomePage = () => {
  const navigate = useNavigate();
  const [departure, setDeparture] = useState('');
  const [arrival, setArrival] = useState('');
  const [departureDate, setDepartureDate] = useState('');
  const [showError, setShowError] = useState(false);

  const handleSearch = () => {
    // Validate the form before allowing the user to submit
    if (departure && arrival && departureDate) {
      navigate(`/inquiry/${departure}/${arrival}/${departureDate}`);
    } else {
      setShowError(true);
    }
  };

  const handleCloseError = () => {
    setShowError(false);
  };

  return (
    <div>
      <Navbar />
      <div className="max-w-md mx-auto mt-8 p-4 bg-white rounded shadow-md" style={{ backgroundColor: "#D23B38" }}>
        <h1 className=" text-white text-2xl font-bold mb-4">Sefer Arama Sayfası</h1>

        <label className="block mb-4">
          <span className="text-white">Kalkış Yeri:</span>
          <select
            className="block w-full mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
            value={departure}
            onChange={(e) => setDeparture(e.target.value)}
            required
          >
            <option value="">Seçiniz</option>
            {Array.from(new Set(data.seferler.map((sefer) => sefer.kalkisSehir))).map((sehir, index) => (
              <option key={index} value={sehir}>
                {sehir}
              </option>
            ))}
          </select>
        </label>

        <label className="block mb-4">
          <span className="text-white">Varış Yeri:</span>
          <select
            className="block w-full mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
            value={arrival}
            onChange={(e) => setArrival(e.target.value)}
            required
          >
            <option value="">Seçiniz</option>
            {Array.from(new Set(data.seferler.map((sefer) => sefer.varisSehir))).map((sehir, index) => (
              <option key={index} value={sehir}>
                {sehir}
              </option>
            ))}
          </select>
        </label>

        <label className="block mb-4">
          <span className="text-white">Sefer Tarihi:</span>
          <input
            type="date"
            className="block w-full mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
            value={departureDate}
            onChange={(e) => setDepartureDate(e.target.value)}
            required
          />
        </label>

        <button
          className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-700 focus:outline-none focus:shadow-outline-blue active:bg-blue-800"
          onClick={handleSearch}
        >
          Ara
        </button>
      </div>
      {showError && (
        <AlertSuccess message="Eksik bilgi girdiniz" />

      )}
    </div>
  );
};

export default HomePage;
