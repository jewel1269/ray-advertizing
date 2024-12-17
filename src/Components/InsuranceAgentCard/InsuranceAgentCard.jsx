import { LuPhoneCall } from "react-icons/lu";
import banner from "../../Images/Frame 51.png";
import logo from "../../Images/Group 109.png";

const InsuranceAgentCard = () => {
  return (
    <div className="relative w-full lg:px-0 md:px-0 px-1 bg-white flex  items-center">
      {/* Background Image */}
      <div className="w-full relative">
        <img
          src={banner}
          alt="Car Background"
          className="w-full lg:h-[280px] h-[150px] object-cover"
        />
      </div>

      {/* Overlay Content */}
      <div className="absolute inset-0 flex items-center lg:left-72 lg:mt-20">
        <div className="">
          <button className="bg-orange-500 flex items-center gap-2 text-white font-semibold px-6 lg:mt-0 md:mt-8 mt-12 ml-4 lg:ml-0 md:ml-4 py-2 rounded shadow-md transform transition duration-300 hover:bg-blue-600 hover:scale-105">
          <LuPhoneCall /> Call Now
          </button>
        </div>
      </div>

      {/* Circular Image */}
      <div className="absolute lg:-bottom-8 md:right-40 right-8 lg:right-52">
        <div className="relative lg:w-96 md:w-80 md:h-80 w-32 h-32 lg:h-96 rounded-full border border-white shadow-lg overflow-hidden">
          <img
            src={logo}
            alt="Agent"
            className="w-full h-full lg:object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default InsuranceAgentCard;
