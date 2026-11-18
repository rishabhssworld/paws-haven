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
const searchInput = document.querySelector("#pet-search");
const searchForm = document.querySelector("#pets form");
const noResults = document.querySelector("#no-results");

//---------------------//

function filterPets(searchText) {
  const search = searchText.trim().toLowerCase();
  let shown = 0;

  for (const item of petItems) {
    const name = item.querySelector("h3").textContent;
    if (name.includes(search)) {
      item.classList.remove("hidden");
      shown++;
    } else {
      item.classList.add("hidden");
    }
  }
  petCount.textContent =
    "Showing " + shown + " of " + petItems.length + " pets";

  if (shown === 0) {
    noResults.classList.remove("hidden");
  } else {
    noResults.classList.add("hidden");
  }
}

searchInput.addEventListener("input", () => {
  filterPets(searchInput.value);
});

searchForm.addEventListener("submit", (event) => {
  event.preventDefault();
});

filterPets("");
//---------------------//
