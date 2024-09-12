import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faSearch, faChartSimple } from '@fortawesome/free-solid-svg-icons';
import { NavLink } from 'react-router-dom';
import SearchModal from './SearchModal';
import RegisterModal from './RegisterModal';
import LoginModal from './LoginModal'; // Import komponen LoginModal

const Navbar = () => {
  const [isSearchModalOpen, setIsSearchModalOpen] = useState(false);
  const [isRegisterModalOpen, setIsRegisterModalOpen] = useState(false);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false); // State untuk LoginModal

  const openSearchModal = () => setIsSearchModalOpen(true);
  const closeSearchModal = () => setIsSearchModalOpen(false);
  const openRegisterModal = () => setIsRegisterModalOpen(true);
  const closeRegisterModal = () => setIsRegisterModalOpen(false);
  const openLoginModal = () => setIsLoginModalOpen(true);
  const closeLoginModal = () => setIsLoginModalOpen(false);

  return (
    <div className="bg-black bg-opacity-75 text-white fixed top-0 left-0 w-full z-50">
      <div className="container mx-auto flex justify-between items-center">
        {/* Nama Toko */}
        <div className="flex items-center space-x-8">
          <h1 className="text-2xl font-bold">ISGOOD</h1>

          {/* Link Navigasi */}
          <nav className="flex space-x-6 pt-6">
            <NavLink 
              to="/" 
              className={({ isActive }) => 
                `flex items-center space-x-2 pb-5 border-b-2 ${isActive ? 'text-orange-400 border-b-orange-400' : 'border-transparent text-white hover:border-orange-400 hover:text-orange-400'}` }
            >
              <FontAwesomeIcon icon={faHome} />
              <span>Beranda</span>
            </NavLink>
            <NavLink 
              to="/caritransaksi" 
              className={({ isActive }) => 
                `flex items-center space-x-2 pb-5 border-b-2 ${isActive ? 'text-orange-400 border-b-orange-400' : 'border-transparent text-white hover:border-orange-400 hover:text-orange-400'}` }
            >
              <FontAwesomeIcon icon={faSearch} />
              <span>Cari Transaksi</span>
            </NavLink>
            <NavLink 
              to="/leaderboard" 
              className={({ isActive }) => 
                `flex items-center space-x-2 pb-5 border-b-2 ${isActive ? 'text-orange-400 border-b-orange-400' : 'border-transparent text-white hover:border-orange-400 hover:text-orange-400'}` }
            >
              <FontAwesomeIcon icon={faChartSimple} />
              <span>Leaderboard</span>
            </NavLink>
          </nav>
        </div>

        {/* Search, Language Dropdown, and Buttons */}
        <div className="flex items-center space-x-4">
          <div 
            onClick={openSearchModal}
            className="relative flex items-center border px-4 py-1 border-gray-600 rounded cursor-pointer"
          >
            <FontAwesomeIcon icon={faSearch} className="mr-2 text-white" />
            <span className="text-white">Search</span>
          </div>
          <button 
            onClick={openLoginModal}
            className="bg-white text-black px-4 py-1 rounded hover:bg-orange-400 hover:text-white"
          >
            Masuk
          </button>
          <button 
            onClick={openRegisterModal}
            className="bg-orange-400 text-white px-4 py-1 rounded hover:bg-white hover:text-black"
          >
            Daftar
          </button>
        </div>
      </div>

      {/* Modal Search */}
      <SearchModal isOpen={isSearchModalOpen} onClose={closeSearchModal} />
      
      {/* Modal Register */}
      <RegisterModal isOpen={isRegisterModalOpen} onClose={closeRegisterModal} />

      {/* Modal Login */}
      <LoginModal isOpen={isLoginModalOpen} onClose={closeLoginModal} />
    </div>
  );
};

export default Navbar;
