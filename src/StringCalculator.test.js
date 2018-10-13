// src/StringCalculator.test.js

const add = require("./StringCalculator");

it("should return 0 on a empty string", () => {
	expect(add("")).toBe(0);
});

it("should return the number on a string with a single number", () => {
	expect(add("2")).toBe(2);
});