import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Sections from "../DisclaimerSection/HighlightedSection/Sections";

const Roots = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <Header />

      {/* Main Content */}
      <main className="flex-grow">
        <Outlet />
      </main>

      {/* Highlited Sections */}
      <Sections />

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Roots;
