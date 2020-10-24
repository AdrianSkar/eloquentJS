// for (let i = 0, test; i < 8; i++) {
// 	// let test = true;
// 	if (test) {
// 		console.log(" #".repeat(4));
// 		test = false;
// 	}
// 	else {
// 		console.log("# ".repeat(4));
// 		test = true;
// 	}
// }

/// Alt:

let size = 8, a = ' ', b = '#';
for (let i = 0; i < size; i++) {
	(i % 2 === 0) ? console.log((a + b).repeat(size / 2)) : console.log((b + a).repeat(size / 2));
}

/// Alt:
let size = 8, output = '', count = 1;

for (let i = 0, y = size * size; i < y; i++) {
	if (i % size === 0) {
		output += '\n';
		count++;
	}
	if (count % 2 === 0) { (i % 2 === 0) ? output += ' ' : output += '#'; }

	else { (i % 2 === 0) ? output += '#' : output += ' '; }
	// console.log(count);

}
function chess(size, a, b) {
	let output = '', count = 1;
	for (let i = 0, y = size; i < y; i++) {
		if (i % size === 0) {
			output += '\n';
			count++;
		}
		(i % 2 === 0) ? console.log((a + b).repeat(size / 2)) : console.log((b + a).repeat(size / 2));
	}
	return output;
}
console.log(chess(8, " ", "#"));

/// Book's solution:

let size = 8;

let board = "";

for (let y = 0; y < size; y++) {
	for (let x = 0; x < size; x++) {
		if ((x + y) % 2 == 0) {
			board += " ";
		} else {
			board += "#";
		}
	}
	board += "\n";
}

console.log(board);