import Header from "../components/Header";
import Hero from "../components/Hero";
import About from "../components/About";
import Services from "../components/Services";
import Contact from "../components/Contact";
import Advantages from "../components/Advantages";
import Gallery from "../components/Gallery";
import Footer from "../components/Footer";
import Process from "../components/Process";

export default function Home() {
  return (
    <>
      <Header />

      <main>
        <Hero />
        <About />
        <Services />
          <Process />
        <Advantages />
           <Gallery />
        <Contact />
        <Footer />
      </main>
    </>
  );
}