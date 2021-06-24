// https://eloquentjavascript.net/04_data.html#i_6xTmjj4Rf5

let originalArrNum = [1, 2, 3, 4, 5, 6];
let originalArrLetters = ['A', 'B', 'C', 'D'];

/**
 * @param {Array} array
 * @returns New array with the same elements in reverse order
 */
const reverseArray = arr => {
	let newArr = [];

	/// reverse for + push
	// for (let i = arr.length - 1, y = 0; i >= y; i--) {
	// 	newArr.push(arr[i]);
	// }

	/// for pushing from end
	// for (let i = 0, y = arr.length - 1; i <= y; i++) {
	// 	newArr.push(arr[y - i]);
	// }

	/// for + unshift
	// for (let i = 0; i < arr.length; i++) {
	// 	newArr.unshift(arr[i]);
	// }

	/// for...in
	// for(let key in arr) {
	// 	newArr.push(arr[(arr.length-key)-1]);
	// }

	/// forEach
	// arr.forEach(elem => newArr.unshift(elem));
	arr.map(elem => newArr.unshift(elem));

	return newArr;
};
console.log(reverseArray(originalArrNum));
console.log(reverseArray(originalArrLetters));
console.log(originalArrNum);
console.log(originalArrLetters);


/**
 *
 * @param {Array} arr Array
 * @returns Reversed input array
 */
const reverseArrayInPlace = function (arr) {
	/// Assignment/swap (stop at arr.length/2)
	// for (let i = 0, y = Math.floor(arr.length / 2), last = arr.length - 1, temp; i < y; i++) {
	// 	// Hold 1st value
	// 	temp = arr[i];
	// 	// Change 1st for last
	// 	arr[i] = arr[last - i];
	// 	// Change last for temp
	// 	arr[last - i] = temp;
	// }
	// for (let i = 0, y = arr.length - 1; i <= y / 2; i++) {
	// 	let holdMe = arr[i];
	// 	arr[i] = arr[y - i];
	// 	arr[y - i] = holdMe;
	// }

	/// splice
	let i = 0, len = arr.length;
	while (i <= Math.floor(len / 2)) {
		// take last value and put it in the front
		arr.splice(i, 0, arr.pop());
		i++;
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
	Remember the Math.floor part when dividing values to get indexes; floating point nums can get you in trouble.
*/