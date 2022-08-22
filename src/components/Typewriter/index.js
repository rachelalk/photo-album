import React from "react";

const Typewriter = ({ line1, line2 }) => {
	return (
		<div className="typewriter">
			<div className="wrapper">
				<p className="line__1">{line1}</p>
				<p className="line__2">{line2}</p>
			</div>
		</div>
	);
};

export default Typewriter;
