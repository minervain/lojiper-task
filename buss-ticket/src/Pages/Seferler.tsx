import React, { useState } from 'react';
import data from '../api/sefer.json';

function Seferler() {
    const [currentPage, setCurrentPage] = useState(1);
    const [perPage, setPerPage] = useState(5);

    const totalPages = Math.ceil(data.seferler.length / perPage);

    const indexOfLastItem = currentPage * perPage;
    const indexOfFirstItem = indexOfLastItem - perPage;
    const currentItems = data.seferler.slice(indexOfFirstItem, indexOfLastItem);


    const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

    return (
        <div className="container mx-auto p-4">
            <h2 className="text-2xl font-bold mb-4">Seferler</h2>
            <ul>
                {currentItems.map(sefer => (
                    <li key={sefer.seferID} className="mb-4 p-4 border border-gray-300 rounded" style={{ backgroundColor: "#D23B38" }}>
                        <p className='text-white'>Kalkış Şehir: {sefer.kalkisSehir}</p>
                        <p className='text-white'>Varış Şehir: {sefer.varisSehir}</p>
                        <p className='text-white'>Kalkış Zamanı: {sefer.kalkisZamani}</p>
                        <p className='text-white'>Varış Zamanı: {sefer.varisZamani}</p>
                        <p className='text-white'>Fiyat: {sefer.fiyat}</p>
                        <p className='text-white'>Boş Koltuk Sayısı: {sefer.bosKoltukSayisi}</p>
                        <button className="bg-blue-500 text-white px-4 py-2 mt-2 rounded hover:bg-blue-700">Satın Al</button>
                    </li>
                ))}
            </ul>
            <div className="flex justify-center mt-4">
                {/* Sayfa numaralarını göster */}
                {Array.from({ length: totalPages }, (_, index) => (
                    <button
                        key={index + 1}
                        onClick={() => paginate(index + 1)}
                        className={`mx-2 px-3 py-1 rounded ${currentPage === index + 1 ? 'bg-blue-500 text-white' : 'bg-gray-300'}`}
                    >
                        {index + 1}
                    </button>
                ))}
            </div>
        </div>
    );
}

export default Seferler;
