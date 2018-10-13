// src/StringCalculator.js

function add(numbers) {
	if (numbers === "") {
		return 0;
	}

	const n = numbers.split(",");
	if (n.length > 1) {
		let sum = 0;
		for (let i = 0; i < n.length; ++i) {
			sum += parseInt(n[i]);
		};
		return sum;
	}

	return parseInt(numbers);
}

module.exports = add;