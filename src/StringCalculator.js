// src/StringCalculator.js

function sum(numbers) {
	let delimiter = ",";
	if (numbers.includes("\n")) {
		delimiter = "\n";
	}

	const numArr = numbers.split(delimiter);
	let negativeNums = [];
	let num, sum = 0;
	for (let i = 0; i < numArr.length; ++i) {
		num = parseInt(numArr[i]);
		if (num > 1000) {
			continue;
		}
		if (num < 0) {
			negativeNums.push(num);
			continue;
		}
		sum += num;
	}

	if (negativeNums.length > 0) {
		throw new Error("Negatives not allowed: " + negativeNums);
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