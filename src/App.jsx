import { BrowserRouter } from "react-router-dom";

import {
  About,
  Contact,
  Education,
  Experience,
  Footer,
  Hero,
  Navbar,
  Tech,
  Works,
} from "./components";
import BlogTitle from "./components/blog/BlogTitle";
import BlogHover from "./components/blog/BlogHover";

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
        <div>
          <BlogTitle />
          <BlogHover />
        </div>
        <Education />
        <Contact />
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
