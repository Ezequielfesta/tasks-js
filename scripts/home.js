//CHECKBOX CONTAINER

let categories = [];
for (i = 0; i < data.events.length; i++) {
if(!categories.includes(data.events[i].category))
{categories.push(data.events[i].category)}
}

for (i = 0; i < categories.length; i++) {
let formcheckinlineElement = document.getElementById("checkboxcontainer");
formcheckinlineElement.className = "form-check-inline";
let formcheckinputElement = document.createElement("input");
formcheckinputElement.className = "form-check-input";
formcheckinputElement.type = "checkbox";
formcheckinputElement.value = "category"+(i+1);
formcheckinputElement.id = "inlineCheckbox"+(i+1);
let formchecklabelElement = document.createElement("label");
formchecklabelElement.for = "inlineCheckbox"+(i+1);
formchecklabelElement.innerHTML = categories[i];

formcheckinlineElement.appendChild(formcheckinputElement);
formcheckinlineElement.appendChild(formchecklabelElement);
}


//CARD CONTAINER 

for (i = 0; i < data.events.length; i++) {
  let cardcontainerElement = document.getElementById("cardcontainer");
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
  cardanchorElement.href = "./details.html#Cinema";
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