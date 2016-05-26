var person = {

	firstName: 'Bob',
	lastName: 'Martin',
	address: {
		country: 'India',
		city: 'Ahmedabad',
		state: 'Gujarat'
	},
	getFullName: function() {
		return this.firstName + ' ' + this.lastName;
	}

};

var propFirstName = 'firstName';

person['this-is-cool'] = 23;
console.log(person[propFirstName]);

person[1] = 'test';

//console.log(person.getFullName());
console.dir(person);
