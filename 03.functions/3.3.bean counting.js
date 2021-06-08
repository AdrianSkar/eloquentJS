// https://eloquentjavascript.net/03_functions.html#i_3rsiDgC2do

function countBs(word) {

	// let letter = /B/g;
	// return word.match(letter).length;

	let count = 0;
	for (let i = 0; i < word.length; i++) {
		if (word[i].indexOf('B') !== -1) { // or str.includes()
			count++;
		}
	}
	return count;
}
console.log(countBs('BeanB'));


//______________________________________________________________________________


function countChars(str, letter) {
	let search = new RegExp(letter, 'g');
	let result = str.match(search);
	return result ? result.length : 0;
}
console.log(countChars('BeraeB', 'e'));

function countChar(str, letter) {
	// let search = new RegExp(letter, 'g');
	// let result = str.match(search);
	// return result ? result.length : 0;

	// let count = 0;
	// [...str].forEach(val => val === letter ? count++ : '');
	// return count;

	// return Array.from(str.matchAll(letter)).length;

	let count = 0;
	for (const letr of str.split('')) {
		if (letr === letter) count++;
	}
	return count;
}

console.log(countChar('BeraeB', 'e'));
console.log(countChar('BBS', 'B'));
console.log(countChar("kakkerlak", "k"));

//______________________________________________________________________________


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