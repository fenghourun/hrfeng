import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Typography } from "@mui/material";
import { motion, type Variants } from "framer-motion";

import "@pages/stuff/Stuff.scss";

const simulationsVariants: Variants = {
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

const Simulations = (): JSX.Element => {
	const navigate = useNavigate();

	useEffect(() => {
		console.log("pages/landing/simulations.tsx ==> Component Mounted");

		return () => {
			console.log("pages/landing/simulations.tsx ==> Component Unmounted");
		};
	}, []);

	return (
		<div className="page-container">
			<motion.div
				variants={simulationsVariants}
				initial="initial"
				animate="animate"
				exit="exit"
				id="simulations-container"
			>
				<div id="simulations-header">
					<Typography
						variant="h3"
						fontWeight="bold"
						fontSize={90}
						textAlign="center"
					>
						{"( •_•)"}
					</Typography>
				</div>
				<motion.div className="simulations-card" variants={cardVariants}>
					<div className="simulations-card-description">
						<Typography variant="h1" fontWeight="bold" fontSize={100}>
							Bloch Sphere
						</Typography>
						<Typography
							variant="button"
							fontSize={20}
							letterSpacing={5}
							className="simulations-card-description-text"
						>
							Geometric representation of the pure states of a two level quantum
							system
						</Typography>
					</div>

					<button
						type="button"
						className="animate-hover-center"
						onClick={() => navigate("/blochSphere")}
					>
						View
					</button>
				</motion.div>
				<motion.div className="simulations-card" variants={cardVariants}>
					<div className="simulations-card-description">
						<Typography variant="h1" fontWeight="bold" fontSize={100}>
							Notes
						</Typography>
						<Typography
							variant="button"
							fontSize={20}
							letterSpacing={5}
							className="simulations-card-description-text"
						>
							These are my personal notes and problem set solutions for various
							books on math and physics.
						</Typography>
					</div>

					<button
						type="button"
						className="animate-hover-center"
						onClick={() => navigate("/notes")}
					>
						View
					</button>
				</motion.div>
			</motion.div>
		</div>
	);
};

export default Simulations;
