import React from "react";
import Header from "./components/Header.js";
import About from "./components/About.js";
import Projects from "./components/Projects.js";
import ContactInfo from "./components/Contactinfo.js";
import Footer from "./components/footer.js";

const App = () => {
  return (
    <>
      <Header/>
      <About/>
      <ContactInfo/>
      <Projects/>
      <Footer/>
    </>
  );
};

export default App;

