let selectPlanet = document.getElementById("select_planet");
selectPlanet.disabled = true;

let select = document.querySelector(".userField select");
select.style.color = "grey";

const planets = [
  "MERCURY",
  "VENUS",
  "EARTH",
  "MARS",
  "JUPITER",
  "SATURN",
  "URANUS",
  "NEPTUNE",
  "PLUTO",
];
const gValues = [3.7, 8.87, 9.8, 3.71, 24.79, 10.44, 8.87, 11.15, 0.62];

planets.forEach((planet) => {
  let option = document.createElement("option");
  option.textContent = planet;
  select.appendChild(option);
});

let inputField = document.querySelector(".userField input");
let btn = document.querySelector(".userField button");
let container = document.querySelector(".output_container");
let initalText = document.querySelector(".initialText");
let initialTextP = document.querySelector(".initialText p");
let planetsContainer = document.querySelector(".imgContainer");
let circularValue = document.getElementById("circularValue");
let weightOfObject = document.querySelector("#circularValue p");

function findWeight(m, g) {
  return (weightOfObject.textContent = Math.round(m * g) + "N");
}

btn.addEventListener("click", () => {
  let selectedOption = select.value; // Get the selected option
  planetsContainer.innerHTML = " ";
  container.style.gridTemplateColumns = "";
  initialTextP.textContent = `Mass is required`;
  circularValue.style.display = "none";

  // Find the index of the selected planet

  let index = planets.indexOf(selectedOption);

  for (i = 0; i < planets.length; i++) {
    if (index == i) {
      let g = gValues[i];
      findWeight(inputField.value, g);
    }
  }
  if (inputField.value == "") {
    planetsContainer.style.display = "none"; //It resolves the slight increment of the output containerwhen button is clicked
  } else if (isNaN(inputField.value)) {
    planetsContainer.style.display = "none";
    alert("Enter a number");
  } else {
    if (index !== -1) {
      planetsContainer.style.display = "block";
      container.style.gridTemplateColumns = "1fr 1fr";
      circularValue.style.display = "flex";
      initalText.style.display = "flex";
      initialTextP.textContent = `The weight of an object on ${selectedOption}`;
      let img = document.createElement("img");
      img.src = `images/${selectedOption.toLowerCase()}.png`;
      img.style.width = "90%";
      planetsContainer.appendChild(img);
    }
  }
});
