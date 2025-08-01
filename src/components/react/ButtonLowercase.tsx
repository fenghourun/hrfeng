import Button from "@mui/material/Button";

import type { ButtonProps } from "@mui/material/Button";

export default function ButtonLowercase(props: ButtonProps) {
	return (
		<Button style={{ textTransform: "none" }} {...props}>
			{props.children}
		</Button>
	);
}
