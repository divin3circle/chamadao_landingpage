import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import About from "../components/About";
import Features from "../components/Features";
import CTA from "../components/CTA";
import FAQ from "../components/FAQ";
import Footer from "../components/Footer";
import JoinModal from "../components/JoinModal";
import InvestModal from "../components/InvestModal";
import { InfiniteScroll } from "../components/InfiniteScrollCard";

function Landing() {
  return (
    <div className="">
      <Navbar />
      <Hero />
      <About />
      <InfiniteScroll />
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
