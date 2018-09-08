class Pet {

  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet(sound) {
    return sound
  }
  
}

module.exports = Pet;


const Pet = function (name, age) {
  console.log('this', this);
  this.name = name;
  this.age = 5;
  this.legs = 4;
}

Pet.prototype.greet = function (sound) {
  return sound;

};


const dog = new Pet('fido');
console.log(dog);
