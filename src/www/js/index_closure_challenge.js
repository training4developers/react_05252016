var x=0, y=0, funcs=[];

for(; x<5; x++) {
	// modify code between here
	// cannot use y
	// cannot evaluate the console.log in the first loop

	const f = x;

	//function h(f) {
		funcs.push(function() {
			console.log(f);
		});
	//}

	//h(x);

	// and here
}

for(; y<5; y++) {
	funcs[y]();
}

// 0
// 1
// 2
// 3
// 4
