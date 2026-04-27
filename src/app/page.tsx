import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";

export default function Home() {
  return (
    <main>
      <div className="page-wrapper">
        <div className="hero-card">
          <Navbar />
          <HeroSection />
        </div>
      </div>
    </main>
  );
}
