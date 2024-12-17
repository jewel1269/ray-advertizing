import partner from "../../Images/Frame 43.png";
import share from "../../Images/Share.png";
import moneyBox from "../../Images/Money Box.png";
import money from "../../Images/Comparing.png";

const AboutSections = () => {
  return (
    <div className="bg-white w-full lg:px-0 md:px-0 px-1">
      {/* Partners Section */}
      <div className="bg-orange-500 py-4">
        <h3 className="text-center text-white text-lg font-bold uppercase mb-4">
          Our Partners
        </h3>
        <div className="flex justify-center items-center space-x-8">
          <img src={partner} alt="Travelers" className="h-8" />
        </div>
      </div>

      {/* How It Works Section */}
      <div className="py-16 text-center">
        <h2 className="text-4xl font-bold text-blue-600 mb-2">How It Works</h2>
        <p className="text-gray-600 mb-8">
          See How Much You Can Save in 3 Simple Steps
        </p>

        {/* 3 Cards Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto px-4">
          {/* Card 1 */}
          <div className="group bg-white shadow-xl border rounded-lg p-8 text-center transform transition-all duration-300 hover:scale-105 hover:bg-gradient-to-b hover:from-[#F9FAFB] hover:to-[#E6F1FF] hover:shadow-xl">
            <div className="w-16 h-16 mx-auto bg-[#D1D5DB] flex items-center justify-center rounded-full mb-4 transition duration-300 group-hover:bg-[#E6F1FF]">
              <img
                src={share}
                alt="Share Info"
                className="w-8 h-8 transition duration-300 group-hover:scale-110"
              />
            </div>
            <h3 className="text-lg font-bold text-[#1E79E6] mb-2">
              Share Your Info
            </h3>
            <p className="text-gray-500">
              Provide a few details about yourself and your vehicle.
            </p>
          </div>

          {/* Card 2 */}
          <div className="group bg-white shadow-xl border rounded-lg p-8 text-center transform transition-all duration-300 hover:scale-105 hover:bg-gradient-to-b hover:from-[#F9FAFB] hover:to-[#E6F1FF] hover:shadow-xl">
            <div className="w-16 h-16 mx-auto bg-[#D1D5DB] flex items-center justify-center rounded-full mb-4 transition duration-300 group-hover:bg-[#E6F1FF]">
              <img
                src={money}
                alt="Tailored Options"
                className="w-8 h-8 transition duration-300 group-hover:scale-110"
              />
            </div>
            <h3 className="text-lg font-bold text-[#1E79E6] mb-2">
              Get Tailored Options
            </h3>
            <p className="text-gray-500">
              Receive personalized recommendations from our trusted agents.
            </p>
          </div>

          {/* Card 3 */}
          <div className="group bg-white shadow-xl border rounded-lg p-8 text-center transform transition-all duration-300 hover:scale-105 hover:bg-gradient-to-b hover:from-[#F9FAFB] hover:to-[#E6F1FF] hover:shadow-xl">
            <div className="w-16 h-16 mx-auto bg-[#D1D5DB] flex items-center justify-center rounded-full mb-4 transition duration-300 group-hover:bg-[#E6F1FF]">
              <img
                src={moneyBox}
                alt="Start Saving"
                className="w-8 h-8 transition duration-300 group-hover:scale-110"
              />
            </div>
            <h3 className="text-lg font-bold text-[#1E79E6] mb-2">
              Start Saving
            </h3>
            <p className="text-gray-500">
              Compare and select the best option for your needs.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSections;
