import React from 'react';
import { FaTimes } from 'react-icons/fa';
import bgimg from '../assets/image/one.webp'; // Hapus garis miring di akhir path

const ModalInfo = ({ showModal, setShowModal }) => {
  if (!showModal) return null;

  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex justify-center items-center z-50">
      <div
        className="relative bg-white p-6 rounded-lg shadow-lg max-w-lg w-full h-[600px] bg-cover bg-center"
        style={{ backgroundImage: `url(${bgimg})` }} // Ganti backgroundImage dengan url(bgimg)
      >
        <button
          className="absolute top-4 right-4 text-white bg-black border-2 border-orange-500 p-2 rounded-lg hover:bg-gray-800"
          onClick={() => setShowModal(false)}
        >
          <FaTimes size={16} />
        </button>
      </div>
    </div>
  );
};

export default ModalInfo;
