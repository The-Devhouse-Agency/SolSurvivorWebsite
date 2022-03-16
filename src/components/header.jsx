// import Video from "../../public/img/Environment_Zombie_EarlyCapture.mp4"
import BackgroundVideo from "./BackgroundVideo";
import HeaderLogo from "../images/logo1.png";

export const Header = (props) => {
	return (
		<header id="header">
			<div className="intro">
				<div className="overlay">
					<div className="container">
						<div className="row">
							<div className="col-md-6 col-sm-offset-5 intro-text">
								{/* <video autoplay muted loop  >
              <source src="https://www.w3schools.com/html/mov_bbb.mp4" type='video/mp4'/>
            </video> */}

								<h1>
									<span>Welcome to Sol Survivor</span>
								</h1>
								<p>
									We have developed a playable, functional horde mode zombie
									shooter for players to enjoy at launch. We want the entire
									community to participate in the development of the game, and
									that means we'll tap into every personality and skilltype who
									wishes to participate.
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</header>
	);
};
