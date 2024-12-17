import banner from "../../Images/Rectangle 21.png";
import img from "../../Images/Mask group.png";
import img1 from "../../Images/Mask group (1).png";
import img2 from "../../Images/Mask group (2).png";
import { LuPhoneCall } from "react-icons/lu";

const KeyBenefits = () => {
  return (
    <div className="relative">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${banner})`,
        }}
      ></div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#FFFFFF]/70 via-[#06336C]/80 to-[#0B3163]/90"></div>

      {/* Content */}
      <div className="relative text-white py-16 px-6 flex flex-col items-center">
        {/* Heading */}
        <h2 className="text-3xl font-bold mb-8 text-center">Key Benefits</h2>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-3 gap-8 text-center">
          {/* Benefit 1 */}
          <div>
            <div className="flex justify-center mb-4">
              {" "}
              <img src={img} alt="logo" className="h-16 w-16" />
            </div>
            <p className="font-semibold text-lg">
              Unlock Savings with <br /> Competitive Rates
            </p>
          </div>

          {/* Benefit 2 */}
          <div>
            <div className="flex justify-center mb-4">
              {" "}
              <img src={img1} alt="logo" className="h-16 w-16" />
            </div>
            <p className="font-semibold text-lg">
              Custom Plans to Fit Your <br /> Lifestyle and Budget
            </p>
          </div>

          {/* Benefit 3 */}
          <div>
            <div className="flex justify-center mb-4">
              {" "}
              <img src={img2} alt="logo" className="h-16 w-16" />
            </div>
            <p className="font-semibold text-lg">
              Switching Made Easy– We Do <br /> the Work for You
            </p>
          </div>
        </div>

        {/* Call Now Button */}
        <button className=" flex items-center gap-2  bg-orange-500 text-white font-semibold px-6 lg:mt-8 md:mt-8 mt-12 ml-4 lg:ml-0 md:ml-4 py-2 rounded shadow-md transform transition duration-300 hover:bg-blue-600 hover:scale-105">
          <LuPhoneCall /> Call Now
        </button>
      </div>
    </div>
  );
};

export default KeyBenefits;
