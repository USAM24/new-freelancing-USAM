import React, { useState } from 'react';

const CardPayment = () => {
  const [cardNumber, setCardNumber] = useState('');
  const [expirationDate, setExpirationDate] = useState('');
  const [cvv, setCvv] = useState('');
  const [saveCardDetails, setSaveCardDetails] = useState(false);
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    
    // Validate card number (basic validation)
    if (!cardNumber.match(/^\d{16}$/)) {
      newErrors.cardNumber = 'Invalid card number';
    }
    
    // Validate expiration date (MM/YY format)
    if (!expirationDate.match(/^(0[1-9]|1[0-2])\/?([0-9]{2})$/)) {
      newErrors.expirationDate = 'Invalid expiration date (MM/YY)';
    }
    
    // Validate CVV (3 digits)
    if (!cvv.match(/^\d{3}$/)) {
      newErrors.cvv = 'Invalid CVV';
    }

    setErrors(newErrors);
    
    // Return true if there are no errors
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate inputs before submitting
    if (validateForm()) {
      // Proceed with the payment process (e.g., send data to the backend) 
      
      alert('Payment processed!');
    }
  };

  return (
    <form className='py-10 flex flex-col justify-between' onSubmit={handleSubmit}>
      <div className='flex flex-col gap-3'>
        {/* Card Number */}
        <div className="mb-4">
          <label className="block text-lg font-medium mb-2">Card Number</label>
          <input
            type="text"
            className={`w-full py-3 px-4 h-12 border-[1.5px] dark:text-black ${errors.cardNumber ? 'border-red-500' : 'border-[#ACACAC]'} rounded-md`}
            placeholder="1234 5678 9101 1121"
            value={cardNumber}
            onChange={(e) => setCardNumber(e.target.value)}
          />
          {errors.cardNumber && <span className="text-red-500 text-sm">{errors.cardNumber}</span>}
        </div>

        {/* Expiration Date and CVV */}
        <div className="flex gap-4 mb-4">
          {/* Expiration Date */}
          <div className="w-1/2">
            <label className="block text-lg font-medium mb-2">Expiration Date</label>
            <input
              type="text"
              className={`w-full py-3 px-4 h-12 border-[1.5px] dark:text-black ${errors.expirationDate ? 'border-red-500' : 'border-[#ACACAC]'} rounded-md`}
              placeholder="MM/YY"
              value={expirationDate}
              onChange={(e) => setExpirationDate(e.target.value)}
            />
            {errors.expirationDate && <span className="text-red-500 text-sm">{errors.expirationDate}</span>}
          </div>

          {/* CVV */}
          <div className="w-1/2">
            <label className="block text-lg font-medium mb-2">CVV</label>
            <input
              type="text"
              className={`w-full py-3 px-4 h-12 border-[1.5px] dark:text-black ${errors.cvv ? 'border-red-500' : 'border-[#ACACAC]'} rounded-md`}
              placeholder="123"
              value={cvv}
              onChange={(e) => setCvv(e.target.value)}
            />
            {errors.cvv && <span className="text-red-500 text-sm">{errors.cvv}</span>}
          </div>
        </div>

        {/* Save Card Details */}
        <div className="mb-8">
          <label className="flex items-center">
            <input
              type="checkbox"
              className='w-4 h-4 text-[#ACACAC]'
              checked={saveCardDetails}
              onChange={(e) => setSaveCardDetails(e.target.checked)}
            />
            <span className="ml-2 text-[#ACACAC]">Save card details</span>
          </label>
        </div>
      </div>

      {/* Submit Button */}
      <div>
        <div className='flex justify-center items-center'>
          <button
            type="submit"
            className="bg-primary-700 text-white font-semibold text-md w-full py-5 rounded-md"
          >
            Pay USD59.28
          </button>
        </div>

        {/* Privacy Policy */}
        <div className='text-sm text-[#ACACAC] py-6 font-light'>
          Your personal data will be used to process your order, support your experience throughout this website, and for other purposes described in our privacy policy.
        </div>
      </div>
    </form>
  );
};

export default CardPayment;
