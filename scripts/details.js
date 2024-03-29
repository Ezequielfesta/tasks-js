//AMAZING EVENTS API
//------------------
let url_api = "https://mindhub-xj03.onrender.com/api/amazing";

async function getData() {
    try {

        let answer = await fetch(url_api)
        let data = await answer.json()

        const queryString = location.search;
        const params = new URLSearchParams(queryString);
        const id = params.get("id") - 1;

        let cardcontainerElement = document.getElementById("cardcontainer");
        let cardElement = document.createElement("div");
        cardElement.className = "card bg-dark text-white details";
        let cardimgElement = document.createElement("img");
        cardimgElement.src = data.events[id].image;
        cardimgElement.alt = data.events[id].category;
        cardimgElement.className = "row card-img-top img-details";
        let cardbodyElement = document.createElement("div");
        cardbodyElement.className = "row card-body";
        let cardtitleElement = document.createElement("h3");
        cardtitleElement.className = "row card-title";
        cardtitleElement.innerHTML = data.events[id].name;
        let cardtextElement = document.createElement("p");
        cardtextElement.className = "row card-text";
        cardtextElement.innerHTML = data.events[id].description;
        let categorytextElement = document.createElement("p");
        categorytextElement.className = "col card-text mt-4";
        categorytextElement.innerHTML = "<b>Category:</b><br>" + data.events[id].category;
        let placetextElement = document.createElement("p");
        placetextElement.className = "col card-text mt-4";
        placetextElement.innerHTML = "<b>Place:</b><br>" + data.events[id].place;
        let datetextElement = document.createElement("p");
        datetextElement.className = "col card-text";
        datetextElement.innerHTML = "<b>Date:</b><br>" + data.events[id].date;
        let capacitytextElement = document.createElement("p");
        capacitytextElement.className = "col card-text mt-4";
        capacitytextElement.innerHTML = "<b>Capacity:</b><br>" + data.events[id].capacity;
        let assistancetextElement = document.createElement("p");
        assistancetextElement.className = "col card-text mt-4";
        assistancetextElement.innerHTML = "<b>Assistance:</b><br>" + data.events[id].assistance;
        let estimatetextElement = document.createElement("p");
        estimatetextElement.className = "col card-text mt-4";
        estimatetextElement.innerHTML = "<b>Estimate:</b><br>" + data.events[id].estimate;
        let cardrowElement = document.createElement("div");
        cardrowElement.className = "row mt-4";
        let cardcol1Element = document.createElement("div");
        cardcol1Element.className = "col cardcolcenter";
        let cardcol2Element = document.createElement("div");
        cardcol2Element.className = "col cardcolcenter";
        let cardcol3Element = document.createElement("div");
        cardcol3Element.className = "col cardcolcenter right";
        let cardpriceElement = document.createElement("p");
        cardpriceElement.innerHTML = "<b>Price:</b><br>$ " + data.events[id].price;
        let cardanchorElement = document.createElement("a");
        cardanchorElement.className = "btn btn-dark crazyborder";
        cardanchorElement.innerHTML = "Back";
        cardanchorElement.addEventListener("click", function () { window.history.back() });

        cardcontainerElement.appendChild(cardElement);
        cardElement.appendChild(cardimgElement);
        cardElement.appendChild(cardbodyElement);
        cardbodyElement.appendChild(cardtitleElement);
        cardbodyElement.appendChild(cardtextElement);
        cardbodyElement.appendChild(categorytextElement);
        cardbodyElement.appendChild(placetextElement);
        cardbodyElement.appendChild(capacitytextElement);
        if (data.events[id].hasOwnProperty('assistance')) {
            cardbodyElement.appendChild(assistancetextElement);
        }
        if (data.events[id].hasOwnProperty('estimate')) {
            cardbodyElement.appendChild(estimatetextElement);
        }
        cardbodyElement.appendChild(cardrowElement);
        cardrowElement.appendChild(cardcol1Element);
        cardrowElement.appendChild(cardcol2Element);
        cardrowElement.appendChild(cardcol3Element);
        cardcol1Element.appendChild(cardpriceElement);
        cardcol2Element.appendChild(datetextElement);
        cardcol3Element.appendChild(cardanchorElement);

        let titleElement = document.getElementById("details");
        titleElement.scrollIntoView();

    } catch {
        console.log('API Error')
    }
}
getData();
