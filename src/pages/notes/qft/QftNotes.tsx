import { useState } from "react";
import Markdown from "react-markdown";
import rehypeKatex from "rehype-katex";
import remarkMath from "remark-math";
import "katex/dist/katex.min.css"; // `rehype-katex` does not import the CSS for you
import "@pages/notes/Notes.scss";
import qftPath from "./qft.md";
import LoadingScreen from "@components/react/LoadingScreen";

const QftNotes = () => {
	const [qftMd, setQftMd] = useState("");
	const [isLoading, setIsLoading] = useState(true);

	fetch(qftPath)
		.then((response) => response.text())
		.then((text) => {
			setQftMd(text);
			setIsLoading(false);
		});

	return (
		<div className="page-container">
			<div className="notes-container">
				{isLoading ? (
					<LoadingScreen />
				) : (
					<div className="markdown-container">
						<Markdown
							remarkPlugins={[remarkMath]}
							rehypePlugins={[rehypeKatex]}
						>
							{qftMd}
						</Markdown>
					</div>
				)}
			</div>
		</div>
	);
};

export default QftNotes;
