import type React from "react";

import { styled } from "@mui/material/styles";
import "./ParameterControls.scss";

import Grid from "@mui/material/Grid";
import Slider from "@mui/material/Slider";
import MuiInput from "@mui/material/Input";

import { useStore } from "@pages/stuff/blochSphere/BlochSphere";
import Latex from "@components/static/Latex/Latex";

const Input = styled(MuiInput)`
  width: 42px;
`;

const ParameterControls = () => {
	const phi = Math.floor((useStore((state) => state.phi) * 180) / Math.PI);
	const theta = Math.floor((useStore((state) => state.theta) * 180) / Math.PI);

	const handlePhiSliderChange = (
		_event: Event,
		newValue: number | number[],
	) => {
		if (typeof newValue === "number") {
			useStore.setState({ phi: (newValue * Math.PI) / 180 });
		}
	};

	const handlePhiInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const inputValue =
			event.target.value === "" ? 0 : Number(event.target.value);

		useStore.setState({ phi: (inputValue * Math.PI) / 180 });
	};

	const handleThetaSliderChange = (
		_event: Event,
		newValue: number | number[],
	) => {
		if (typeof newValue === "number") {
			useStore.setState({ theta: (newValue * Math.PI) / 180 });
		}
	};

	const handleThetaInputChange = (
		event: React.ChangeEvent<HTMLInputElement>,
	) => {
		const inputValue =
			event.target.value === "" ? 0 : Number(event.target.value);

		useStore.setState({ theta: (inputValue * Math.PI) / 180 });
	};

	return (
		<>
			<Grid container spacing={2} alignItems="center">
				<Grid item>
					<Latex id="input-theta-slider" expression={"\\theta"} />
				</Grid>
				<Grid item xs>
					<Slider
						value={theta}
						onChange={handleThetaSliderChange}
						aria-labelledby="input-theta-slider"
						max={180}
						min={0}
						step={1}
					/>
				</Grid>
				<Grid item>
					<Input
						value={theta}
						size="small"
						onChange={handleThetaInputChange}
						inputProps={{
							step: 1,
							min: 0,
							max: 180,
							type: "number",
							inputMode: "numeric",
							className: "parameter-number-input",
							"aria-labelledby": "input-theta-slider",
						}}
					/>
				</Grid>
			</Grid>

			<Grid container spacing={2} alignItems="center">
				<Grid item>
					<Latex id="input-phi-slider" expression={"\\phi"} />
				</Grid>
				<Grid item xs>
					<Slider
						value={phi}
						onChange={handlePhiSliderChange}
						aria-labelledby="input-phi-slider"
						max={360}
						min={0}
						step={1}
					/>
				</Grid>
				<Grid item>
					<Input
						value={phi}
						size="small"
						onChange={handlePhiInputChange}
						inputProps={{
							step: 1,
							min: 0,
							max: 360,
							type: "number",
							inputMode: "numeric",
							className: "parameter-number-input",
							"aria-labelledby": "input-phi-slider",
						}}
					/>
				</Grid>
			</Grid>
		</>
	);
};

export default ParameterControls;
