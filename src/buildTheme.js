import { readFileSync, writeFileSync } from 'node:fs'
import { resolve } from 'node:path'
import JSON5 from 'json5'
import mustache from 'mustache'

import { opacity } from './templates/opacity.js'
import { darkLight } from './templates/darkLight.js'
import darkColours from './templates/dark-colours.json' with { type: 'json'}
import lightColours from './templates/light-colours.json' with { type: 'json'}

const theme = JSON5.parse(
	readFileSync(`${import.meta.dirname}/templates/color-theme.json`, (_err, data) => data)
)

function buildTheme(colourTheme) {
	const themeValues = {
		...colourTheme,
		opacity,
		darkLight,
	}

	const template = JSON.stringify(theme, null, 2)

	const data = mustache.render(template, themeValues)

	writeFileSync(
		resolve(import.meta.dirname, '..', 'themes', `${colourTheme.type}-color-theme.json`),
		data
	)
}

[
	darkColours,
	lightColours,
].map(buildTheme)
