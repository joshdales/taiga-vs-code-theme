/**
 * Converts a percentage value into the alpha value for an 8 digit hex code.
 * Adapted from https://codepen.io/chriscoyier/pen/XjbzAW
 */
function convertPercentageToHex(percentage: string) {
	const decimal = Math.round(+percentage) / 100;
	const alpha = Math.round(decimal * 255);
	const hexString = (alpha + 0x10000).toString(16).toUpperCase();
	const hex = hexString.substring(hexString.length - 2);

	return hex;
}

export function alpha() {
	return function (value: string, render: Function) {
		const hex = convertPercentageToHex(value);

		return render(hex);
	};
}
