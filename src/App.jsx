import { BrowserRouter } from "react-router-dom";
import { Navbar, Hero, Works, Experience, Tech, Education, Contact } from "./components";

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <Navbar />
        <Hero />
        <Works />
        <Experience />
        <Tech />
        <Education />
        <Contact />
      </div>
    </BrowserRouter>
  );
};

export default App;
