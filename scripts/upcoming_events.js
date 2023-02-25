//CARD CONTAINER 

for (i = 0; i < data.events.length; i++) {

  if(Date.parse(data.currentDate) > Date.parse(data.events[i].date)) {} else {
    //console.log("El evento "+data.events[i]._id+" es Upcoming Event")
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
};