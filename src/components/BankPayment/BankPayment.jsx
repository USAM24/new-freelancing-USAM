import { useState } from "react";

const BankPayment = () => {
    const [selectedBank, setSelectedBank] = useState("");

    // Determine if the placeholder should have placeholder-like color
    const isPlaceholderSelected = selectedBank === "";
    return(
    <form className='py-10 flex flex-col justify-between '>
      <div className="mb-4">
        <select
            value={selectedBank}
            onChange={(e) => setSelectedBank(e.target.value)}
            className={`w-full p-2 border-[1.5px] border-[#ACACAC] rounded-md dark:text-black ${
            isPlaceholderSelected ? "text-[#ACACAC]" : "text-black"
            }`}
        >
            <option value="" disabled>
            Choose your bank
            </option>
            <option value="bankOfAmerica">Bank of America</option>
            <option value="chaseBank">Chase Bank</option>
            <option value="wellsFargo">Wells Fargo</option>
            {/* Add more bank options as needed */}
        </select>

      </div>
  
    <div className="flex flex-col">
      <div className='flex justify-center '>
            <button type="submit" className="bg-primary-700 text-white font-semibold text-md w-full py-5 rounded-md">
              Pay USD59.28
            </button>
        </div>

        <div className='text-sm text-[#ACACAC] py-6 font-light '>
         Your personal data will be used to process your order, support your experience throughout this website, and for other purposes described in our privacy policy.
        </div>
    </div>
    </form>
  );
}
export default BankPayment;