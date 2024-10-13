import ContactForm from "../ContactForm/ContactForm";
import Footer from "../Footer/Footer";
import { InsuranceSection } from "../InsuranceSection/InsuranceSection";
import Services from "../Services/Services";
import Header from "./DefaultHomePage/Header/Header";

const HomePage = () => {
  return (
    <>
      <Header />

      <Services />
      <InsuranceSection />
      <ContactForm/>
      <Footer/>
    </>
  );
};

export default HomePage;
