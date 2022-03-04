import { useState, useEffect } from "react";
import { Navigation } from "./components/navigation";
import { Header } from "./components/header";
import { Roadmap } from "./components/roadmap";
import { Features } from "./components/features";
import { About } from "./components/about";
import { Services } from "./components/services";
import { Gallery } from "./components/gallery";
import { Testimonials } from "./components/testimonials";
import { Team } from "./components/Team";
import { Contact } from "./components/contact";
import JsonData from "./data/data.json";
import SmoothScroll from "smooth-scroll";
import BackgroundVideo from "./components/BackgroundVideo"
import HeaderLogo from "./images/logo1.png"
import "./App.css";

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});

const App = () => {
  const [landingPageData, setLandingPageData] = useState({});
  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);

  return (
    <div>
      <BackgroundVideo/>      
      <Header data={landingPageData.Header} />
    
      <Gallery data={landingPageData.Gallery}/>
       
      {/* <Features data={landingPageData.Features} /> */}
      {/* <About data={landingPageData.About} /> */}
      <Services data={landingPageData.Services} />
      <Roadmap />
      <Contact data={landingPageData.Contact} />
    </div>
  );
};

export default App;
