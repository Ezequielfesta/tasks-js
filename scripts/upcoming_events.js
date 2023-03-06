//DYNAMIC CHECKBOX GENERATOR AND SEARCH BAR
//-----------------------------------------
let categories = [];
for (i = 0; i < data.events.length; i++) {
  if (!categories.includes(data.events[i].category)) { categories.push(data.events[i].category) }
}

for (i = 0; i < categories.length; i++) {
  let formcheckinlineElement = document.getElementById("checkboxcontainer");
  formcheckinlineElement.className = "form-check-inline";
  let formcheckdivElement = document.createElement("div");
  formcheckdivElement.className = "checkboxgroup";
  let formcheckinputElement = document.createElement("input");
  formcheckinputElement.className = "form-check-input";
  formcheckinputElement.type = "checkbox";
  formcheckinputElement.value = categories[i];
  formcheckinputElement.id = "checkbox" + i;
  formcheckinputElement.checked = "checked";
  let formchecklabelElement = document.createElement("label");
  formchecklabelElement.for = "checkbox" + i;
  formchecklabelElement.innerHTML = categories[i];
  formcheckinlineElement.appendChild(formcheckdivElement);
  formcheckdivElement.appendChild(formcheckinputElement);
  formcheckdivElement.appendChild(formchecklabelElement);
}

let searchbar = document.getElementById("searchbar")
let input = document.getElementById("search")
let searchbtn = document.getElementById("submit")
input.value = ""

let checkboxButtons = document.querySelectorAll("input[type=checkbox]");
checkboxButtons.forEach(checkbox => checkbox.addEventListener("change", isSelected));
let selected = Array.from(checkboxButtons).filter(checkbox => checkbox.checked);
generateCards(selected);

function isSelected() {
  let selected = Array.from(checkboxButtons).filter(checkbox => checkbox.checked)
  generateCards(selected)
}

searchbtn.addEventListener("click", (e) => {
  let selected = Array.from(checkboxButtons).filter(checkbox => checkbox.checked)
  generateCards(selected)
}
)

//DYNAMIC CARD GENERATOR 
//----------------------

function generateCards(paramcheck) {
  let cardcontainerElement = document.getElementById("cardcontainer");
  cardcontainerElement.innerHTML = "";
  let cardExists = false;
  for (i = 0; i < data.events.length; i++) {
    if (Date.parse(data.currentDate) <= Date.parse(data.events[i].date)) {
      if (data.events[i].name.toLowerCase().includes(input.value.toLowerCase()) || data.events[i].description.toLowerCase().includes(input.value.toLowerCase())) {
        for (j = 0; j < paramcheck.length; j++) {
          if (paramcheck[j].value == data.events[i].category) {
            cardExists = true;
            let cardElement = document.createElement("div");
            cardElement.className = "card bg-dark text-white";
            let cardimgElement = document.createElement("img");
            cardimgElement.src = data.events[i].image;
            cardimgElement.alt = data.events[i].category;
            cardimgElement.className = "row card-img-top";
            let cardbodyElement = document.createElement("div");
            cardbodyElement.className = "row card-body";
            let cardtitleElement = document.createElement("h5");
            cardtitleElement.className = "row card-title";
            cardtitleElement.innerHTML = data.events[i].name;
            let cardtextElement = document.createElement("p");
            cardtextElement.className = "row card-text";
            cardtextElement.innerHTML = data.events[i].description;
            let cardrowElement = document.createElement("div");
            cardrowElement.className = "row mt-4";
            let cardcol1Element = document.createElement("div");
            cardcol1Element.className = "col cardcolcenter";
            let cardcol2Element = document.createElement("div");
            cardcol2Element.className = "col cardcolcenter right";
            let cardpriceElement = document.createElement("p");
            cardpriceElement.innerHTML = "Price:<br>$ " + data.events[i].price;
            let cardanchorElement = document.createElement("a");
            cardanchorElement.className = "btn btn-dark crazyborder";
            cardanchorElement.href = "./details.html?id=" + data.events[i]._id;
            cardanchorElement.innerHTML = "Details";

            cardcontainerElement.appendChild(cardElement);
            cardElement.appendChild(cardimgElement);
            cardElement.appendChild(cardbodyElement);
            cardbodyElement.appendChild(cardtitleElement);
            cardbodyElement.appendChild(cardtextElement);
            cardbodyElement.appendChild(cardrowElement);
            cardrowElement.appendChild(cardcol1Element);
            cardrowElement.appendChild(cardcol2Element);
            cardcol1Element.appendChild(cardpriceElement);
            cardcol2Element.appendChild(cardanchorElement);
          }
        }
      }
    }
  }

  if (cardExists == false) {
    let cardcontainerElement = document.getElementById("cardcontainer");
    cardcontainerElement.innerHTML = "<h3 class=text-white>No matching results.</h3><h5 class=text-white>Try selecting a different filter.</h5>";
  }
}