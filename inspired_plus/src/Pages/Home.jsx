import Hero from "../../src/components/Home/Hero";
import About from "../components/Home/About";
import Panels from "../components/Home/Panels";
import ApprenticeshipSection from "../components/Home/ApprenticeshipSection";
import TestimonialSlider from "../components/Home/TestimonialSlider";
import ConsultationForm from "../components/Home/ConsultationForm";

function Home() {
  return (
    <div>
      <Hero />
      <About />
      <Panels />
      <ApprenticeshipSection />
      <TestimonialSlider />
      < ConsultationForm />
    
    </div>
  );
}

export default Home;