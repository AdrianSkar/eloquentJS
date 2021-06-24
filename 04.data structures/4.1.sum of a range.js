// https://eloquentjavascript.net/04_data.html#h_TcUD2vzyMe

const range = (a, b, c) => {
	let arr = [], step;
	if (b > a) {
		step = c || 1;
		for (; a <= b; a += step) {
			arr.push(a);
		}
	}
	else {
		step = c || -1;
		for (; a >= b; a += step) {
			arr.push(a);
		}
	}
	return arr;

	// let output = [], dif = step ? step : 1;
	// if (start < end) {
	// 	while (start <= end) {
	// 		output.push(start);
	// 		start += dif;
	// 	}
	// }
	// else if (start > end) {
	// 	while (start >= end) {
	// 		output.push(start);
	// 		start += dif;
	// 	}
	// }
	// return output;

};
console.log(range(1, 10)); // [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]
console.log(range(1, 10, 2)); // [ 1, 3, 5, 7, 9]
console.log(range(5, 2)); // [ 5, 4, 3, 2]
console.log(range(5, 2, -1));
console.log(range(5, 2, -2));

const sum = (arr) => arr.reduce((a, b) => a + b);
console.log(sum([1, 2, 3])); // 6

console.log(sum(range(1, 10))); // 55


/// Books' solution:

function rangeB(start, end, step = start < end ? 1 : -1) {
	let array = [];
	if (step > 0) {
		for (let i = start; i <= end; i += step) array.push(i);
	}
	else {
		for (let i = start; i >= end; i += step) array.push(i);
	}
	return array;
}

function sumB(array) {
	let total = 0;
	for (let value of array) { total += value; }
	return total;
}
