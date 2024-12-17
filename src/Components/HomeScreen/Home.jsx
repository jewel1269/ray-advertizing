import AboutSections from "../AboutSections/AboutSection";
import AutoInsurance from "../Banner/AutoInsurance.Banner";
import DisclaimerSection from "../DisclaimerSection/DisclaimerSection";
import InsuranceAgentCard from "../InsuranceAgentCard/InsuranceAgentCard";
import KeyBenefits from "../KeyBenefits/KeyBenefits";
import WhyChoose from "../WhyChoose/WhyChoose";

const HomePage = () => {
  return (
    <>
      <AutoInsurance />
      <AboutSections />
      <KeyBenefits />
      <WhyChoose />
      <InsuranceAgentCard />
      <DisclaimerSection />
    </>
  );
};

export default HomePage;
