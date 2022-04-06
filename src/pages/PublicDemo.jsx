import { Contact } from "../components/contact";
import { GameWrapper } from "../components/gameWrapper";
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
			<GameWrapper />
			<Contact />
		</div>
	);
};

export default Updates;
