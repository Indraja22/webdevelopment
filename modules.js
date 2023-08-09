const {john,peter} = require('./names');
const sayHi = require('./utils');
const data = require('./alternative-flavor');
require('./mind-grenade');

console.log(data.singlePerson['name']);

sayHi('Susan');
sayHi(john);
sayHi(peter);

console.log(`54.20`);