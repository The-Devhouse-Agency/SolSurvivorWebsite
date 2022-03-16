import { ReactComponent as Beta } from "../images/Beta.svg";
import { ReactComponent as Token } from "../images/Group8.svg";
import { ReactComponent as Comic } from "../images/Group10.svg";

export const Features = (props) => {
	return (
		<div className="container" style={{ marginBottom: "45px" }}>
			<div class="row justify-content-md-center">
				<div class="col-md-2 col-xs-4 ">
					<div className="row timeline">
						<Beta className="svg2" />
					</div>
				</div>

				<div class="col-md-10 col-xs-8 ">
					<h3 className="feature-text"> Playable Beta at Release</h3>
					<ul>
						<li>
							<p className="feature-text">
								{" "}
								• Full playable Sol Survivor game beta will be live after
								minting.
							</p>
						</li>
						<li>
							<p className="feature-text">
								{" "}
								• Horde Style Gameplay: Enemy’s will spawn in waves and it will
								be up to the player to stay alive as long as possible while
								killing as many enemies as they can before losing all of their
								health..
							</p>
						</li>
					</ul>
				</div>
			</div>

			<div class="row justify-content-md-center">
				<div class="col-md-2 col-xs-4 ">
					<div className="row timeline">
						<Token className="svg2" />
					</div>
				</div>

				<div class="col-md-10 col-xs-8">
					<h3 className="feature-text">$SER Token</h3>

					<ul>
						<li>
							<p className="feature-text">
								{" "}
								• Your Survivors can be staked into the safe house under a
								time-lock to accumulate 5 $SER each per day, and return with a
								companion!
							</p>
						</li>
						<li>
							<p className="feature-text">
								{" "}
								• The $SER token will be integrated into the full SERLabs
								ecosystem, including use in the SERcade, etc.
							</p>
						</li>
					</ul>
				</div>
			</div>

			<div class="row justify-content-md-center">
				<div class="col-md-2 col-xs-4 ">
					<div className="row timeline">
						<Comic className="svg2" />
					</div>
				</div>

				<div class="col-md-10 col-xs-8">
					<h3 className="feature-text">Sol Survivor Comic Series, etc</h3>
					<p className="feature-text">
						Our team has began work on issue #1 of the Sol Survivor comic series
						for a Q2 release, the comic will feature:
					</p>
					<ul>
						<li>
							<p className="feature-text">
								{" "}
								• Lore releases, and sneak peaks of the future of the game
								released in the comic book issues as the story, and game
								develops via DAO votes on the future of the Sol Survivor game.
							</p>
						</li>
						<li>
							<p className="feature-text">
								{" "}
								• All comic book issues will be tradable NFT comic books.
							</p>
						</li>
						<li>
							<p className="feature-text">
								{" "}
								• Sol Survivor comics will be be stakable, with the future
								options to burn for physical copies - or combine multiple issues
								and unlock something... else.
							</p>
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
};
