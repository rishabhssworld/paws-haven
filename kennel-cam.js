// kennel-cam.js - Kennel cam
// WARNING: this file has planted bugs for Class Activity 6, Step 8.

const apiUrl = "https://dog.ceo/api";

const camForm = document.querySelector("#cam-form");
const breedInput = document.querySelector("#breed-input");
const camStatus = document.querySelector("#cam-status");
const camPhoto = document.querySelector("#cam-photo");

async function loadPhoto(breed) {
  camStatus.textContent = "Loading…";
  try {
    const response = await fetch(apiUrl + "/breed/" + breed + "/images/random");
    if (!response.ok) {
      throw new Error("Breed not found");
    }
    const data = await response.json();
    camPhoto.src = data.message;
    camPhoto.alt = "A random " + breed;
    camPhoto.classList.remove("hidden");
    camStatus.textContent = "";
  } catch (error) {
    console.error("Kennel Cam error:", error);
    camStatus.textContent = "Could not load the dog photo. Please try again.";
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
