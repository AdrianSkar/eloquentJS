// https://eloquentjavascript.net/03_functions.html#i_3rsiDgC2do

function countBs(word) {
	let count = 0;
	for (let i = 0; i < word.length; i++) {
		if (word[i].indexOf('B') !== -1) { // or str.includes()
			count++;
		}
	}
	return count;
}
console.log(countBs('BeanB'));

function countBs2(word) {
	let letter = /B/g;
	return word.match(letter).length;
}
console.log(countBs2('BeranB'));

function countChars(word, letter) {
	let search = new RegExp(letter, 'g');
	let result = word.match(search);
	return result ? result.length : 0;
}
console.log(countChars('BeraeB', 'x'));

function reCountB(word) {
	let search = 'B';
	return countChars(word, search);
}
console.log(reCountB('testeBBee'));


// Book's solution:

function countCharB(string, ch) {
	let counted = 0;
	for (let i = 0; i < string.length; i++) {
		if (string[i] == ch) {
			counted += 1;
		}
	}
	return counted;
}

function countBsB(string) {
	return countCharB(string, 'B');
}

console.log(countBsB('BeanB'));
console.log(countCharB('BeanB', 'B'));