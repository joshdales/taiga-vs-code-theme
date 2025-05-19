import { readFileSync, writeFile } from 'node:fs'
import { resolve } from 'node:path'
import JSON5 from 'json5'
import mustache from 'mustache'

import { opacity } from './utils/opacity.js'
import { darkLight } from './utils/darkLight.js'
import darkColours from './templates/dark-colours.json' with { type: 'json'}
import lightColours from './templates/light-colours.json' with { type: 'json'}

const theme = JSON5.parse(
	readFileSync(`${import.meta.dirname}/templates/color-theme.json`, (_err, data) => data)
)

/**
 * Create the Taiga theme variant based on the provided configuration
 * @param {object} colourTheme The theme configuration, which includes the type and colours
 */
function buildTheme(colourTheme) {
	const themeValues = {
		...colourTheme,
		opacity,
		darkLight,
	}

	const template = JSON.stringify(theme, null, 2)

	const data = mustache.render(template, themeValues)

	writeFile(
		resolve(import.meta.dirname, '..', 'themes', `${colourTheme.type}-color-theme.json`),
		data,
		(err) => {
			if (err) throw err
			console.log(`Wrote ${colourTheme.type} theme`)
		}
	)
}

[
	darkColours,
	lightColours,
].map(buildTheme)
