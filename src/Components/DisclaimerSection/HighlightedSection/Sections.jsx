import icons from "../../../Images/Frame 52.png";

const Sections = () => {
  return (
   <div className="lg:px-0 md:px-4 px-4 border-b shadow-xl shadow-black">
     <div className="mt-8 border-t  h-32 pt-6">
      <h3 className="text-center text-blue-600 font-bold mb-4 text-lg">
        HIGHLIGHTED ON
      </h3>
      <div className="flex flex-wrap justify-center items-center gap-6">
        {/* Logos */}
        <img src={icons} alt="CBS News" className="h-10 w-auto" />
      </div>
    </div>
   </div>
  );
};

export default Sections;
