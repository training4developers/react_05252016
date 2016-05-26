function doIt(a,b,c) {

	console.log(this);
	console.log(a,b,c);
	console.log('function doIt executed');
}

doIt();

var o = {
	id: 2,
	d: doIt,
	f: doIt
};

o.d();

o.d(1,2,3);

o.d.call({ id: 3 }, 1, 2, 3);
o.f.apply({ id: 4 }, [1, 2, 3]);

var fn = o.d.bind({ id: 5 }, 1, 2);
fn(6);

var g = new doIt();

console.log(doIt === o.d);
