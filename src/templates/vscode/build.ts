import { readFileSync, writeFile } from "node:fs";
import { resolve } from "node:path";
import JSON5 from "json5";
import mustache from "mustache";

import { alpha } from "../../utils/alpha.ts";
import { darkLight } from "../../utils/darkLight.ts";

const theme = JSON5.parse(
	readFileSync(`${import.meta.dirname}/color-theme.json`, {
		encoding: "utf-8",
	}),
	(_err, data) => data,
);

/**
 * Create the Taiga theme variant based on the provided configuration
 * @param colourTheme The theme configuration, which includes the type and colours
 */
export function generate(
	dirPath: string,
	colourTheme: Record<string, unknown>,
) {
	const themeValues = {
		...colourTheme,
		alpha,
		darkLight,
	};

	const template = JSON.stringify(theme, null, 2);

	const data = mustache.render(template, themeValues);

	writeFile(
		resolve(
			dirPath,
			"vscode",
			"themes",
			`${colourTheme.type}-color-theme.json`,
		),
		data,
		(err) => {
			if (err) throw err;
			console.log(`Wrote VSCode ${colourTheme.type} theme`);
		},
	);
}
