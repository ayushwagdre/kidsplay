import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import About from "@/components/about";
import Programs from "@/components/programs";
import Gallery from "@/components/gallery";
import Admissions from "@/components/admissions";
import Testimonials from "@/components/testimonials";
import FAQ from "@/components/faq";
import Contact from "@/components/contact";
import Footer from "@/components/footer";
import FloatingShapes from "@/components/floating-shapes";
import FloatingWhatsApp from "@/components/floating-whatsapp";

export default function Home() {
  return (
    <div className="font-inter bg-white">
      <FloatingShapes />
      <Navbar />
      <Hero />
      <About />
      <Programs />
      <Gallery />
      <Admissions />
      <Testimonials />
      <FAQ />
      <Contact />
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
