// https://eloquentjavascript.net/04_data.html#i_nSTX34CM1M

const arrayToList = arr => {
	let list = null;
	for (const value of arr.reverse()) {
		list = {
			value,
			rest: list
		};
	}
	return list;
};

list2 = { value: 'one', rest: { value: 'two', rest: { value: 'three', rest: null } } };
const listToArray = list => {
	let arr = [];
	for (let node = list; node; node = node.rest) {
		arr.push(node.value);
	}
	return arr;
};

console.log(listToArray(arrayToList([5, 6, 7, 89])));
console.log(listToArray(list2));
console.log(arrayToList([10, 20, 30]));

const prepend = (item, list) => {
	list = {
		value: item,
		rest: list
	};
	return list;
};

console.log(prepend(10, list2));

const nth = (list, num) => {
	// let listArr = listToArray(list);
	// return listArr[num];

	// or:
	// for (let node = list, i = 0; node; node = node.rest, i++) {
	// 	if (num === i) {
	// 		return node.value;
	// 	}
	// }

	// recursive
	if (num === 0) {
		return list ? list.value : undefined;
	}
	else {
		return nth(list = list.rest, num - 1);
	}
};

console.log(list2);
console.log(nth(list2, 3));

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
