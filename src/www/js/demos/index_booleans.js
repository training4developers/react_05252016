// falsy values

// 0
// ''
// false
// undefined
// null
// NaN

// if (2) {
// 	console.log('truthy');
// } else {
// 	console.log('falsy');
// }

var g = NaN && 2;

function doIt(someValue) {
	var g = someValue || 'default value';
}

console.log(g);
