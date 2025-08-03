import { generate as vscode } from "./vscode/build.ts"
import { generate as ghostty } from "./ghostty/build.ts"

import darkColours from "./colours/dark-colours.json" with { type: "json" };
import lightColours from "./colours/light-colours.json" with { type: "json" };

[darkColours, lightColours].forEach((colours) => {
	vscode(colours)
	ghostty(colours)
});
