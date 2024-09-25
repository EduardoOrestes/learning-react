// DESTRUCTURING

const user = {
  firstName: 'Eduardo',
  lastName: 'Orestes',
  full_name: 'Eduardo Orestes',
  age: 35,
  instagram: '@edu_orestes',
  skills: ['back-end', 'front-end']
};

// const firstName = user.firstName;
// const age = user.age;

const { firstName, age, skills, address, full_name: fullName } = user;
const [first, second, third] = skills;

// OBJETO
  console.log('first name', firstName);
  console.log('age', age);
  console.log('skills', skills);

// é uma propriedade que nao existe, por isso vai retornar undefined
  console.log('address', address);

// variavel renomeada
  console.log('full name', fullName);

// ARRAY
  console.log('first:', first);
  console.log('second', second);

// a terceira é undefined,porque nao existe no array
  console.log('third', third);