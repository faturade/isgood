import React from 'react';

const TabNavigation = ({ activeTab, setActiveTab, activeSubTab, setActiveSubTab }) => {
    return (
      <>
        <nav className="w-full text-white py-2 mt-8">
          <div className="container mx-auto flex items-center space-x-4">
            <button
              onClick={() => {
                setActiveTab('topup');
                setActiveSubTab(null); // Reset sub-tab jika tab lain dipilih
              }}
              className={`bg-gray-600 py-1 px-4 rounded-full ${activeTab === 'topup' ? 'bg-orange-400' : 'border-white'} hover:bg-orange-400`}
              aria-selected={activeTab === 'topup'}
            >
              Topup
            </button>
            <button
              onClick={() => {
                setActiveTab('voucher');
                setActiveSubTab(null);
              }}
              className={`bg-gray-600 py-1 px-4 rounded-full ${activeTab === 'voucher' ? 'bg-orange-400' : 'border-white'} hover:bg-orange-400`}
              aria-selected={activeTab === 'voucher'}
            >
              Voucher
            </button>
            <button
              onClick={() => {
                setActiveTab('pulsa');
                setActiveSubTab(null); // Default ke sub-tab pertama
              }}
              className={`bg-gray-600 py-1 px-4 rounded-full ${activeTab === 'pulsa' ? 'bg-orange-400' : 'border-white'} hover:bg-orange-400`}
              aria-selected={activeTab === 'pulsa'}
            >
              Pulsa
            </button>
            <button
              onClick={() => {
                setActiveTab('kouta');
                setActiveSubTab(null);
              }}
              className={`bg-gray-600 py-1 px-4 rounded-full ${activeTab === 'kouta' ? 'bg-orange-400' : 'border-white'} hover:bg-orange-400`}
              aria-selected={activeTab === 'kouta'}
            >
              Kouta
            </button>
          </div>
        </nav>
  
        {/* Sub-Navigation for Pulsa Tab */}
        {activeTab === 'pulsa' && (
          <nav className="w-full text-white py-2 mt-4">
            <div className="container mx-auto flex items-center space-x-4">
              <button
                onClick={() => setActiveSubTab('pulsaRegular')}
                className={`bg-gray-500 py-1 px-4 rounded-full ${activeSubTab === 'pulsaRegular' ? 'bg-orange-400' : ''} hover:bg-orange-400`}
                aria-selected={activeSubTab === 'pulsaRegular'}
              >
                Pulsa Regular
              </button>
              <button
                onClick={() => setActiveSubTab('pulsaInternet')}
                className={`bg-gray-500 py-1 px-4 rounded-full ${activeSubTab === 'pulsaInternet' ? 'bg-orange-400' : ''} hover:bg-orange-400`}
                aria-selected={activeSubTab === 'pulsaInternet'}
              >
                Pulsa Internet
              </button>
              <button
                onClick={() => setActiveSubTab('pulsaNelpon')}
                className={`bg-gray-500 py-1 px-4 rounded-full ${activeSubTab === 'pulsaNelpon' ? 'bg-orange-400' : ''} hover:bg-orange-400`}
                aria-selected={activeSubTab === 'pulsaNelpon'}
              >
                Pulsa Nelpon
              </button>
            </div>
          </nav>
        )}
      </>
    );
  };
  

export default TabNavigation;
