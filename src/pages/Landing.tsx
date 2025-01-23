import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import About from "../components/About";
import Features from "../components/Features";
import CTA from "../components/CTA";
import FAQ from "../components/FAQ";
import Footer from "../components/Footer";
import JoinModal from "../components/JoinModal";
import InvestModal from "../components/InvestModal";

function Landing() {
  return (
    <div className="max-w-[1240px] mx-auto my-0">
      <Navbar />
      <Hero />
      <About />
      <Features />
      <CTA />
      <FAQ />
      <Footer />
      <JoinModal />
      <InvestModal />
    </div>
  );
}

export default Landing;
