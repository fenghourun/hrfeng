import katex from "katex";
import { useRef } from "react";

type LatexProps = {
	expression: string;
	id?: string;
};

const Latex = ({ expression, id }: LatexProps) => {
	const spanRef = useRef<HTMLSpanElement>(null);

	if (spanRef.current) {
		katex.render(expression, spanRef.current);
	}

	return <span id={id} ref={spanRef} />;
};

export default Latex;
