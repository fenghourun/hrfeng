import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion, type Variants } from "framer-motion";
import "katex/dist/katex.min.css"; // `rehype-katex` does not import the CSS for you
import "@pages/notes/Notes.scss";
import LoadingScreen from "@components/react/LoadingScreen";
import { Typography } from "@mui/material";

const qftVariants: Variants = {
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

const Notes = () => {
	const navigate = useNavigate();

	return (
		<div className="page-container">
			<motion.div
				variants={qftVariants}
				initial="initial"
				animate="animate"
				exit="exit"
				id="qft-container"
			>
				<div className="notes-header">
					<Typography
						variant="h3"
						fontWeight="bold"
						fontSize={70}
						textAlign="center"
					>
						{"Notes"}
					</Typography>
				</div>
				<motion.div className="qft-card" variants={cardVariants}>
					<button
						type="button"
						className="qft-card-button"
						onClick={() => navigate("/qft")}
					>
						<div className="qft-card-description">
							<Typography variant="h1" fontWeight="bold" fontSize={20}>
								{"Introduction to Quantum Field Theory - Peskin & Schroeder"}
							</Typography>
							<Typography
								variant="button"
								fontSize={15}
								className="qft-card-description-text"
							>
								End of chapter solutions
							</Typography>
						</div>
					</button>
				</motion.div>
			</motion.div>
		</div>
	);
};

export default Notes;
