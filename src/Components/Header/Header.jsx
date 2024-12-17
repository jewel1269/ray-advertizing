import { NavLink } from "react-router-dom";
import logo from "../../Images/Group 47 2.png";
import { LuPhoneCall } from "react-icons/lu";

const Header = () => {
  // Color

  return (
    <div
      className={`flex bg-[#011733] justify-between items-center lg:px-16 lg:py-2`}
    >
      <NavLink to={"/"}>
        <img src={logo} alt="Logo" className="" />
      </NavLink>
      <div className="text-white lg:text-lg text-sm font-bold">
        <p>
          Rates as low as <span className="text-blue-600">$34/month</span>
        </p>
        <div className="flex items-center gap-2">
        <LuPhoneCall />
          <h1>(855) 555-1094</h1>
        </div>
      </div>
    </div>
  );
};

export default Header;
