import React from 'react';
import { useState } from 'react';
import cardImage from '../../assets/paymentCard.svg';
import bankImage from '../../assets/paymentBank.svg';
import transferImage from '../../assets/mobilePayment.svg';
import CardPayment from '../../components/CardPayment/CardPayment.jsx'
import BankPayment from '../../components/BankPayment/BankPayment.jsx'
import TransferPayment from '../../components/TransferPayment/TransferPayment.jsx'

const PaymentPage = () => {
  const [paymentMethod ,setPaymentMethod]=useState('card');

  const getImageForPaymentMethod =() => {
    switch(paymentMethod){
      case'card':
        return cardImage;
      case'bank':
        return bankImage;
      case'transfer':
        return transferImage;
      default:
        return cardImage;
    }
  }
  return (
    <div className=' lg:px-12 py-10 flex flex-col md:flex-row'>

      {/* Left side: Form and Radio Buttons */}
      <div className='md:w-1/2 p-10 md:p-20 w-full'>
        <h2 className='border-b-2 border-b-[#ACACAC] py-7 font-semibold text-3xl'>Payment</h2>
        

        {/* Radio Buttons to Select Payment Method */}
        <div className="mb-4">
            <label className="block text-xl font-semibold mb-2 mt-8 ">Pay With:</label>
            <div className="flex gap-4 text-lg">
              <label className="flex items-center ">
                <input
                  className='w-4 h-4'
                  type="radio"
                  name="paymentMethod"
                  value="card"
                  checked={paymentMethod === 'card'}
                  onChange={() => setPaymentMethod('card')}
                />
                <span className="ml-2">Card</span>
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  name="paymentMethod"
                  value="bank"
                  className="h-4 w-4"
                  checked={paymentMethod === 'bank'}
                  onChange={() => setPaymentMethod('bank')}
                />
                <span className="ml-2">Bank</span>
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  name="paymentMethod"
                  value="transfer"
                  className='h-4 w-4'
                  checked={paymentMethod === 'transfer'}
                  onChange={() => setPaymentMethod('transfer')}
                />
                <span className="ml-2">Transfer</span>
              </label>
              
            </div>
            <div className='h-[530px] flex justify-between'>
            {paymentMethod==='card' && <CardPayment />}
            {paymentMethod==='bank' && <BankPayment />}
            {paymentMethod=='transfer' && <TransferPayment />}
            </div>
          </div>

      </div>

      <div className='hidden lg:w-1/2  lg:flex items-center justify-center'>
          <img src={getImageForPaymentMethod()} alt={paymentMethod}  >
          </img>
      </div>


  </div>);
}

export default PaymentPage;
