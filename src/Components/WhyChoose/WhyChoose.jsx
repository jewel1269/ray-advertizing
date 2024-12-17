import { BsCheckCircle } from "react-icons/bs";
import img1 from "../../Images/Rectangle24.png";
import img2 from "../../Images/Rectangle25.png";
import img3 from "../../Images/Rectangle26.png";

const WhyChoose = () => {
  return (
    <div className="w-full bg-white py-16 px-4">
      {/* Header Section */}
      <h2 className="text-center text-4xl font-bold text-blue-600 mb-2">
        Why Choose
      </h2>
      <h3 className="text-center text-3xl font-bold text-orange-500 mb-8">
        AutoPolicyQuote.com?
      </h3>

      {/* Main Container */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-7xl mx-auto ">
        {/* Text Section */}
        <div className="space-y-8">
          {/* Feature 1 */}
          <div className="flex items-start">
            <BsCheckCircle className="text-blue-500 text-3xl mr-4" />
            <div>
              <h4 className="text-2xl font-bold text-blue-600 mb-1">
                We’re Independent
              </h4>
              <p className="text-gray-600 text-lg">
                We’re not tied to any single insurer, ensuring unbiased , <br />{" "}
                recommendations.
              </p>
            </div>
          </div>

          {/* Feature 2 */}
          <div className="flex items-start">
            <BsCheckCircle className="text-blue-500 text-3xl mr-4" />
            <div>
              <h4 className="text-2xl font-bold text-blue-600 mb-1">
                Save Time & Money
              </h4>
              <p className="text-gray-600 text-lg">
                Our experts connect you to affordable plans that meet your needs
                quickly.
              </p>
            </div>
          </div>

          {/* Feature 3 */}
          <div className="flex items-start">
            <BsCheckCircle className="text-blue-500 text-3xl mr-4" />
            <div>
              <h4 className="text-2xl font-bold text-blue-600 mb-1">
                Coverage for Everyone
              </h4>
              <p className="text-gray-600 text-lg">
                Whether you are insured or uninsured, we have options for you.
              </p>
            </div>
          </div>
        </div>

        {/* Image Section */}
        <div className="relative w-full h-full flex flex-col items-center justify-center space-y-4">
          {/* Image 1 */}
          <img
            src={img1}
            alt="Driver 1"
            className="border-4 border-r-indigo-600 border-t-indigo-600 rounded-lg shadow-lg w-48 md:w-60"
          />

          {/* Image 2 */}
          <img
            src={img2}
            alt="Driver 2"
            className="relative left-16 md:left-28 -top-12 md:top-0 lg:-top-16 border-4 border-r-indigo-600 border-t-indigo-600 rounded-lg shadow-lg w-48 md:w-60"
          />

          {/* Image 3 */}
          <img
            src={img3}
            alt="Driver 3"
            className="relative -top-24 lg:-top-28 lg:right-10 md:top-0 right-7 md:right-0 border-4 border-r-indigo-600 border-t-indigo-600 rounded-lg shadow-lg w-48 md:w-60"
          />
        </div>
      </div>
    </div>
  );
};

export default WhyChoose;
