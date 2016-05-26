var t;

console.log(typeof t);

t = 2;
console.log(typeof t);

t = 'Hi Class!';
console.log(typeof t);

t = true;
console.log(typeof t);

t = Symbol();
console.log(typeof t);

t = null;
console.log(typeof t);

t = {
	id: 2
};
console.log(typeof t);

t = [1,2,3];
console.log(typeof t);

t = function() { };
console.log(typeof t);
console.dir(t);
