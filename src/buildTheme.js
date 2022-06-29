const fs = require("fs")
const path = require("path")
const JSON5 = require("json5")
const mustache = require("mustache")

const opacity = require('./templates/opacity')
const colours = [
  require('./templates/dark-colours.json'),
]

function buildTheme(colourTheme) {
  const themeValues = {...colourTheme, opacity}

  const theme = JSON5.parse(
    fs.readFileSync(`${__dirname}/templates/color-theme.json`, (err, data) => data)
  )

  const template = JSON.stringify(theme, null, 2)

  const data = mustache.render(template, themeValues)

  fs.writeFileSync(
    path.resolve(__dirname, '..', 'themes', `${colourTheme.type}-color-theme.json`),
    data
  )
}

colours.map(buildTheme)
