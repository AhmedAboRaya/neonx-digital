import React from "react";
import HeroPage from "./Components/heroPage.jsx";
import Navbar from "./Components/Navbar.jsx";
import About from "./Components/about.jsx";
import Services from "./Components/Services.jsx";
import TechStack from "./Components/TechStack.jsx";
import FAQSection from "./Components/FAQ.jsx";
import ContactUs from "./Components/ContactUs.jsx";
import Footer from "./Components/Footer.jsx";
import Projects from "./Components/Projects.jsx";
import AmbientBackground from "./Components/AmbientBackground.jsx";

function App() {
  return (
    <section className="overflow-hidden relative bg-[#080B11]">
      {/* Ambient Animated Cyber Background */}
      <AmbientBackground />

      {/* Main Single Page Content */}
      <div className="relative z-10">
        <Navbar />
        <HeroPage />
        <About />
        <Services />
        <Projects />
        <TechStack />
        <FAQSection />
        <ContactUs />
        <Footer />
      </div>
    </section>
  );
}

export default App;