// https://eloquentjavascript.net/03_functions.html#i_XTmO7z7MPq

// function min(a, b) {
// 	return a < b ? a : b;
// }

// const min = (a, b) => (a < b) ? a : b;

function min(...args) {
	let result = args.sort();
	return result[0];
}

console.log(min(1, 10));

/// Book's solution:

function minB(a, b) {
	if (a < b) return a;
	else return b;
}

console.log(minB(1, 10));