// https://eloquentjavascript.net/04_data.html#i_IJBU+aXOIC

function deepEqual(a, b) {
	if (a !== null && b !== null && typeof (a) === 'object' && typeof (b) === 'object') {
		let response = [];
		for (const value of Object.keys(a)) {
			if (typeof (a[value]) !== 'object') {
				response.push(a[value] === b[value]);
			}
			response.push(deepEqual(a[value], b[value]));
		}
		return !response.includes(false);
	}
	return a === b;
}

let obj = { here: { is: "an" }, object: 2 };

console.log(deepEqual(obj, obj));
// → true
console.log(deepEqual(obj, { here: 1, object: 2 }));
// → false
console.log(deepEqual(obj, { here: { is: "an" }, object: 2 }));
// // → true
console.log(deepEqual(obj, { here: { is: "an" }, nine: 23, object: { test: 2 } }));
// → false

///Book's solution:

function deepEqualB(a, b) { // Longer but better performance 
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
		if (!keysB.includes(key) || !deepEqual(a[key], b[key])) {
			return false;
		}
	}
	return true;
}
console.log(deepEqualB(obj, obj));
// → true
console.log(deepEqualB(obj, { here: 1, object: 2 }));
// → false
console.log(deepEqualB(obj, { here: { is: "an" }, object: 2 }));
// // → true
console.log(deepEqualB(obj, { here: { is: "an" }, nine: 23, object: { test: 2 } }));
// → false



