import React from "react";
import { About, Footer, Header, Skills, Testimonial, Work } from "./containers";
import { Navbar } from "./components";
import "./app.scss";
const App = () => {
  return (
    <div className="app">
      <Navbar />
      <Header />
      gvcadjha
      <About />
      <Work />
      <Skills />
      <Testimonial />
      <Footer />
    </div>
  );
};

export default App;
