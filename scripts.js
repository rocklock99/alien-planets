import { alienPlanets } from "./alienPlanets.js";

const alienContainer = document.querySelector("#alien-container");

function render() {
  for (let planet of alienPlanets) {
    const fragment = document.createDocumentFragment();
    const planetCard = document.createElement("div");
    planetCard.classList.add("planet-cards");
    fragment.append(planetCard);
    const planetName = document.createElement("p");
    planetName.classList.add("planet-names");
    planetName.textContent = planet.name;
    planetCard.append(planetName);
    const planetEmoji = document.createElement("p");
    planetEmoji.classList.add("planet-emojis");
    planetEmoji.textContent = planet.emoji;
    planetCard.append(planetEmoji);
    alienContainer.append(fragment);
  }
}

render();
