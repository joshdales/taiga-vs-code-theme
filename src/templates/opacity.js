/**
 * Converts a percentage value into the alpha value for an 8 digit hex code.
 * Adapted from https://codepen.io/chriscoyier/pen/XjbzAW
 */
function convertPercentageToHex(percentage) {
  const decimal = Math.round(percentage) / 100
  const alpha = Math.round(decimal * 255)
  const hex = (alpha + 0x10000).toString(16).substr(-2).toUpperCase()

  return hex
}

module.exports = function() {
  return function(value, render) {
    const hex = convertPercentageToHex(value)

    return render(hex)
  }
}
