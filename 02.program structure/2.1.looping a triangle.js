// https://eloquentjavascript.net/02_program_structure.html#i_umoXp9u0e7

for (let i = 0; i < 8; i++) {
	console.log('#'.repeat(i));
}

//______________________________________________________________________________

let a = '#';
while (a.length < 8) {
	console.log(a);
	a = a.concat('#');
}

//______________________________________________________________________________

// Book's solution:

for (let line = '#'; line.length < 8; line += '#') {
	console.log(line);
}
