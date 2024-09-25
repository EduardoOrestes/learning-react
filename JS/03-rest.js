// REST

const user = {
  firstName: 'Eduardo',
  lastName: 'Orestes',
  full_name: 'Eduardo Orestes',
  age: 35,
  instagram: '@edu_orestes',
  skills: ['back-end', 'front-end', 'mobile']
};

// pega o restante das propriedades (full_name, age, instagram, skills) / deve ser a ultima variavel

// OBJETO
const { firstName, skills, ...restante } = user;
console.log(restante);

// ARRAY
const [primary, ...restoSkills] = skills;
console.log(restoSkills);