// dogs.js - Northern Paws Rescue
// Class Activity 6: you will write this file, step by step.

const randomDogUrl = "https://dog.ceo/api/breeds/image/random";

const dogButton = document.querySelector("#dog-button");
const dogStatus = document.querySelector("#dog-status");
const dogFigure = document.querySelector("#dog-figure");
const dogPhoto = document.querySelector("#dog-photo");
const dogCaption = document.querySelector("#dog-caption");

async function loadRandomDog() {
  dogStatus.textContent = "Loading…";
  const response = await fetch(randomDogUrl);
  const data = await response.json();
  dogPhoto.src = data.message;
  dogPhoto.alt = "A random dog";
  dogCaption.textContent = "A random dog";
  dogFigure.classList.remove("hidden");
  dogStatus.textContent = "";
}

dogButton.addEventListener("click", () => {
  loadRandomDog();
});
