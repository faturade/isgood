import React from 'react';

const LoginModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white rounded-lg shadow-lg w-96 p-6 relative">
        {/* Tombol Close */}
        <button
          className="absolute top-2 right-2 text-gray-600 text-2xl"
          onClick={onClose}
        >
          &times;
        </button>

        {/* Form Login */}
        <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">Masuk</h2>
        <form>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Username
            </label>
            <input
              type="text"
              placeholder="Masukkan username"
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Password
            </label>
            <input
              type="password"
              placeholder="Masukkan password"
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
          </div>

          <button
            type="submit"
            className="w-full py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-orange-600 hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500"
          >
            Masuk
          </button>
        </form>

        <div className="text-center mt-6">
          <p className="text-sm text-gray-600">Atau masuk dengan:</p>
          <div className="flex justify-center space-x-3 mt-2">
            <button className="text-blue-600">
              <i className="fab fa-facebook" />
            </button>
            <button className="text-red-600">
              <i className="fab fa-google" />
            </button>
            <button className="text-blue-400">
              <i className="fab fa-twitter" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginModal;
