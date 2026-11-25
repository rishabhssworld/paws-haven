// dogs.js - Northern Paws Rescue
// Class Activity 6: you will write this file, step by step.

const API_URL = "https://dog.ceo/api";

const dogButton = document.querySelector("#dog-button");
const breedSelect = document.querySelector("#breed-select");
const dogStatus = document.querySelector("#dog-status");
const dogError = document.querySelector("#dog-error");
const dogFigure = document.querySelector("#dog-figure");
const dogPhoto = document.querySelector("#dog-photo");
const dogCaption = document.querySelector("#dog-caption");

async function getJson(path) {
  const response = await fetch(API_URL + path);
  if (!response.ok) {
    throw new Error("Request failed with status " + response.status);
  }
  return await response.json();
}

function showDog(imageUrl, description) {
  dogPhoto.src = imageUrl;
  dogPhoto.alt = description;
  dogCaption.textContent = description;
  dogFigure.classList.remove("hidden");
}

async function loadDog(path, description) {
  dogError.textContent = "";
  dogStatus.textContent = "Loading…";
  try {
    const data = await getJson(path);
    showDog(data.message, description);
    dogStatus.textContent = "";
  } catch (error) {
    console.error("Failed to load a dog:", error);
    dogStatus.textContent = "";
    dogError.textContent = "Sorry, the dogs are napping. Please try again.";
  }
}

async function loadBreeds() {
  try {
    const data = await getJson("/breeds/list/all");
    const breeds = Object.keys(data.message);
    for (const breed of breeds) {
      const option = document.createElement("option");
      option.value = breed;
      option.textContent = breed;
      breedSelect.appendChild(option);
    }

    dogStatus.textContent = breeds.length + " breeds available";
  } catch (error) {
    console.error("Failed to load breeds:", error);
    dogError.textContent = "Could not load the breed list.";
  }
}

dogButton.addEventListener("click", () => {
  loadDog("/breeds/image/random", "A random dog");
});

breedSelect.addEventListener("change", () => {
  const breed = breedSelect.value;
  if (breed === "") {
    return;
  }
  loadDog("/breed/" + breed + "/images/random", "A random " + breed + " dog");
});

loadBreeds();
