import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import slide3 from '../assets/image/slide6.jpg'
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import Treding from '../components/Treding';
import TabNavigation from '../components/TabNavigation';
import RedeemDiscount from '../components/RedeemDiscount';
import ModalInfo from '../components/ModalInfo'; 
import { topupData, voucherData, pulsaData, koutaData, pulsaRegularData, pulsaInternetData, pulsaNelponData } from '../data/data';

const Home = () => {
  const [activeTab, setActiveTab] = useState('topup');
  const [activeSubTab, setActiveSubTab] = useState(null);
  const [showModal, setShowModal] = useState(false);

  // Modal akan ditampilkan ketika halaman pertama kali dimuat
  useEffect(() => {
    setShowModal(true);
  }, []);

  // Fungsi untuk mendapatkan konten berdasarkan tab dan sub-tab aktif
  const getContentForTab = () => {
    if (activeTab === 'pulsa') {
      switch (activeSubTab) {
        case 'pulsaRegular':
          return pulsaRegularData;
        case 'pulsaInternet':
          return pulsaInternetData;
        case 'pulsaNelpon':
          return pulsaNelponData;
        default:
          return pulsaData;
      }
    }
    switch (activeTab) {
      case 'topup':
        return topupData;
      case 'voucher':
        return voucherData;
      case 'kouta':
        return koutaData;
      default:
        return [];
    }
  };

  return (
    <div className="flex flex-col items-center bg-gray-700 py-4 ">
      {/* Modal Information */}
      <ModalInfo showModal={showModal} setShowModal={setShowModal} />

      {/* Swiper Section */}
      <div className="w-full max-w-[1300px] mb-10">
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          loop={false}
          autoplay={{
            delay: 1500,
            disableOnInteraction: false,
            stopOnLastSlide: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="w-full h-[500px] rounded-lg overflow-hidden"
        >
          {/* Swiper Slides */}
          <SwiperSlide>
            <img
              src={slide3}
              alt="Store Image 1"
              className="w-full h-full object-cover"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={slide3}
              alt="Store Image 2"
              className="w-full h-full object-cover"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={slide3}
              alt="Store Image 3"
              className="w-full h-full object-cover"
            />
          </SwiperSlide>
        </Swiper>
      </div>

      {/* Redeem Discount Section */}
      <div>
        <RedeemDiscount />
      </div>

      {/* Trending Products Section */}
      <div className="w-full max-w-[1300px] mb-10">
        <Treding />
      </div>

      {/* Tab Navigation */}
      <div className="w-full max-w-[1300px]">
        <TabNavigation
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          activeSubTab={activeSubTab}
          setActiveSubTab={setActiveSubTab}
        />
      </div>

      {/* Content Section Based on Active Tab and Sub-Tab */}
      <div className="w-full max-w-[1300px] mt-8 cursor-pointer">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6">
          {getContentForTab().map((item) => (
            <div
              key={item.id}
              className="relative border border-gray-300 rounded-lg transition-transform transform hover:rotate-3 hover:scale-105 duration-300 hover:border-2 hover:border-orange-700 bg-white overflow-hidden"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-800">
                  {item.text}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
