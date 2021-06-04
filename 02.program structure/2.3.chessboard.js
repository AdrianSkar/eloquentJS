// https://eloquentjavascript.net/02_program_structure.html#i_swb9JBtSQQ

for (let i = 0, test; i < 8; i++) {
	// let test = true;
	if (test) {
		console.log(" #".repeat(4));
		test = false;
	}
	else {
		console.log("# ".repeat(4));
		test = true;
	}
}

/// Alt:

console.log('\n', 'Alt:');
let size = 8, a = ' ', b = '#';
for (let i = 0; i < size; i++) {
	(i % 2 === 0) ? console.log((a + b).repeat(size / 2)) : console.log((b + a).repeat(size / 2));
}

/// Alt 2:
console.log('\n', 'Alt 2:');
function chess(size2, a, b) {
	let output = '', count = 1;
	for (let i = 0, y = size2; i < y; i++) {
		if (i % size2 === 0) {
			output += '\n';
			count++;
		}
		(i % 2 === 0) ? console.log((a + b).repeat(size2 / 2)) : console.log((b + a).repeat(size2 / 2));
	}
	return output;
}
console.log(chess(8, " ", "#"));


/// Alt 3 (actual object outputed; not several logs):

let size2 = 8, output = '', count = 1;

for (let i = 0, y = size2 * size2; i < y; i++) {
	if (i % size2 === 0) {
		output += '\n';
		count++;
	}
	if (count % 2 === 0) { (i % 2 === 0) ? output += ' ' : output += '#'; }

	else { (i % 2 === 0) ? output += '#' : output += ' '; }
	// console.log(count);
}
console.log('Alt 3:', output, '\n');

/// Alt 4: Hinted
console.log('Alt 4:');
function chess2(num) {
	let test = [];
	//lines
	for (let i = 0; i < num; i++) {
		// rows
		for (let y = 0; y < num; y++) {
			test.push((i + y) % 2 === 0 ? " " : "#");
		}
		test.push('\n');
	}

	return test.join('');
}

console.log(chess2(8));


/// Book's solution:

console.log('\n', 'Book solution:');
let size3 = 8;

let board = "";

for (let y = 0; y < size3; y++) {
	for (let x = 0; x < size3; x++) {
		if ((x + y) % 2 == 0) {
			board += " ";
		} else {
			board += "#";
		}
	}
	board += "\n";
}

console.log(board);