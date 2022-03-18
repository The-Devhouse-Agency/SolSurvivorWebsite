import { Link } from "react-router-dom";
import Logo from "../images/logo2.png";

export const Navigation = () => {
	return (
		<nav id="menu" className="navbar navbar-default navbar-fixed-top">
			<div className="container">
				<div className="navbar-header">
					<button
						type="button"
						className="navbar-toggle collapsed"
						data-toggle="collapse"
						data-target="#bs-example-navbar-collapse-1"
					>
						{" "}
						<span className="sr-only">Toggle navigation</span>{" "}
						<span className="icon-bar"></span>{" "}
						<span className="icon-bar"></span>{" "}
						<span className="icon-bar"></span>{" "}
					</button>
					<Link to="/">
						<img className="icon-nav" loading="lazy" src={Logo} alt="/" />
					</Link>
				</div>

				<div
					className="collapse navbar-collapse"
					id="bs-example-navbar-collapse-1"
				>
					<ul className="nav navbar-nav navbar-right">
						<li>
							<Link to="/">HOME</Link>
						</li>
						<li>
							<Link to="/updates">Updates</Link>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
};
