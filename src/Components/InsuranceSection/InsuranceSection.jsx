export const InsuranceSection = () => {
    return (
      <div className="flex justify-around items-center bg-gradient-to-br from-slate-300 via-gray-100 to-slate-300 py-12">
        <section className="flex flex-col md:flex-row items-center justify-between max-w-7xl px-6 md:px-20">
          {/* Left Image */}
          <div className="w-full md:w-1/2">
            <img
              src="https://demo.7iquid.tech/insurx/wp-content/uploads/2024/07/img-2-home1.jpg"
              alt="Couple discussing insurance"
              className="rounded-2xl shadow-md w-full h-auto"
            />
          </div>
          {/* Right Text Content */}
          <div className="w-full md:w-1/2 mt-8 md:mt-0 md:pl-12">
            <h3 className="text-sm font-bold text-yellow-500">WHY CHOOSE US</h3>
            <h2 className="text-3xl font-bold text-gray-900 mt-2">
              Why Choose Us for Your Development Needs?
            </h2>
  
            <div className="mt-6">
              <h4 className="text-xl font-semibold text-teal-600">
                Transparent Pricing
              </h4>
              <p className="mt-2 text-black leading-relaxed">
                We offer clear and competitive pricing for all our services, ensuring there are no hidden fees. <br />
                You get exactly what you pay for, whether it is web, software, or Android app development.
              </p>
  
              <ul className="mt-4 space-y-4">
                <li className="text-black text-2xl font-bold">
                  24/7 Customer Support
                </li>
                <li className="text-black text-2xl font-bold">
                  Hassle-Free Claims Process
                </li>
                <p className="text-black mt-2">
                  <strong>Web Development:</strong> We ensure a streamlined process for building, launching, and maintaining your website, with regular updates and easy management.
                </p>
                <p className="text-black mt-2">
                  <strong>Software Development:</strong> We provide a smooth workflow from design to deployment, with fast and reliable bug fixes and updates.
                </p>
                <p className="text-black mt-2">
                  <strong>Android App Development:</strong> From development to app store submission, we make sure your app reaches your audience with minimal hassle and maximum efficiency.
                </p>
              </ul>
            </div>
          </div>
        </section>
      </div>
    );
  };
  