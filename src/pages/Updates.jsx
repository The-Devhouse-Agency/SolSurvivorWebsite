import { Contact } from "../components/contact";
import { ChangeLog } from "../components/changeLog";
import { Roadmap } from "../components/roadmap";
import { Navigation } from "../components/navigation";
import JsonData from "../data/data.json";
import SmoothScroll from "smooth-scroll";
import "./App.css";
import { Header } from "../components/header";

export const scroll = new SmoothScroll('a[href*="#"]', {
	speed: 1000,
	speedAsDuration: true,
});

const Updates = () => {
	return (
		<div>
			<Navigation />
			<ChangeLog />
			<Contact />
		</div>
	);
};

export default Updates;
