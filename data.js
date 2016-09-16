var faker = require('faker');
var _ = require('lodash');
var CONTACTS = 25;

function getRandomArbitrary(min, max) {
	return Math.random() * (max - min) + min;
}

function generateContacts() {
	return {
		id: faker.random.uuid(),
		firstName: faker.name.firstName(),
		lastName: faker.name.lastName(),
		phone: faker.phone.phoneNumber(),
		email: faker.internet.email(),
		username: faker.internet.userName(),
		company: faker.company.companyName(),
		labels: faker.random.words(getRandomArbitrary(1, 5))
	}
}

module.exports = function() {
	return {
		contacts: _.times(CONTACTS, generateContacts)
	}
}