// https://eloquentjavascript.net/04_data.html#i_nSTX34CM1M

/**
 * Build list from array
 * @param {Array} arr array
 * @returns A list object
 */
const arrayToList = arr => {
	// let list = {};

	// for (const value of arr) { //!circular + won't create rest object
	// 	console.log(value);
	// 	list.value = value;
	// 	list.rest = list;
	// }

	/// for...of + arr.reverse()
	// for (const value of arr.reverse()) {
	// 	list = {
	// 		value: value,
	// 		rest:  (value === arr[arr.length-1]) ? 'null': list
	// 	};
	// }

	/// for--
	// for (let i = arr.length - 1, y = 0; i >= y; i--) {
	// 	console.log(i);
	// 	list = {
	// 		value: arr[i],
	// 		rest: (i === arr.length - 1) ? 'null' : list
	// 	};
	// }

	/// for + arr.reverse()
	// arr = arr.reverse();
	// for (let i = 0; i < arr.length; i++) {
	// 	//* Reassignment of `list`, if you assign props individually you'll get
	// 	//* a circular reference. 
	// 	list = {
	// 		value: arr[i],
	// 		rest: (i === 0) ? 'null' : list
	// 	};
	// 	// list.value = arr[i];
	// 	// list.rest = (i === 0) ? 'null' : list; //! circular
	// 	console.log(i);
	// }

	// return list;

	//______________________________________________________________________________

	let list = null;
	for (const value of arr.reverse()) {
		list = {
			value,
			rest: list
		};
	}
	return list;
};
console.log(arrayToList([10, 20]));
// → {value: 10, rest: {value: 20, rest: null}}


//______________________________________________________________________________


list2 = { value: 'one', rest: { value: 'two', rest: { value: 'three', rest: null } } };

/**
 * Build array from list
 * @param {Object} list List
 * @returns An array from `value` properties
 */
const listToArray = list => {
	/// while + assignment
	// let arr = [];
	// // while (typeof list.rest !== 'undefined') {
	// while (list.value) {
	// 	arr.push(list.value);
	// 	list = list.rest;
	// }
	// return arr;

	/// for + hinted loop
	let arr = [];
	for (let node = list; node; node = node.rest) {
		arr.push(node.value);
	}
	return arr;
};

console.log(listToArray(arrayToList([5, 6, 7, 89])));
console.log(listToArray(list2));
console.log(arrayToList([10, 20, 30]));


//______________________________________________________________________________


/**
 * Prepend value to list
 * @param {any} value Value to prepend
 * @param {Object} list list object
 * @returns list prepended by value
 */
const prepend = (item, list) => {
	list = {
		value: item,
		rest: list
	};
	return list;
};

console.log(prepend(10, list2));


//______________________________________________________________________________

/**
 * Return value at nth position inside list or undefined if it does not exist
 * @param {Object} list List object
 * @param {number} value number
 * @returns Element at `value` position inside `list`
 */
const nth = (list, num) => {
	/// Using already defined method
	// let listArr = listToArray(list);
	// return listArr[num];

	/// `for` index lookup
	// for (let node = list, i = 0; node; node = node.rest, i++) {
	// 	if (num === i) {
	// 		return node.value;
	// 	}
	// }

	/// `while` index lookup
	// let count = 0;
	// while (count !== num) {
	// 	if (!list.rest) { return undefined; }

	// 	// list = Object.create(list.rest);
	// 	// list = Object.assign(list.rest);
	// 	list = list.rest;
	// 	count++;
	// }
	// // return Object.values(list)[0];
	// return list.value;

	/// Recursive
	// if (num < 0) return undefined;
	// else if (num === 0) {
	// 	return list ? list.value : undefined;
	// }
	// else {
	// 	return nth(list = list.rest, num - 1);
	// }

	/// Recursive alt
	let count = 0;
	if (count === num) return list.value;
	// Else check if list.rest exists (keep trying) or, if no value exists at 
	// `num` index, return undefined.
	else return list.rest ? nth(list.rest, num - 1) : undefined;
};

console.log(nth(arrayToList([10, 20, 30]), 1));// → 20
console.log(nth(list2, 3));// → undefined
console.log(nth(list2, -3));// → undefined

//______________________________________________________________________________


/// Book's solution:
function arrayToListB(array) {
	let list = null;
	for (let i = array.length - 1; i >= 0; i--) {// doesn't need arr.reverse()
		list = { value: array[i], rest: list };
	}
	return list;
}
console.log(arrayToListB([1, 2]));

function prependB(value, list) {
	return { value, rest: list };
}
console.log(prependB(123, { value: 1, rest: null }));

function nthB(list, n) {
	if (!list) { return undefined; }
	else if (n == 0) { return list.value; }
	else return nth(list.rest, n - 1); // no need for "list = list.rest"
}

console.log(nthB(list2, 2));
console.log(nthB(list2, 20));
console.log(nthB(list2, -2));
