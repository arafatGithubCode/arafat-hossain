import { BrowserRouter } from "react-router-dom";

import {
  About,
  Contact,
  Experience,
  Footer,
  Hero,
  Navbar,
  Tech,
  Works,
} from "./components";

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 pg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
        </div>
        <About />
        <Experience />
        <Tech />
        <Works />
        <Contact />
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
