// https://eloquentjavascript.net/05_higher_order.html#h_xxCc98lOBK
function greaterThan(n) {
	//* Return a function
	return m => m > n;
}
let greaterThan10 = greaterThan(10);
console.log(greaterThan10);
console.log(greaterThan10(11));


function noisy(f) {
	//* Takes Math.min as arg and returns a new function:
	return (...args) => {
		//* Takes subsequent arguments and applies Math.min(f) to them
		console.log("calling with", args);
		let result = f(...args);
		console.log("called with", args, ", returning", result);
		return result;
	};
}
noisy(Math.min)(3, 2, 1);