for (let i = 0; i < 8; i++) {
	console.log('#'.repeat(i));
}

// book's solution:

for (let line = '#'; line.length < 8; line += '#') {
	console.log(line);
}
