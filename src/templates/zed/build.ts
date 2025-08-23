import { writeFile } from "node:fs";
import { resolve } from "node:path";
import mustache from "mustache";

import { alpha } from "../../utils/alpha.ts";
import { darkLight } from "../../utils/darkLight.ts";
import zedTheme from "./theme.json" with { type: "json" };

/**
 * Create the Taiga theme variant based on the provided configuration
 * @param colourTheme The theme configuration, which includes the type and colours
 */
export function generate(
	dirPath: string,
	colourTheme: Record<string, unknown>[],
) {
	const themeTemplate = zedTheme.themes[0];
	const themes = colourTheme.map((colours) => {
		const themeValues = {
			...colours,
			alpha,
			darkLight,
		};
		const template = JSON.stringify(themeTemplate);
		const data = mustache.render(template, themeValues);
		return JSON.parse(data);
	});

	zedTheme.themes = themes;
	const data = JSON.stringify(zedTheme, null, 2);

	writeFile(resolve(dirPath, "zed", "themes", `taiga.json`), data, (err) => {
		if (err) throw err;
		console.log(`Wrote Zed theme`);
	});
}
