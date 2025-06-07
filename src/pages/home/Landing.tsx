import { Typography } from "@mui/material";
import { motion, type Variants } from "framer-motion";

import "@pages/home/Landing.scss";

const marqueeVariant: Variants = {
	initial: {
		opacity: 0,
	},
	animate: {
		opacity: 1,
		x: [0, -1400],
		transition: {
			x: {
				repeat: Number.POSITIVE_INFINITY,
				repeatType: "loop",
				duration: 15,
				ease: "linear",
			},
		},
	},
};

const captionVariant: Variants = {
	initial: {
		opacity: 0,
		y: -200,
	},
	animate: {
		opacity: 1,
		y: 0,
		transition: {
			ease: [0.1, 0.74, 0.4, 0.9],
			duration: 1.8,
		},
	},
};

const Landing = (): JSX.Element => {
	return (
		<div className="landing-page-container">
			<motion.div
				variants={marqueeVariant}
				initial="initial"
				animate="animate"
				className="marquee"
			>
				<h1 className="marqee-content">{"WELCOME WELCOME WELCOME WELCOME"}</h1>
			</motion.div>

			<motion.div
				variants={captionVariant}
				initial="initial"
				animate="animate"
				className="landing-caption"
			>
				<Typography fontSize={20} letterSpacing={6}>
					DAVID FENG
				</Typography>
				<Typography fontSize={20} letterSpacing={6}>
					MACHINE LEARNING ENGINEER @META
				</Typography>
				<Typography fontSize={20} letterSpacing={6}>
					BASED IN NEW YORK
				</Typography>
			</motion.div>
		</div>
	);
};

export default Landing;
