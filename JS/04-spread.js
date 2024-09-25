// SPREAD

const user = {
  firstName: 'Eduardo',
  lastName: 'Orestes',
  age: 35,
  instagram: '@edu_orestes',
  skills: ['back-end', 'front-end', 'mobile'],
  active: false,
};

// Spread (espalhar) - é um principio de imutabilidade, nunca mexer diretamente em um dado
// user.active = true;
// Object.assign(user, { active: true })

// vai copiar/clonar as propriedade do user para o updatedUser
// no JS, a ultima propriedade é que prevalece
const updatedUser = {
  ...user,
  skills: [...user.skills, 'marketing'], // serve tanto para ARRAY como para OBJETO
  active: true
};

console.log(user);
console.log(updatedUser);


// TOMAR CUIDADO COM A ULTIMA PROPRIEDADE É A PREVALECE