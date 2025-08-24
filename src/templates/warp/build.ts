import { readFileSync, writeFile } from "node:fs";
import { resolve } from "node:path";
import mustache from 'mustache'

const theme = readFileSync(`${import.meta.dirname}/theme.yml`, {
	encoding: "utf-8",
})

/**
 * Create the Taiga theme variant based on the provided configuration
 * @param colourTheme The theme configuration, which includes the type and colours
 */
export function generate(dirPath: string, colourTheme: Record<string, unknown>) {
	const data = mustache.render(theme, colourTheme);

	writeFile(
		resolve(
			dirPath,
			"warp",
			`taiga-${colourTheme.type}.yml`,
		),
		data,
		(err) => {
			if (err) throw err;
			console.log(`Wrote Warp ${colourTheme.type} theme`);
		},
	);
}
