import {
  Navbar,
  Hero,
  About,
  InfiniteScroll,
  Features,
  CTA,
  FAQ,
  Footer,
  JoinModal,
  InvestModal,
} from "../components";
import FadeInSection from "../components/FadeInSection";

function Landing() {
  return (
    <div className="">
      <Navbar />
      <Hero />

      <FadeInSection>
        <About />
      </FadeInSection>

      <InfiniteScroll />

      <FadeInSection>
        <Features />
      </FadeInSection>

      <FadeInSection>
        <CTA />
      </FadeInSection>

      <FadeInSection>
        <FAQ />
      </FadeInSection>
      <Footer />
      <JoinModal />
      <InvestModal />
    </div>
  );
}

export default Landing;
