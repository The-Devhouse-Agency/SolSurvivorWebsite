import { useState, useEffect } from "react";
import { Header } from "../components/header";
import RoadmapLayout from "../components/roadmapLayout";
import { Features } from "../components/features";
import { Gallery } from "../components/gallery";
import { Contact } from "../components/contact";
import { ChangeLog } from "../components/changeLog";
import { Navigation } from "../components/navigation";
import { Roadmap } from "../components/roadmap";
import JsonData from "../data/data.json";
import SmoothScroll from "smooth-scroll";
import BackgroundVideo from "../components/BackgroundVideo";
import "./App.css";

// export const scroll = new SmoothScroll('a[href*="#"]', {
// 	speed: 1000,
// 	speedAsDuration: true,
// });

const App = () => {
	const [landingPageData, setLandingPageData] = useState({});
	useEffect(() => {
		setLandingPageData(JsonData);
	}, []);

	return (
		<div>
			<Navigation />
			<BackgroundVideo />
			<Header />
			<Gallery data={landingPageData.Gallery} />
			<Features />
			<RoadmapLayout />
			<Contact />
		</div>
	);
};

export default App;
