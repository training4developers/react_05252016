const parent = {
	name: 'V',
	amt: 2000,
	address: {
		city: 'Ahmenbad',
		state: 'Guharet'
	}
};

const child = Object.create(parent);
child.name = 'N';
child.amt = 20;

console.log(child.amt);

parent.amt = 2001;

delete child.amt;

console.log(child.amt);

console.dir(child.address.city);

child.address.city = 'Paris';

console.log(parent.address.city);

console.dir(child);
