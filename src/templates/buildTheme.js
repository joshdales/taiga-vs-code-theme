const fs = require("fs")
const path = require("path")
const JSON5 = require("json5")
const mustache = require("mustache")

const theme = JSON5.parse(
  fs.readFileSync(`${__dirname}/color-theme.json`, (err, data) => data)
);
const template = JSON.stringify(theme, null, 2)

const data = mustache.render(template)

fs.writeFileSync(path.resolve(__dirname, '..', '..','themes', 'test-color-theme.json'), data)
