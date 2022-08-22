import React from "react";
import HTMLFlipBook from "react-pageflip";



function Flipbook(props) {
	return (
		<HTMLFlipBook className="flipbook" width={500} height={600}>
			<div className="frontPage-left">
				<div className="left-bar"></div>
				<div className = "typewriter">
					<div className="wrapper">
						<p className="line__1">Welcome to my</p>
						<p className="line__2">photo album!</p>
					</div>
				</div>
			</div>

            
			<div className="frontPage-right">Page 2</div>
			<div className="photoPage">Page 3</div>
			<div className="photoPage">Page 4</div>
		</HTMLFlipBook>
	);
}


export default Flipbook


