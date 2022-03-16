export const ChangeLog = (props) => {
	return (
		<div className="changelog">
			<div className="container">
				<div class="row justify-content-md-center">
					<div class="col-md-12 col-xs-12 ">
						<h1>Sol Survivor - 3.15.22</h1>
						<br />
						<p className="feature-text">
							<strong>Posted: </strong>March 15, 2022
						</p>
						<br />
						<p className="feature-text">
							A new update is available for Sol Survivor that addresses some
							issues that have occurred since the release of 3.9.22.
						</p>
						<br />
						<p className="feature-text">
							Please document any bugs you find in the Discord server!
						</p>
						<br />
						<br />
					</div>
				</div>
			</div>
			<div className="container">
				<div class="row justify-content-md-center">
					<div class="col-md-112 col-xs-12">
						<h3 className="feature-text">Fixes:</h3>
						<ul>
							<li>
								<p className="feature-text"> • Headshots now insta-kill.</p>
							</li>
							<li>
								<p className="feature-text"> • Zombie arms can be shot off.</p>
							</li>
							<li>
								<p className="feature-text">
									{" "}
									• The crosshair has been tweaked (Adding customization is
									important, this will happen later).
								</p>
							</li>
							<li>
								<p className="feature-text">
									{" "}
									• Zombie performance has been improved.
								</p>
							</li>
							<li>
								<p className="feature-text">
									{" "}
									• Zombie bodies now despawn after being inactive for a time.
								</p>
							</li>
							<li>
								<p className="feature-text">
									{" "}
									• Dead zombies can be shot and dismembered before despawn.
								</p>
							</li>
							<li>
								<p className="feature-text">
									{" "}
									• Better collision for cars and some shopping carts.
								</p>
							</li>
							<li>
								<p className="feature-text"> • Fixed zombie kill count.</p>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	);
};
