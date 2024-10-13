const ContactForm = () => {
    return (
      <div className="bg-gradient-to-br from-slate-300 via-gray-100 to-slate-300 flex justify-center items-center min-h-screen">
        <div className="shadow-lg rounded-lg p-8 max-w-7xl mx-auto flex flex-col md:flex-row ">
          {/* Left Side */}
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h1 className="text-4xl font-bold text-black mb-4">Secure your financial future</h1>
            <p className="text-gray-600 mb-8">
              We’re happy to answer any questions you may have and help you determine which of our services best fit your needs.
            </p>
            <div className="text-gray-700 mb-4">
              <p className="font-semibold">CALL US FOR ANY QUESTIONS</p>
              <p className="text-xl font-bold">+123 456 56 67</p>
            </div>
            <div className="text-gray-700">
              <p className="font-semibold">CALL US FOR ANY QUESTIONS</p>
              <p className="text-xl font-bold">insurx@template.com</p>
            </div>
            <div className="mt-8">
              <img src="https://via.placeholder.com/200" alt="umbrella" className="w-1/2" />
            </div>
          </div>
  
          {/* Right Side */}
          <div className="md:w-1/2">
            <form className="space-y-4">
              <div className="flex space-x-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-1/2 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-1/2 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                />
              </div>
              <div className="flex space-x-4">
                <select
                  className="w-1/2 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                  defaultValue=""
                >
                  <option value="" disabled>Select Your Needs</option>
                  <option value="custom">Custom Website</option>
                  <option value="frontend">Front-End Website</option>
                  <option value="backend">Back-End Website</option>
                  <option value="app">Android App Application </option>
                </select>
                <input
                  type="text"
                  placeholder="Phone Number"
                  className="w-1/2 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                />
              </div>
              <textarea
                placeholder="Your Message"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                rows="4"
              ></textarea>
              <button
                type="submit"
                className="w-full bg-green-500 text-white py-3 rounded-md font-bold hover:bg-green-600 transition duration-300"
              >
                SUBMIT NOW
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  };
  
  export default ContactForm;
  