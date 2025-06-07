import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Typography } from "@mui/material";
import { motion, type Variants } from "framer-motion";

import "@pages/stuff/Stuff.scss";

const stuffVariants: Variants = {
	initial: {
		opacity: 0,
	},
	animate: {
		opacity: 1,
		transition: {
			duration: 0.8,
			staggerChildren: 0.2,
		},
	},
	exit: {
		opacity: 0,
	},
};

const cardVariants: Variants = {
	initial: {
		opacity: 0,
		x: 500,
	},
	animate: {
		opacity: 1,
		x: 0,
		transition: {
			duration: 0.8,
		},
	},
};

const Stuff = (): JSX.Element => {
	const navigate = useNavigate();

	useEffect(() => {
		console.log("pages/landing/stuff.tsx ==> Component Mounted");

		return () => {
			console.log("pages/landing/stuff.tsx ==> Component Unmounted");
		};
	}, []);

	return (
		<div className="page-container">
			<motion.div
				variants={stuffVariants}
				initial="initial"
				animate="animate"
				exit="exit"
				className="stuff-container"
			>
				<div className="stuff-header">
					<Typography
						variant="h3"
						fontWeight="bold"
						fontSize={90}
						textAlign="center"
					>
						{"( •_•)"}
					</Typography>
				</div>

				<motion.button
					className="stuff-card"
					variants={cardVariants}
					onClick={() => navigate("/blochSphere")}
				>
					<div className="stuff-card-description">
						<Typography variant="h1" fontWeight="bold" fontSize={100}>
							Bloch Sphere
						</Typography>
						<span className="stuff-card-description-text">
							Geometric representation of the pure states of a two level quantum
							system
						</span>
					</div>
				</motion.button>

				<motion.button
					className="stuff-card"
					variants={cardVariants}
					onClick={() => navigate("/notes")}
				>
					<div className="stuff-card-description">
						<Typography variant="h1" fontWeight="bold" fontSize={100}>
							Notes
						</Typography>
						<span className="stuff-card-description-text">
							Personal notes and problem set solutions for various books on math
							and physics.
						</span>
					</div>
				</motion.button>
			</motion.div>
		</div>
	);
};

export default Stuff;
