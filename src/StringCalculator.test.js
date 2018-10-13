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