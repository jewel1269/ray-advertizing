
import { useState } from "react";
import banner from "../../Images/Group 96.png";
import { LuPhoneCall } from "react-icons/lu";

const AutoInsurance = () => {
  const [showCongrats, setShowCongrats] = useState(false); 

  const handleSelection = () => {
    setShowCongrats(true); 
  };

  return (
    <div className="relative bg-gray-900 text-white min-h-screen">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-white bg-center opacity-50"
        style={{ backgroundImage: `url(${banner})` }}
      ></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-screen px-4 text-center">
        {/* Header */}
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Switch and Save Big on{" "}
          <span className="text-orange-500">Auto Insurance</span>
        </h1>
        <h2 className="text-3xl font-extrabold mb-6 text-orange-400">
          Up to <span className="text-white">$500</span> a Year!
        </h2>

        {/* Conditional Rendering */}
        {!showCongrats ? (
          // Question Interface
          <div className="bg-black/70 lg:w-96 lg:h-48 rounded-lg shadow-lg px-8 py-6 inline-block">
            <p className="text-2xl font-semibold mb-4">
              How many vehicles <br/> do you have?
            </p>
            <div className="flex justify-center gap-4">
              {/* Option Buttons */}
              <button
                className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 px-6 rounded-lg"
                onClick={() => handleSelection(1)}
              >
                1
              </button>
              <button
                className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 px-6 rounded-lg"
                onClick={() => handleSelection(2)}
              >
                2
              </button>
              <button
                className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 px-6 rounded-lg"
                onClick={() => handleSelection("3+")}
              >
                3+
              </button>
            </div>
          </div>
        ) : (
          // Congratulations Interface
          <div className="bg-black/70 rounded-lg shadow-lg px-8 py-6 inline-block">
            <h2 className="text-2xl font-bold text-orange-500 mb-4">
              🎉 Congratulations!
            </h2>
            <p className="text-xl text-white mb-4">
              You May Be Eligible to Enroll in a heavily <br/>
              Discounted Insurance plan & <br/>
              <span className="text-sm">Check The Number below To call and secure your deal </span>
            </p>
           <div className="flex justify-center">
           <button
              className="bg-orange-500 flex items-center justify-center gap-2 hover:bg-orange-600 text-white font-semibold py-2 px-6 rounded-lg"
              onClick={() => setShowCongrats(false)} // Reset to question view
            >
              <LuPhoneCall /> (855)555-1094
            </button>
           </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AutoInsurance;
