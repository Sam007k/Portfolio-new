import TopBar from "./components/topbar/TopBar";
import Portfolio from "./components/portfolio/Portfolio";
import Intro from "./components/intro/Intro";
import Works from "./components/works/Works";
import Testimonials from "./components/testimonials/Testimonials";
import Contact from "./components/contact/Contact";

import "./app.scss";

export default function App() {
  return (
    <div className="App">
      <TopBar />

      <div className="sections">
        <Intro />
        <Portfolio />
        <Works />
        <Testimonials />
        <Contact />
      </div>
    </div>
  );
}
