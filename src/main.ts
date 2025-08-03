import { resolve } from "node:path"
import { generate as vscode } from "./vscode/build.ts"
import { generate as ghostty } from "./ghostty/build.ts"
import { generate as warp } from "./warp/build.ts"
import darkColours from "./colours/dark-colours.json" with { type: "json" };
import lightColours from "./colours/light-colours.json" with { type: "json" };

const packagesDir = resolve(import.meta.dirname, "..", "packages");

[darkColours, lightColours].forEach((colours) => {
	vscode(packagesDir, colours)
	ghostty(packagesDir, colours)
	warp(packagesDir, colours)
});
