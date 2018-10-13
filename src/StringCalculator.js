// src/StringCalculator.js

function sum(numbers) {
	let delimiter = ",";
	if (numbers.includes("\n")) {
		delimiter = "\n";
	}
	const numArr = numbers.split(delimiter);
	let sum = 0;
	for (let i = 0; i < numArr.length; ++i) {
		sum += parseInt(numArr[i]);
	}
	return sum;
}

function add(numbers) {
	if (numbers === "") {
		return 0;
	}

	return sum(numbers);
}

module.exports = add;