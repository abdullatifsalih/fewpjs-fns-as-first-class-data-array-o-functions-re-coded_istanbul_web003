function wakeDog(dogName,dogBreed) {
  return(`Wake ${dogName} the ${dogBreed}`); 
}
wakeDog("Xerox","Border Collie");

function leashDog (dogName,dogBreed) {
return (`Leash ${dogName} the ${dogBreed}`);
}
leashDog("Boo Radley","Pibble");

function walkToPark(dogName, dogBreed) {
  return(`Walk to the park with ${dogName} the ${dogBreed}`);
} 
walkToPark("Bunny","Labrador")

function throwFrisbee(dogName, dogBreed) {
  return(`Throw the frisbee for ${dogName} the ${dogBreed}`);
} 
throwFrisbee("Mary J. Blige","Papillon")

function walkHome(dogName, dogBreed) {
  return(`Walk home with ${dogName} the ${dogBreed}`);
}
walkHome("Santa Paws","Husky")

function unleashDog (dogName, dogBreed){
  return(`Unleash ${dogName} the ${dogBreed}`); 
}
unleashDog("Lauren","Golden Retriever");
let routine = [wakeDog ,leashDog ,walkToPark,throwFrisbee,walkHome,unleashDog];

function exerciseDog (dogName, dogBreed){
  let array =[];
  for(let i=0;i<routine.length;i++){
      array.push(routine[i](dogName, dogBreed))
  }
  return array
}