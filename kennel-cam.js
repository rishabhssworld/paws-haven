// kennel-cam.js - Kennel cam
// WARNING: this file has planted bugs for Class Activity 6, Step 8.

const apiUrl = "https://dog.ceo/api";

const camForm = document.querySelector("#cam-form");
const breedInput = document.querySelector("#breed-input");
const camStatus = document.querySelector("#cam-status");
const camPhoto = document.querySelector("#cam-photo");

function loadPhoto(breed) {
  camStatus.textContent = "Loading…";
  try {
    const response = fetch(apiUrl + "/breed/" + breed + "/images/random");
    const data = response.json();
    camPhoto.src = data.url;
    camPhoto.alt = "A random " + breed;
    camPhoto.classList.remove("hidden");
    camStatus.textContent = "";
  } catch (error) {
  }
}

camForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const breed = breedInput.value.trim().toLowerCase();

  if (breed === "") {
    camStatus.textContent = "Type a breed first.";
    return;
  }

  loadPhoto(breed);
});
