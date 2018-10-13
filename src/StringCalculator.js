// src/StringCalculator.js

function add(numbers) {
	if (numbers === "") {
		return 0;
	}

	const n = numbers.split(",");
	if (n.length > 1) {
		return parseInt(n[0]) + parseInt(n[1]);
	}

	return parseInt(numbers);
}

module.exports = add;