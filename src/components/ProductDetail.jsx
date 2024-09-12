// src/pages/ProductDetail/ProductDetail.js
import React from 'react';
import { useParams } from 'react-router-dom';
import { trendingProducts } from '../data/Product';

function ProductDetail() {
  const { id } = useParams();
  const product = trendingProducts.find(p => p.id === parseInt(id));

  if (!product) return <div>Product not found</div>;

  const backgroundImage = product.background || '/default-background.jpg'; // Ganti dengan gambar default jika background tidak tersedia

  // Contoh data card, sesuaikan dengan struktur data yang Anda miliki
  const cardData = [
    { id: 1, text: "Card 1 text", image: "/path/to/small-image1.jpg" },
    { id: 2, text: "Card 2 text", image: "/path/to/small-image2.jpg" },
    { id: 3, text: "Card 3 text", image: "/path/to/small-image3.jpg" },
    { id: 4, text: "Card 4 text", image: "/path/to/small-image4.jpg" },
    { id: 5, text: "Card 5 text", image: "/path/to/small-image5.jpg" },
    { id: 6, text: "Card 6 text", image: "/path/to/small-image6.jpg" },
    { id: 7, text: "Card 7 text", image: "/path/to/small-image7.jpg" },
    { id: 8, text: "Card 8 text", image: "/path/to/small-image8.jpg" },
  ];

  return (
    <div>
      <div className="flex px-2 py-4 bg-gray-700">
        <div className="w-full mb-4">
          <div className="border border-gray-500 rounded-lg p-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {cardData.map(card => (
                <div key={card.id} className="border border-gray-300 rounded-lg overflow-hidden w-[300px] h-[110px] p-4">
                  <div className="flex items-center">
                    <div className="flex-1">
                      <p className="text-lg">{card.text}</p>
                    </div>
                    <img
                      src={card.image}
                      alt={`Card ${card.id}`}
                      className="w-24 h-24 object-cover ml-4 rounded-lg"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
