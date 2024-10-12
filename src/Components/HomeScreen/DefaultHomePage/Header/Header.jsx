import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Video Background */}
      <div className="absolute top-0 left-0 w-full h-full z-[-1]">
        <video
          className="w-full h-full object-cover filter blur-sm brightness-150"
          src="/src/assets/video/7989833-hd_1920_1080_25fps.mp4"
          autoPlay
          loop
          muted
          playsInline
        ></video>
      </div>

      {/* Header */}
      <header className="bg-black bg-opacity-70">
        <div className="max-w-7xl mx-auto flex justify-between items-center p-4 text-white">
          {/* Logo */}
          <div className="text-yellow-500 text-2xl font-bold">
            <span className="text-white">Soft</span>Web
          </div>

          {/* Navigation Bar */}
          <nav className="hidden md:flex  space-x-8 text-sm">
            <div className="relative divide-x-2 group">
              <a href="#" className="hover:text-yellow-500 divide-x-2">Home</a>
              <div className="absolute top-full left-0 w-max invisible group-hover:visible bg-black bg-opacity-90 mt-2 p-2 text-left rounded-lg">
                <a href="#" className="block px-4 py-2 hover:bg-yellow-500">Submenu 1</a>
                <a href="#" className="block px-4 py-2 hover:bg-yellow-500">Submenu 2</a>
              </div>
            </div>
            <div className="relative divide-x-2 group">
              <a href="#" className="hover:text-yellow-500">Projects</a>
              <div className="absolute top-full left-0 w-max invisible group-hover:visible bg-black bg-opacity-90 mt-2 p-2 text-left rounded-lg">
                <a href="#" className="block px-4 py-2 hover:bg-yellow-500">Submenu 1</a>
                <a href="#" className="block px-4 py-2 hover:bg-yellow-500">Submenu 2</a>
              </div>
            </div>
            <NavLink to="#" className="hover:text-yellow-500">Services</NavLink>
            <NavLink to="#" className="hover:text-yellow-500">Contact</NavLink>
          </nav>

          {/* Contact Info */}
          <div className="hidden lg:flex space-x-4 text-sm">
            <a href="mailto:needhelp@company.com" className="hover:text-yellow-500">softweb@gmail.com</a>
            <span>Uttara Sector-10, Dhaka, Bangladesh</span>
            <span>+8801684321082</span>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden">
            <button className="text-yellow-500">☰</button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="flex flex-col justify-center items-center h-screen text-center text-white bg-black bg-opacity-40 p-4">
        <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-4">
          SoftWeb Agency for Your{" "}
          <span className="relative">
            <span className="text-yellow-500">Business</span>
            <span className="absolute inset-0 border-4 border-yellow-500 rounded-full blur-lg opacity-50 z-[-1]"></span>
          </span>
        </h1>
        <p className="text-base sm:text-lg md:text-xl mb-8">
          We help grow your business with creative digital solutions.
        </p>
        <button className="px-6 py-3 bg-yellow-500 text-black font-semibold rounded hover:bg-yellow-600">
          Discover More
        </button>
      </section>
    </div>
  );
};

export default Header;
