import React from "react";
import HTMLFlipBook from "react-pageflip";



function Flipbook(props) {
	return (
		<HTMLFlipBook className="flipbook" width={400} height={600} size="stretch">
			<div className="frontPage-left">
				<div className="left-bar"></div>
				<div className="typewriter">
					<div className="wrapper">
						<p className="line__1">Welcome to my</p>
						<p className="line__2">photo album!</p>
					</div>
				</div>
			</div>

			<div className="frontPage-right">Page 2</div>
			<div className="photoPage">Page 3</div>
			<div className="photoPage">Page 4</div>
			<div className="photoPage">Page 5</div>
			<div className="photoPage">Page 6</div>
			<div className="photoPage">Page 7</div>
			<div className="photoPage">Page 8</div>
		</HTMLFlipBook>
	);
}


export default Flipbook


