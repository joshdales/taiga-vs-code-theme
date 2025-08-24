import { writeFile } from "node:fs";
import { resolve } from "node:path";
import mustache from "mustache";

import { alpha } from "../../utils/alpha.ts";
import { darkLight } from "../../utils/darkLight.ts";
import vsCodetheme from "./color-theme.json" with { type: "json" };

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

	const template = JSON.stringify(vsCodetheme, null, 2);

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
