doIt();

function doIt(a,b,c) {
	console.log(a,b,c);
	console.dir(arguments);
}

doIt(1,2,3,4,5,6,7);

doIt.someProp = 'This is cool!';

console.dir(doIt);

fn();

var fn = function() {
	console.log('I can do it too!');
};

const fn = (a) => {
	console.log(a+ '...');
};



fn();

+function() {

}();
