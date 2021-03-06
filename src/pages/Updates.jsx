import { Contact } from "../components/contact";
import { ChangeLog } from "../components/changeLog";
import { Navigation } from "../components/navigation";
import SmoothScroll from "smooth-scroll";
import "./App.css";

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
