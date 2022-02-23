#! /usr/bin/env node
console.log("Hello World!");

// Get command line arguments into constants
const [origFile, changeFile, outputFile] = process.argv.slice(2);
// console.log(origFile, changeFile, outputFile);

// Parse original JSON data
const data = require(`../data/${origFile}`);
console.log(data);
// Parse changes JSON data
const changes = require(`../data/${changeFile}`);

// Modify data as required

// output modified data into new file
