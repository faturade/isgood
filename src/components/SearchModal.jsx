import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const SearchModal = ({ isOpen, onClose }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchHistory, setSearchHistory] = useState([]);

  const handleSearch = () => {
    if (searchQuery.trim() !== '') {
      // Tambahkan query ke history pencarian
      setSearchHistory([...searchHistory, searchQuery]);
      // Kosongkan input setelah pencarian
      setSearchQuery('');
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  if (!isOpen) return null; // Jangan render modal jika tidak dibuka

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center">
      <div className="bg-white w-11/12 max-w-md p-6 rounded-lg shadow-lg relative">
        {/* Tombol Tutup */}
        <button 
          onClick={onClose} 
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-800"
        >
          &times;
        </button>

        {/* Judul dan Input Pencarian */}
        <h2 className="text-lg font-semibold mb-4">Search</h2>
        <div className="relative w-full mb-4">
          <input
            type="text"
            className="w-full border border-gray-300 rounded px-10 py-2 text-gray-600"
            placeholder="Cari sesuatu..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onKeyDown={handleKeyDown} // Trigger search ketika Enter ditekan
          />
          <FontAwesomeIcon 
            icon={faSearch} 
            className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
          />
        </div>
        <button 
          onClick={handleSearch} 
          className="bg-orange-400 text-white px-4 py-2 rounded hover:bg-orange-500 w-full"
        >
          Cari
        </button>

        {/* Pencarian Populer */}
        <div className="mt-4">
          <h3 className="text-sm font-semibold text-gray-700 mb-2">Pencarian Populer</h3>
          <ul className="space-y-2">
            <li className="text-gray-600 cursor-pointer hover:text-black">Top-up Pulsa</li>
            <li className="text-gray-600 cursor-pointer hover:text-black">Voucher Internet</li>
            <li className="text-gray-600 cursor-pointer hover:text-black">Paket Data</li>
            <li className="text-gray-600 cursor-pointer hover:text-black">Promo Hari Ini</li>
          </ul>
        </div>

        {/* History Pencarian */}
        {searchHistory.length > 0 && (
          <div className="mt-6">
            <h3 className="text-sm font-semibold text-gray-700 mb-2">History Pencarian</h3>
            <ul className="space-y-2">
              {searchHistory.map((item, index) => (
                <li key={index} className="text-gray-600 cursor-pointer hover:text-black">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchModal;
