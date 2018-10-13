// src/StringCalculator.js

function sum(numbers) {
	const numArr = numbers.split(",");
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