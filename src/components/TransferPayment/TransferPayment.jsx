import { useState } from "react";
import { useEffect } from "react";
const TransferPayment= () => {
   
    const bankDetails={
        amount:'49.80',
        name:'Polaris Bank',
        accountNumber:'0123456781',
        expiration:"10000000"
    }
   
    const [timeLeft, setTimeLeft] = useState(600); // 600 seconds = 10 minutes
    
      // Countdown logic
        useEffect(() => {
            if (timeLeft > 0) {
            const timerId = setInterval(() => {
                setTimeLeft(prevTime => prevTime - 1);
            }, 1000);

            return () => clearInterval(timerId); // Cleanup when component unmounts or timeLeft changes
            }
        }, [timeLeft]);

  // Format time as MM:SS
  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
  };

    return(
    <form className="flex flex-col justify-between items-center py-10">
       <div className="flex flex-col justify-center items-center m-8 ">
          <p className="text-xl mb-6 font-light text-[#ACACAC]">Transfer USD${bankDetails.amount} to:</p>
          <p className="font-medium text-2xl">{bankDetails.name}</p>
          <p className="text-4xl font-medium">{bankDetails.accountNumber}</p>
          <p className="text-[#ACACAC] text-xl mt-6 font-light">
            Expires in <span className="text-red-500 ">{timeLeft > 0 ? formatTime(timeLeft) : '00:00'} </span> minutes
          </p>
        </div>
      <div className="flex flex-col">
        <div className='flex justify-center '>
                <button type="submit" disabled={timeLeft <= 0} className="bg-primary-700 text-white font-semibold text-md w-full py-5 rounded-md">
                 Confirm Payment
                </button>
        </div>
            <div className='text-sm text-[#ACACAC] py-6 font-light '>
                Your personal data will be used to process your order, support your experience throughout this website, and for other purposes described in our privacy policy.
            </div>
    </div>

    </form>
  )};
  export default TransferPayment;