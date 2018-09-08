const pet = {
   name: 'fido',
   species: 'dog',
   age: 5,
   owner: 'Sarah'
  }

for (const key in pet) {
  console.log(key);
}

//   {name: 'sally',
//    species: 'snake'
//  },
// {
//   name: 'junior',
//   species: 'snail'
// },
//
//
// for (const pet of pets) {
//   console.log(pet.name);
// }
// // or below if used dynamically
//
// const property = 'name';
// for  (const pet of pets) {
//   console.log(pet.[property]);
// }
