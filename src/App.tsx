import { DemoBanner } from "@/components/DemoBanner";
import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { TrustBar } from "@/components/TrustBar";
import { Services } from "@/components/Services";
import { Differentials } from "@/components/Differentials";
import { Stores } from "@/components/Stores";
import { SocialProof } from "@/components/SocialProof";
import { FinalCta } from "@/components/FinalCta";
import { Footer } from "@/components/Footer";

function App() {
  return (
    <>
      <DemoBanner />
      <Nav />
      <main>
        <Hero />
        <TrustBar />
        <Services />
        <Differentials />
        <Stores />
        <SocialProof />
        <FinalCta />
      </main>
      <Footer />
    </>
  );
}

export default App;
