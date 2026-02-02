import Navbar from "../components/Navbar.jsx";
import Hero from "../components/Hero.jsx";
import Products from "../components/Products.jsx";
import Benefits from "../components/Benefits.jsx";
import Materials from "../components/Materials.jsx";
import About from "../components/About.jsx";
import Contact from "../components/Contact.jsx";
import Footer from "../components/Footer.jsx";

const Home = () => {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Navbar />
      <main>
        <Hero />
        <Products />
        <Benefits />
        <Materials />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
