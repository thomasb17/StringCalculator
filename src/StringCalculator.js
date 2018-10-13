// src/StringCalculator.js

function getDelimiter(numbers) {
	let delimiter = ",";

	if (numbers.includes("//")) {
		delimiter = numbers.substring(numbers.lastIndexOf("//") + 2, numbers.lastIndexOf("\n"));
	} else if (numbers.includes("\n")) {
		delimiter = "\n";
	}

	return delimiter;
}

function sum(numbers) {
	let negativeNums = [];
	let num, sum = 0;

	for (let i = 0; i < numbers.length; ++i) {
		num = parseInt(numbers[i]);
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

	const delimiter = getDelimiter(numbers);

	if (numbers.includes("//")) {
		numbers = numbers.slice(numbers.lastIndexOf("\n") + 1);
	}

	return sum(numbers.split(delimiter));
}

module.exports = add;