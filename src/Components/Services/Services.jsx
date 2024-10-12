const Services = () => {
    const services = [
      {
        title: "Website development",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHyS7C4SxYeAlzOLl11RvwnatRf7BnOWmWKw&s", 
        icon: "https://i.pinimg.com/564x/1b/7a/c7/1b7ac786a1a5e31b6201eaeb14343f8a.jpg", 
      },
      {
        title: "Front-End development",
        img: "https://www.codersbrain.com/wp-content/uploads/2024/04/Front_end-Codersbrain.jpg", 
        icon: "https://as1.ftcdn.net/v2/jpg/02/29/98/84/1000_F_229988440_ZOkKYu5fI66iJyosi46PMuzBEIg98MDX.jpg",
      },
      {
        title: "Back-End development",
        img: "https://media.geeksforgeeks.org/wp-content/uploads/20240701150157/Backend-Development.webp",
        icon: "https://as2.ftcdn.net/v2/jpg/04/75/01/75/1000_F_475017553_91jWgCknT2GQncXLNq5Kcv5I9veccR2Z.jpg", 
      },
      {
        title: "Mobile applications development",
        img: "https://www.shinetechsoftware.com/wp-content/uploads/2024/05/mobile-app-development-methodologies.jpg", 
        icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9ZRzZGrcTLUSRQmXBcS4uJApOxUsoh4eNTg&s", 
      },
    ];
  
    return (
      <section className="py-16 bg-gray-900">
        <div className="container mx-auto px-4 ">
          <h2 className="text-3xl font-bold text-white mb-4">Our Services</h2>
          <p className="text-gray-400 mb-8">
            There are many variations of passages of available but majority alteration in some form, by humour or randomised words.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white shadow-lg rounded-lg overflow-hidden transform hover:scale-105 transition duration-300"
              >
                <img
                  src={service.img}
                  alt={service.title}
                  className="w-full h-56 "
                />
                <div className="p-6">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="text-xl font-bold">{service.title}</h3>
                    <img src={service.icon} alt="icon" className="h-8 w-8" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };
  
  export default Services;
  