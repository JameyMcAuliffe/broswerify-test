"use strict";

//goes to add file, and saves whatever it's exporting into adding
let adding = require("./add");
let subtracting = require("./subtract");
let multiplying = require("./multiply");
let dividing = require("./divide");

let Calculator = {
	adding,
	subtracting,
	multiplying,
	dividing
};

module.exports = Calculator;