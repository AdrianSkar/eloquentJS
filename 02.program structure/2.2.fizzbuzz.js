// https://eloquentjavascript.net/02_program_structure.html#i_rebKE3gdjV

for (let i = 1; i < 101; i++) {
	if (i % 3 === 0 && i % 5 === 0) {
		console.log(i, 'FizzBuzz');
	}
	else if (i % 3 === 0) {
		console.log(i, 'Fizz');
	}
	else if (i % 5 === 0) {
		console.log(i, 'Buzz');
	}
	else {
		console.log(i);
	}
}

/// Alt:

for (let i = 1; i < 101; i++) {
	(i % 3 === 0 && i % 5 === 0) ? console.log(i, "FizzBuzz") :
		(i % 3 === 0) ? console.log(i, 'Fizz') :
			(i % 5 === 0) ? console.log(i, 'Buzz') :
				console.log(i);
}

/// Alt 2:
function fizz(num) {
	return (num % 5 === 0 && num % 3 === 0) ? 'FizzBuzz' :
		num % 3 === 0 ? 'Fizz' :
			num % 5 === 0 ? 'Buzz' : num;
}
let a = 0;
while (a < 100) {
	console.log(fizz(a));
	a++;
};

/// Book's solution:

for (let n = 1; n <= 100; n++) {
	let output = "";
	if (n % 3 == 0) output += "Fizz";
	if (n % 5 == 0) output += 'Buzz';
	console.log(output || n);
}
