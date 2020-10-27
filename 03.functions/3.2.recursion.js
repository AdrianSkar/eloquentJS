// https://eloquentjavascript.net/03_functions.html#p_jU1r1XPp0G

function isEven(num) {
	if (num < 2) {
		return num === 0 ? true : false;
	}
	else { return isEven(num - 2); }
}
console.log(isEven(3));


function isEven2(num) {
	return (num < 2) ? (num === 0) ? true : false : isEven2(num - 2);
}
console.log(isEven2(5));


let isEven3 = num => (num < 2) ? (num % 2 === 0) ? true : false : isEven3(num - 2);
console.log(isEven3(-12));


// Book's solution:

function isEvenB(n) {
	console.log(n);
	if (n == 0) return true;
	else if (n == 1) return false;
	else if (n < 0) return isEvenB(-n);
	else return isEvenB(n - 2);
}
console.log(isEvenB(-5));