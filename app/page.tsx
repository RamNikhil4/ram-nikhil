import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import SmoothScroll from "./components/SmoothScroll";

export default function Home() {
  return (
    <>
      <SmoothScroll />
      <Header />
      <main className="flex-1 overflow-x-hidden">
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
