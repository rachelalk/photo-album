import React from "react";
import HTMLFlipBook from "react-pageflip";
import PhotoPage1 from "../PhotoPage1";
import Page1Text from "../Page1Text";

function Flipbook(props) {
	return (
		<HTMLFlipBook className="flipbook" width={600} height={500} size="stretch">
			<div className="hidden-page">
				<div className="left-bar-hidden"></div>
				<div className="typewriter">
					<div className="wrapper">
						<p className="line__1">Welcome to my</p>
						<p className="line__2">photo album!</p>
					</div>
				</div>
			</div>
			<div className="frontPage-left">
				<div className="left-bar"></div>

				<div className="cat-animation-container">
					<div className="window">
						<div className="mountain-1"></div>
						<div className="mountain-2"></div>
						<div className="kitty">
							<div className="ear"></div>
						</div>
						<div className="moon"></div>
						<div className="star"></div>
					</div>
				</div>
			</div>

			<div className="frontPage-right">
				<Page1Text />
			</div>
			<div className="photoPage">
				<PhotoPage1 />
			</div>
			<div className="photoPage"></div>
			<div className="photoPage">Page 5</div>
			<div className="photoPage">Page 6</div>
			<div className="photoPage">Page 7</div>
			<div className="photoPage">Page 8</div>
		</HTMLFlipBook>
	);
}

export default Flipbook;
