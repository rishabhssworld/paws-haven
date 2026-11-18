// script.js - Northern Paws Rescue
// Class Activity 5: you will write this file, step by step.

//---------------------//
const petName = "Mochi";
let daysWaiting = 12;
daysWaiting = daysWaiting + 1;
console.log(petName + " has waited " + daysWaiting + " days.");

//---------------------//
console.log("5" == 5);
console.log("5" === 5);

//---------------------//
const typedValue = "";
if (typedValue === "") {
  console.log("Nothing typed.");
} else {
  console.log("Searching for " + typedValue);
}

//---------------------//
const pets = ["Biscuit", "Mochi", "Clover", "Pepper"];
for (const pet of pets) {
  console.log(pet);
}
//---------------------//
function describePet(name, years) {
  return name + " is " + years + " years old.";
}

console.log(describePet("Mochi", 2));
console.log(describePet("Pepper", 6));

//---------------------//
const typed = "  MoChI ";
console.log(typed.trim());
console.log(typed.trim().toLowerCase());
console.log("mochi".includes("mo"));
console.log("mochi".includes("zz"));
//---------------------//

function isLong(name) {
  if (name.length > 5) {
    return true;
  } else {
    return false;
  }
}

for (const pet of pets) {
  if (isLong(pet)) {
    console.log(pet);
  }
}

//---------------------//
// script.js - Northern Paws Rescue
// Class Activity 5

const petItems = document.querySelectorAll(".pet-list li");
const petCount = document.querySelector("#pet-count");

petCount.textContent =
  "Showing " + petItems.length + " of " + petItems.length + " pets";
