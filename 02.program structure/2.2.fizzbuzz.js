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

/// Book's solution:

for (let n = 1; n <= 100; n++) {
	let output = "";
	if (n % 3 == 0) output += "Fizz";
	if (n % 5 == 0) output += 'Buzz';
	console.log(output || n);
}
