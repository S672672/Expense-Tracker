import React, { useState } from 'react';
import ConnectCard from '../Components/ConnectCard';

export default function Wallet() {
  const [showDashboard, setShowDashboard] = useState(false);

  const handleConnectWallet = () => {
    setShowDashboard(!showDashboard);
  };

  const handleCloseDashboard = () => {
    setShowDashboard(false);
  };

  return (
    <>
      <div className='flex flex-col items-start m-10 justify-center'>
        <p className='text-lg font-bold mb-2 m-4'>Connect Wallet</p>
        <button className='p-4 cursor-pointer w-40 m-2 bg-blue-400 rounded-lg' onClick={handleConnectWallet}>
          Connect wallet
        </button>
      </div>

      <div className='m-3 max-w-screen-md mx-auto flex items-center p-4 rounded-md shadow-md font-bold'>
        <div className='w-1/2 pr-6'>
          <div className='mb-4'>
            <label htmlFor='cardNumber' className='block mb-2'>
              Card Number:
              <input
                id='cardNumber'
                type='text'
                placeholder='Enter card number'
                className='w-full p-2 rounded-md border'
              />
            </label>
          </div>

          <div className='flex flex-wrap mb-4'>
            <div className='w-1/2 pr-2'>
              <label htmlFor='expiryDate' className='block'>
                Expiry Date:
                <input
                  id='expiryDate'
                  type='text'
                  placeholder='MM/YY'
                  className='w-full p-2 rounded-md border'
                />
              </label>
            </div>
            <div className='w-1/2 pl-2'>
              <label htmlFor='ccv' className='block'>
                CCV:
                <input id='ccv' type='text' placeholder='CCV' className='w-full p-2 rounded-md border' />
              </label>
            </div>
          </div>

          <div className='mb-4'>
            <label htmlFor='cardHolderName' className='block mb-2'>
              Cardholder Name:
              <input
                id='cardHolderName'
                type='text'
                placeholder='Enter cardholder name'
                className='w-full p-2 rounded-md border'
              />
            </label>
          </div>

          <button type='button' className='bg-blue-500 text-white p-2 rounded-md mt-4'>
            Save
          </button>
        </div>

        <div className='w-1/2 border-l-2 border-gray-300 pl-6'>
          <img
            src='./src/assets/creditcard.jpg'
            alt='Credit Card'
            className='w-full h-auto object-cover'
          />
        </div>
      </div>

      {showDashboard && (
        <div className='fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75'>
          <div className='bg-white p-6 rounded-md'>
            <div className='flex justify-between gap-4 mb-4'>
              <p className='text-lg font-bold'>Connect Wallet</p>
              <div className='cursor-pointer' onClick={handleCloseDashboard}>
                &#10006;
              </div>
            </div>
            <hr className='border-t-2 border-gray-800 mb-5' />
            <div className='flex flex-col text-gray-500 text-lg font-bold'>Connect with one of our available wallet providers<span> or create a new one</span></div>
            <ConnectCard name="esewa" />
            <ConnectCard name="esewa" />
            <ConnectCard name="esewa" />
            <ConnectCard name="esewa" />
            <ConnectCard name="esewa" />
            <ConnectCard name="esewa" />
            <ConnectCard name="esewa" />
            <div className='text-gray-500 text-lg font-bold cursor-pointer'>Why do i need to connect with my wallet?</div>
          </div>
        </div>
      )}
    </>
  );
}
