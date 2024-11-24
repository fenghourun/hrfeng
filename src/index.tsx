import React from "react";
import AppRoutes from "@pages/AppRoutes";
import reportWebVitals from "./reportWebVitals";

import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

import "./index.scss";
import "katex/dist/katex.min.css";
import "locomotive-scroll/";

import { ThemeProvider } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";

import theme from "./theme";
import { createRoot } from "react-dom/client";

const rootContainer = document.getElementById("root");
if (rootContainer) {
	const root = createRoot(rootContainer);
	root.render(
		<React.StrictMode>
			<ThemeProvider theme={theme}>
				<CssBaseline />
				<AppRoutes />
			</ThemeProvider>
		</React.StrictMode>,
	);

	// If you want to start measuring performance in your app, pass a function
	// to log results (for example: reportWebVitals(console.log))
	// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
	reportWebVitals();
}
