import Hero from "../components/Hero";
import Navbar from "../components/Navbar";

function Landing() {
  return (
    <div className="overflow-hidden">
      <div className="absolute top-0 left-0 right-0 z-10 flex justify-center items-center">
        <Navbar />
      </div>
      <section>
        <Hero />
      </section>
      <img src="/corner.png" alt="Corner" className="absolute top-0 right-0" />
    </div>
  );
}

export default Landing;
