import { resolve } from "node:path";
import { generate as vscode } from "./vscode/build.ts";
import { generate as ghostty } from "./ghostty/build.ts";
import { generate as warp } from "./warp/build.ts";
import { generate as zed } from "./zed/build.ts";
import darkColours from "./colours/dark-colours.json" with { type: "json" };
import lightColours from "./colours/light-colours.json" with { type: "json" };

const packagesDir = resolve(import.meta.dirname, "..", "packages");
const colours = [darkColours, lightColours];

function run() {
	colours.forEach((colourSet) => {
		vscode(packagesDir, colourSet);
		ghostty(packagesDir, colourSet);
		warp(packagesDir, colourSet);
	});

	zed(packagesDir, colours);
}

run();
