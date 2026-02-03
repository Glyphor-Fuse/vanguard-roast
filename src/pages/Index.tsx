import Hero from "@/components/Hero";
import MoodTicker from "@/components/MoodTicker";
import ZineGallery from "@/components/ZineGallery";
import CurrentRotation from "@/components/CurrentRotation";
import Footer from "@/components/Footer";

export default function Index() {
  return (
    <main className="min-h-screen bg-background">
      <Hero />
      <MoodTicker />
      <ZineGallery />
      <CurrentRotation />
      <Footer />
    </main>
  );
}