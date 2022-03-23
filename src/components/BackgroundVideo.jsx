import React from "react";
import VideoSource from "../images/trailer.mp4";
import Logo from "../images/logo1.png";
import Poster from "../images/videoPoster.PNG";
const BackgroundVideo = ({ videoSource, children }) => {
	// const video = React.useRef(null);
	// React.useEffect(() => {
	//   console.log(video.current.style);
	//   video.current.style.filter = "blur(10px)";

	// }, []);
	return (
		<>
			<div className="videoHeader">
				<video
					className="video"
					muted
					autoPlay
					playsInline
					loop
					preload="auto"
					controls=""
					poster={Poster}
				>
					<source
						type="video/mp4"
						src="https://devhouse-web-images.s3.us-east-2.amazonaws.com/ZombieHeadshot.mp4"
					/>
					Your browser does not support the video tag.
				</video>
				<a
					href="https://serlist.solsurvivor.co/"
					rel="noopener noreferrer"
					target="_blank"
					className="btn btn-primary play-now"
				>
					PLAY NOW
				</a>
				<br />
				<a
					href="https://ssurvivor.taiyorobotics.com/"
					rel="noopener noreferrer"
					target="_blank"
					className="btn btn-primary mint"
				>
					MINT
				</a>

				<img src={Logo} className="img-responsive logo" alt="Sol Survivor" />
			</div>
		</>
	);
};

export default BackgroundVideo;
