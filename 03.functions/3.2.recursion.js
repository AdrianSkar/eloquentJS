// https://eloquentjavascript.net/03_functions.html#p_jU1r1XPp0G

function isEven(num) {//! wrong for negatives
	if (num < 2) {
		return num === 0 ? true : false;
	}
	else { return isEven(num - 2); }
}
console.log(isEven(3));
console.log(isEven(2));
console.log(isEven(-5));
console.log(isEven(-6));


function isEven2(num) {//! wrong for negatives
	return (num < 2) ? (num === 0) ? true : false : isEven2(num - 2);
}
console.log(isEven2(-5));
console.log(isEven2(-6));
console.log(isEven2(6));
console.log(isEven2(3));


let isEven3 = num => (num < 2) ?
	// true/false OR recur
	((num % 2 === 0) ? true : false) : isEven3(num - 2);
console.log(isEven3(-12));
console.log(isEven3(2));
console.log(isEven3(-3));
console.log(isEven3(-4));


function isEven4(num) {
	if (num > 1) return isEven4(num - 2);
	else if (num < 0) return isEven4(num + 2);
	else if (num === 1) return 'odd';
	else if (num === 0) return 'even';
}
console.log(isEven4(75));
console.log(isEven4(-1));
console.log(isEven4(-10));


function isEven5(num) {
	// more than one

	return num > 1 ? isEven5(num - 2) :
		// less than 0
		num < 0 ? isEven5(num + 2) :
			// 1 or 0
			num === 1 ? 'odd' : 'even';
}

console.log(isEven5(75));
console.log(isEven5(-1));
console.log(isEven5(-10));


// Book's solution:

function isEvenB(n) {
	console.log(n);
	if (n == 0) return true;
	else if (n == 1) return false;
	else if (n < 0) return isEvenB(-n);
	else return isEvenB(n - 2);
}
console.log(isEvenB(-5));
console.log(isEvenB(5));
console.log(isEvenB(4));