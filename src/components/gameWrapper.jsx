export const GameWrapper = () => {
	return (
		<>
			<div className="game-wrapper">
				<iframe
					title="Public Demo"
					mozallowfullscreen="true"
					allow="autoplay; fullscreen *; geolocation; microphone; camera; midi; monetization; xr-spatial-tracking; gamepad; gyroscope; accelerometer; xr; cross-origin-isolated"
					frameborder="0"
					width="100%"
					height="100%"
					src="https://v6p9d9t4.ssl.hwcdn.net/html/5547749/Sol Survivor PUBLIC WebGL Build 1.1/index.html"
					msallowfullscreen="true"
					scrolling="no"
					allowfullscreen="true"
					webkitallowfullscreen="true"
					id="game_drop"
					allowtransparency="true"
				></iframe>
			</div>
		</>
	);
};
