// @ts-check
import { defineConfig } from 'astro/config';
import remarkBlank from "./src/plugins/remark-blank.mts";
import remarkDirective from "remark-directive";
import remarkFigure from "./src/plugins/remark-figure.mts";
import remarkMath from "remark-math";
import remarkSlot from "./src/plugins/remark-slot.mts";
import remarkSolution from "./src/plugins/remark-solution.mts";
import rehypeBlank from "./src/plugins/rehype-blank.mts";
import rehypeFigure from "./src/plugins/rehype-figure.mts";
import rehypeKatex from "rehype-katex";
import rehypeSolution from "./src/plugins/rehype-solution.mts";

// https://astro.build/config
export default defineConfig({
	site:"https://wiki.byrdocs.org",
	markdown:{
		remarkPlugins:[
			remarkBlank,
			remarkDirective,
			remarkFigure,
			remarkMath,
			remarkSlot,
			remarkSolution,
		],
		rehypePlugins:[
			rehypeBlank,
			rehypeKatex,
			rehypeFigure,
			rehypeSolution,
		],
	}
});
