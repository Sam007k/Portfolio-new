import TopBar from "./components/topbar/TopBar";
import Portfolio from "./components/portfolio/Portfolio";
import Intro from "./components/intro/Intro";
import Works from "./components/works/Works";
import Testimonials from "./components/testimonials/Testimonials";
import Contact from "./components/contact/Contact";

import "./app.scss";
import { useState } from "react";
import Menu from "./components/menu/Menu";

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const handleHamburger = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <div className="App">
      <TopBar menuOpen={menuOpen} hamburgerHandler={handleHamburger} />
      <Menu menuOpen={menuOpen} hamburgerHandler={handleHamburger} />
      <div className="sections">
        <Intro />
        <Portfolio />
        {/* <Works /> */}
        {/* <Testimonials /> */}
        <Contact />
      </div>
    </div>
  );
}
