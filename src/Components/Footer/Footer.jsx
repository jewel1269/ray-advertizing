import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-white text-center text-gray-800 text-sm">
      {/* Links Section */}
      <div className="py-4 font-semibold ">
        <div className="flex items-center justify-center mb-3">
          <NavLink
            to="/privacy-policy"
            className="hover:underline mx-2 inline-block"
          >
            PRIVACY POLICY
          </NavLink>
          <span className="mx-2">|</span>
          <NavLink
            to="/TermsAndConditions"
            className="hover:underline mx-2 inline-block"
          >
            TERMS & CONDITIONS
          </NavLink>
        </div>
        <NavLink to="/" className="hover:underline mx-2 inline-block">
          DO NOT SELL OR SHARE MY PERSONAL INFORMATION
        </NavLink>
        <span className="mx-2">/</span>
        <NavLink to="/" className="hover:underline mx-2 inline-block">
          PRIVACY RIGHTS FOR RESIDENTS OF CERTAIN STATES
        </NavLink>
      </div>

      {/* Copyright Section */}
      <div className="bg-[#001634] text-lg text-white py-3">
        <p>© 2024 Auto Policy Quotes | All Rights Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
