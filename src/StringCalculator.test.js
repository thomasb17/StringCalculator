// src/StringCalculator.test.js

const add = require("./StringCalculator");

it("should return 0 on a empty string", () => {
	expect(add("")).toBe(0);
});