// src/StringCalculator.test.js

const add = require("./StringCalculator");

it("should return 0 on a empty string", () => {
	expect(add("")).toBe(0);
});

it("should return the number on a string with a single number", () => {
	expect(add("2")).toBe(2);
});

it("should return the sum of two numbers in a string", () => {
	expect(add("1,2")).toBe(3);
});

it("should return the sum of all numbers with a unknown amount in a string", () => {
	let str = "0";
	let amount = Math.floor(Math.random() * 11); // a number in the range of 0 to 10
	let sum = 0;
	for (let i = 1; i <= amount; ++i) {
		str += "," + i;
		sum += i;
	}
	expect(add(str)).toBe(sum);
});

it("should return the sum of the numbers in a string with a new line delimiter", () => {
	expect(add("1\n2\n3")).toBe(6);
});

it("should return a exception with the negitive numbers in the string", () => {
	function testNegative() {
		add("-1,1,2,-3,-4");
	}
	expect(testNegative).toThrowError(/^Negatives not allowed: -1,-3,-4$/);
});

it("should return the sum of all numbers in the string excluding the numbers above 1000", () => {
	expect(add("1000,1,2,2333,4444")).toBe(1003);
});