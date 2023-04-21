const person = {
  firstName: 'Blake',
  lastName: 'Frangoulis',
  hobby: 'Video Games',
};

console.log(person);

person.fullname = person.firstName + ' ' + person.lastName;
console.log("The human's full name is:", person.fullname);

person.job = 'Student';
console.log("The human's job is:", person.job);

person.previousJob = 'Driver';
console.log("The human's previous job is:", person.previousJob);

console.log('The complete person object:', person);
