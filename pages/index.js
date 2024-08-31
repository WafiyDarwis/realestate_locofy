import Header from "../components/header";
import HeroSection from "../components/hero-section";
import AreaContainer from "../components/area-container";
import FeatureContainer from "../components/feature-container";
import RentPropertiesContainer from "../components/rent-properties-container";
import RentPropertiesForm from "../components/rent-properties-form";
import Contact from "../components/contact";
import FooterSection from "../components/footer-section";

const LandingPage = () => {
  return (
    <div className="w-full relative bg-gray-white flex flex-col items-center justify-start">
      <Header />
      <HeroSection />
      <AreaContainer />
      <FeatureContainer />
      <RentPropertiesContainer />
      <RentPropertiesForm />
      <Contact />
      <FooterSection propOverflow="unset" />
    </div>
  );
};

export default LandingPage;
