
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa"; // Social Media Icons
import { MdEmail, MdPhone, MdLocationOn } from "react-icons/md"; // Contact Icons

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Branding */}
          <div>
            <h2 className="text-2xl font-bold">SOFTWEB</h2>
            <p className="mt-2">Power Up Your Business</p>
            <p className="mt-4 font-semibold">Follow us on</p>
            <div className="flex space-x-4 mt-4">
              {/* Colorful Social Media Icons */}
              <a href="#" className="text-yellow-400 hover:text-yellow-300">
                <FaFacebook size={28} />
              </a>
              <a href="#" className="text-pink-600 hover:text-pink-500">
                <FaInstagram size={28} />
              </a>
              <a href="#" className="text-blue-400 hover:text-blue-300">
                <FaTwitter size={28} />
              </a>
              <a href="#" className="text-red-600 hover:text-red-500">
                <FaYoutube size={28} />
              </a>
            </div>
            <p className="mt-4">Download Our Mobile App</p>
            <div className="flex space-x-4 mt-4">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                alt="Google Play"
                className="w-24"
              />
              <img
                src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
                alt="App Store"
                className="w-24"
              />
            </div>
          </div>

          {/* Pages */}
          <div>
            <h3 className="font-bold mb-4">Pages</h3>
            <ul>
              <li className="mb-2"><a href="#" className="hover:text-gray-400">Home</a></li>
              <li className="mb-2"><a href="#" className="hover:text-gray-400">About</a></li>
              <li className="mb-2"><a href="#" className="hover:text-gray-400">Services</a></li>
              <li className="mb-2"><a href="#" className="hover:text-gray-400">Pricing</a></li>
              <li className="mb-2"><a href="#" className="hover:text-gray-400">Instruction</a></li>
              <li className="mb-2"><a href="#" className="hover:text-gray-400">Contact Us</a></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-bold mb-4">Legal</h3>
            <ul>
              <li className="mb-2"><a href="#" className="hover:text-gray-400">Blogs</a></li>
              <li className="mb-2"><a href="#" className="hover:text-gray-400">Privacy Policy</a></li>
              <li className="mb-2"><a href="#" className="hover:text-gray-400">Return & Refund Policy</a></li>
              <li className="mb-2"><a href="#" className="hover:text-gray-400">Terms & Conditions</a></li>
              <li className="mb-2"><a href="#" className="hover:text-gray-400">Affiliate Program</a></li>
              <li className="mb-2"><a href="#" className="hover:text-gray-400">Login</a></li>
              <li className="mb-2"><a href="#" className="hover:text-gray-400">Career</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-bold mb-4">Contact Us</h3>
            <ul>
              <li className="mb-4 flex items-center space-x-2">
                <MdEmail className="text-yellow-400" size={24} />
                <span>info@softweb.com</span>
              </li>
              <li className="mb-4 flex items-center space-x-2">
                <MdPhone className="text-yellow-400" size={24} />
                <span>+123 456 7890</span>
              </li>
              <li className="mb-4 flex items-center space-x-2">
                <MdLocationOn className="text-yellow-400" size={24} />
                <span>4th Floor, House 39, Road 20, Dhaka 1229</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
