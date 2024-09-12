import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import Home from './pages/Home';
import CariTransaksi from './pages/CariTransaksi';
import Leaderboard from './pages/Leaderboard';
import ProductDetail from './components/ProductDetail'; // Komponen halaman detail produk
import Navbar from './components/Navbar';

function App() {
  return (
    <Router>
      <div className="pt-[70px]"> {/* Sesuaikan padding dengan tinggi Navbar */}
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="caritransaksi" element={<CariTransaksi />} />
          <Route path="leaderboard" element={<Leaderboard />} />
          <Route path="/product/:id" element={<ProductDetail />} /> {/* Route untuk detail produk */}
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
