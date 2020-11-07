// https://eloquentjavascript.net/04_data.html#i_6xTmjj4Rf5

let originalArrNum = [1, 2, 3, 4, 5, 6];
let originalArrLetters = ['A', 'B', 'C', 'D'];

const reverseArray = arr => {
	let newArr = [];

	// for (let i = 0, y = arr.length - 1; i <= y; i++) {
	// 	newArr.push(arr[y - i]);
	// }

	// or:
	// for(let key in arr) {
	// 	newArr.push(arr[(arr.length-key)-1]);
	// }

	// or:
	arr.forEach(elem => newArr.unshift(elem));
	return newArr;
};
console.log(reverseArray(originalArrNum));
console.log(reverseArray(originalArrLetters));
console.log(originalArrNum);
console.log(originalArrLetters);


//
const reverseArrayInPlace = function (arr) {
	for (let i = 0, y = arr.length - 1; i <= y / 2; i++) {
		let holdMe = arr[i];
		arr[i] = arr[y - i];
		arr[y - i] = holdMe;
	}
	return arr;
};
console.log(reverseArrayInPlace(originalArrNum));
console.log(reverseArrayInPlace(originalArrLetters));
console.log(originalArrNum);
console.log(originalArrLetters);

/// Book's solutions:

function reverseArrayB(array) {
	let output = [];
	for (let i = array.length - 1; i >= 0; i--) {
		output.push(array[i]);
	}
	return output;
}

function reverseArrayInPlaceB(array) {
	for (let i = 0; i < Math.floor(array.length / 2); i++) {
		let old = array[i];
		array[i] = array[array.length - 1 - i];
		array[array.length - 1 - i] = old;
	}
	return array;
}

console.log(reverseArrayB(['A', 'B', 'C']));
let arrayValue = [1, 2, 3, 4, 5];
reverseArrayInPlaceB(arrayValue);
console.log(arrayValue);

/* ///Notes:

	Remember the Math.floor part of line 53 in cases where your dividing values to get indexes like line 30; floating point nums can get you in trouble.
*/