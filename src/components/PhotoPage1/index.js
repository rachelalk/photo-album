import React from "react";
import { motion } from "framer-motion";

const PhotoPage1 = () => {
	return (
		<motion.div
			className="box"
			animate={{
				scale: [0.5, 0.3, 0.3, 0.5, 0.5],
				rotate: [0, 0, 85, 85, 0],
				borderRadius: ["0%", "0%", "50%", "50%", "0%"],
			}}
			transition={{
				duration: 2,
				ease: "easeInOut",
				times: [0, 0.2, 0.5, 0.8, 1],
				repeat: Infinity,
				repeatDelay: 1,
			}}
		>
			<img src="./lenny.jpeg" />{" "}
		</motion.div>
	);
};

export default PhotoPage1;
