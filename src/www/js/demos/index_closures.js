function outer() {

	var t = 2;

	setTimeout(function() {
		t = 4;
	}, 2000);

	return function inner() {

		console.log(t);

	};

}

var fn = outer();

setTimeout(function() {
	fn();
}, 4000);

fn();
