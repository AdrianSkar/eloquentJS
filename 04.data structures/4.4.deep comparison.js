// https://eloquentjavascript.net/04_data.html#i_IJBU+aXOIC

/**
 * Compare objects and check if they are the same value or have the same props
 * @param {Object} obj1 First object
 * @param {Object} obj2 Second object
 * @returns `true` if they are the same value or objects with the same props
 */
function deepEqual(a, b) {
	// if (a !== null && b !== null && typeof (a) === 'object' && typeof (b) === 'object') {
	// 	let response = [];
	// 	for (const value of Object.keys(a)) {
	// 		if (typeof (a[value]) !== 'object') {
	// 			response.push(a[value] === b[value]);
	// 		}
	// 		response.push(deepEqual(a[value], b[value]));
	// 	}
	// 	return !response.includes(false);
	// }
	// return a === b;

	/// Alt
	// Manage non-objects and null values
	if (typeof a !== 'object' || typeof b !== 'object' || a === null || b === null) {
		return a === b;
	}
	// Check length
	if (Object.keys(a).length !== Object.keys(b).length) return false;

	// Go for objects/props
	for (const prop in a) {
		if (!deepEqual(a[prop], b[prop])) return false;
	}
	return true;
}

let obj = { here: { is: "an" }, object: 2 };

console.log(deepEqual(obj, obj));
// → true
console.log(deepEqual(obj, { here: 1, object: 2 }));
// → false
console.log(deepEqual(obj, { here: { is: "an" }, object: 2 }));
// → true
console.log(deepEqual(obj, { here: { is: "an" }, nine: 23, object: { test: 2 } }));
// → false
console.log(deepEqual({ one: 2, two: { a: 1, b: null } }, { one: 2, two: { a: 1, b: 456 } }));
//-> false


///Book's solution:

// let obj = { here: { is: "an" }, object: 2 };
function deepEqualB(a, b) {
	if (a === b) {
		return true;
	}
	if (a == null || typeof a != 'object' || b == null || typeof b != 'object') {
		return false;
	}

	let keysA = Object.keys(a), keysB = Object.keys(b);

	if (keysA.length != keysB.length) {
		return false;
	}
	for (const key of keysA) {
		if (!keysB.includes(key) || !deepEqualB(a[key], b[key])) {
			return false;
		}
	}
	return true;
}
console.log(deepEqualB(obj, obj));
// → true
console.log(deepEqualB(null, null));
// → true
console.log(deepEqualB(null, null));
// → true
console.log(deepEqualB(obj, { here: 1, object: 2 }));
// → false
console.log(deepEqualB(obj, { here: { is: "an" }, object: 2 }));
// // → true
console.log(deepEqualB(obj, { here: { is: "an" }, nine: 23, object: { test: 2 } }));
// → false

console.log(deepEqualB({ one: 2, two: { a: 1, b: null } }, { one: 2, two: { a: 1, b: 456 } }));
//-> false
