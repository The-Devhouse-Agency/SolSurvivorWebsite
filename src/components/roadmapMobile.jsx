import { ReactComponent as Line } from "../images/Line1.svg";
import { ReactComponent as Ellipse } from "../images/Ellipse.svg";
import { ReactComponent as Beta } from "../images/Beta.svg";
import { ReactComponent as Token } from "../images/Group8.svg";
import { ReactComponent as Comic } from "../images/Group10.svg";

export const RoadmapMobile = (props) => {
	return (
		<header>
			<div className="roadmap">
				<div className="overlay2">
					<div className="container">
						<div className="row intro-text">
							<h1 id="roadmap">Roadmap</h1>
						</div>
					</div>

					<div className="container" style={{ marginBottom: "45px" }}>
						<div class="row justify-content-md-center">
							<div class="col-md-2 col-xs-4 ">
								<div className="row timeline">
									<Ellipse style={{ zIndex: "2" }} className="svg" />
								</div>
								<br />
								<div className="row timeline">
									<Line className="svg" />
								</div>
							</div>

							<div class="col-md-10 col-xs-8 ">
								<h3 className="feature-text"> Playable Beta at Release</h3>
								<p className="feature-text">
									A full, playable version of Sol Survivor will be released
									shortly after minting completes. This beta will be the base
									the SurvivorDAO uses to build the game full from! The beta
									will be continuously updated as bugs are fixed in a gamified,
									and rewarding bug finding system. Holders will be able to
									play, report bugs, and do it in a fun way where they're
									rewarded for it!{" "}
								</p>
							</div>
						</div>
						<div class="row justify-content-md-center">
							<div class="col-md-2 col-xs-4 ">
								<div className="row timeline">
									<Ellipse style={{ zIndex: "2" }} className="svg" />
								</div>
								<br />
								<div className="row timeline">
									<Line className="svg" />
								</div>
							</div>

							<div class="col-md-10 col-xs-8 ">
								<h3 className="feature-text">
									Sol Survivor Comic Series, Game Updates, Merch, Branding
								</h3>
								<p className="feature-text">
									Game Updates: As mentioned above, the Sol Survivor beta will
									be continuously updated. In Q2 after the initial gamified bug
									bounty, we will begin introducing new game content and
									features. Some of these updates will include: New Weapons,
									Features, Maps, Companions Sol Survivor: The Comic.{" "}
								</p>
							</div>
						</div>

						<div
							class="row justify-content-md-center"
							style={{ marginTop: "10px" }}
						>
							<div class="col-md-2 col-xs-4 ">
								<div className="row timeline">
									<Ellipse style={{ zIndex: "2" }} className="svg" />
								</div>
								<br />
							</div>

							<div class="col-md-10 col-xs-8 ">
								<h3 className="feature-text">THE FINAL GAME</h3>
								<p className="feature-text">
									We intend to have the full Sol Survivor game, created with the
									community, full ready for release on Steam... and then what?
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</header>
	);
};
