var data = {
    "currentDate": "2022-01-01",
    "events": [
      {
        _id: 1,
        "image":"https://i.postimg.cc/Fs03hQDt/Collectivities-Party.jpg",
        "name":"Collectivities Party",
        "date":"2021-12-12",
        "description":"Enjoy your favourite dishes, from different countries, in a unique event for the whole family.",
        "category":"Food Fair",
        "place":"Room A",
        "capacity":45000,
        "assistance":42756,
        "price":5
      },
      {
        _id: 2,
        "image":"https://i.postimg.cc/ZmD3Xf57/Korean-style.jpg",
        "name":"Korean style",
        "date":"2022-08-12",
        "description":"Enjoy the best Korean dishes, with international chefs and awesome events.",
        "category":"Food Fair",
        "place":"Room A",
        "capacity":45000,
        "assistance":42756,
        "price":10
      },
      {
        _id: 3,
        "image":"https://i.postimg.cc/GmHRkbNV/Jurassic-Park.jpg",
        "name":"Jurassic Park",
        "date":"2021-11-02",
        "description":"Let's go meet the biggest dinosaurs in the paleontology museum.",
        "category":"Museum",
        "place":"Field",
        "capacity":82000,
        "assistance":65892,
        "price":15
      },
      {
        _id: 4,
        "image":"https://i.postimg.cc/c4C2zXm8/Parisian-Museum.jpg",
        "name":"Parisian Museum",
        "date":"2022-11-02",
        "description":"A unique tour in the city of lights, get to know one of the most iconic places.",
        "category":"Museum",
        "place":"Paris",
        "capacity":8200,
        "estimate":8200,
        "price":3500
      },
      {
        _id: 5,
        "image":"https://i.postimg.cc/KYD0jMf2/comicon.jpg",
        "name":"Comicon",
        "date":"2021-02-12",
        "description":"For comic lovers, all your favourite characters gathered in one place.",
        "category":"Costume Party",
        "place":"Room C",
        "capacity":120000,
        "assistance":110000,
        "price":54
      },
      {
        _id: 6,
        "image":"https://i.postimg.cc/RZ9fH4Pr/halloween.jpg",
        "name":"Halloween Night",
        "date":"2022-02-12",
        "description":"Come with your scariest costume and win incredible prizes.",
        "category":"Costume Party",
        "place":"Room C",
        "capacity":12000,
        "estimate":9000,
        "price":12
      },
      {
        _id: 7,
        "image":"https://i.postimg.cc/PrMJ0ZMc/Metallica-in-concert.jpg",
        "name":"Metallica in concert",
        "date":"2022-01-22",
        "description":"The only concert of the most emblematic band in the world.",
        "category":"Music Concert",
        "place":"Room A"
        ,"capacity":138000,
        "estimate":138000,
        "price":150
      },
      {
        _id: 8,
        "image":"https://i.postimg.cc/KvsSK8cj/Electronic-Fest.jpg",
        "name":"Electronic Fest",
        "date":"2021-01-22",
        "description":"The best national and international DJs gathered in one place.",
        "category":"Music Concert",
        "place":"Room A",
        "capacity":138000,
        "assistance":110300,
        "price":250
        },
      {
        _id: 9,
        "image":"https://i.postimg.cc/fyLqZY9K/10-K-for-life.jpg",
        "name":"10K for life",
        "date":"2021-03-01",
        "description":"Come and exercise, improve your health and lifestyle.",
        "category":"Race",
        "place":"Soccer field",
        "capacity":30000,
        "assistance":25698,
        "price":3
      },
      {
        _id: 10,
        "image":"https://i.postimg.cc/zv67r65z/15kny.jpg",
        "name":"15K NY",
        "date":"2022-03-01",
        "description":"We'll be raising funds for hospitals and medical care in this unique event held in The Big Apple.",
        "category":"Race",
        "place":"New York",
        "capacity":3000000,
        "assistance":2569800,
        "price":3
        },
      {
        _id: 11,
        "image":"https://i.postimg.cc/Sst763n6/book1.jpg",
        "name":"School's book fair",
        "date":"2022-10-15",
        "description":"Bring your unused school book and take the one you need.",
        "category":"Book Exchange",
        "place":"Room D1",
        "capacity":150000,
        "estimate":123286,
        "price":1
      },
      {
        _id: 12,
        "image":"https://i.postimg.cc/05FhxHVK/book4.jpg",
        "name":"Just for your kitchen",
        "date":"2021-11-09",
        "description":"If you're a gastronomy lover come get the cookbook that best suits your taste and your family's.",
        "category":"Book Exchange",
        "place":"Room D6",
        "capacity":130000,
        "assistance":90000,
        "price":100
      },
      {
        _id: 13,
        "image":"https://i.postimg.cc/vH52y81C/cinema4.jpg",
        "name":"Batman",
        "date":"2021-03-11",
        "description":"Come see Batman fight crime in Gotham City.",
        "category":"Cinema",
        "place":"Room D1",
        "capacity":11000,
        "assistance":9300,
        "price":225
      },
      {
        _id: 14,
        "image":"https://i.postimg.cc/T3C92KTN/scale.jpg",
        "name":"Avengers",
        "date":"2022-10-15",
        "description":"Marvel's Avengers Premier in 3d, the start of an epic saga with your favourite superheroes.",
        "category":"Cinema",
        "place":"Room D1",
        "capacity":9000,
        "estimate":9000,
        "price":250
      }
    ]
  };

// for (i=0; i<data.events.length; i++)
// {

//   if(Date.parse(data.currentDate) > Date.parse(data.events[i].date)) {
//     console.log("El evento "+data.events[i]._id+" es Past Event")
//   } else {
//     console.log("El evento "+data.events[i]._id+" es Upcoming Event")
//   };
//   console.log("El nombre del evento "+data.events[i]._id+" es "+data.events[i].name);
//   console.log("Description: "+data.events[i].description);
//   console.log("Category: "+data.events[i].category);
//   console.log("Place: "+data.events[i].place);
//   // console.log(Object.keys())
//   console.log("El precio del evento "+data.events[i]._id+" es $"+data.events[i].price);
//   console.log("---------------------------------------------------------------------");
// };

// console.log("---------------------------------------------------------------------");
// console.log("| |///////////////////////////////////////////////////////////////| |");
// console.log("---------------------------------------------------------------------");
// console.log("Data length: ");
// console.log(data.events.length);

// for(i=0;i<data.events.length;i++)
// {

// let cardcontainerElement=document.getElementById("cardcontainer");
// let cardElement=document.createElement("div");
// cardElement.className="card bg-dark text-white";
// let cardimgElement=document.createElement("img");
// cardimgElement.src=data.events[i].image;
// cardimgElement.alt=data.events[i].category;
// cardimgElement.className="card-img-top";
// let cardbodyElement=document.createElement("div");
// cardbodyElement.className="card-body";
// let cardtitleElement=document.createElement("h5");
// cardtitleElement.className="card-title";
// cardtitleElement.innerHTML=data.events[i].name;
// let cardtextElement=document.createElement("p");
// cardtextElement.className="card-text";
// cardtextElement.innerHTML=data.events[i].description;
// let cardrowElement=document.createElement("div");
// cardrowElement.className="row mt-4";
// let cardcol1Element=document.createElement("div");
// cardcol1Element.className="col colcenter";
// let cardcol2Element=document.createElement("div");
// cardcol2Element.className="col colcenter";
// let cardpriceElement=document.createElement("p");
// cardpriceElement.innerHTML="Price:<br>$ "+data.events[i].price;
// let cardanchorElement=document.createElement("a");
// cardanchorElement.className="btn btn-dark crazyborder";
// cardanchorElement.href="./details.html#Cinema";
// cardanchorElement.innerHTML="Details";

// cardcontainerElement.appendChild(cardElement);
// cardElement.appendChild(cardimgElement);
// cardElement.appendChild(cardbodyElement);
// cardbodyElement.appendChild(cardtitleElement);
// cardbodyElement.appendChild(cardtextElement);
// cardbodyElement.appendChild(cardrowElement);
// cardrowElement.appendChild(cardcol1Element);
// cardrowElement.appendChild(cardcol2Element);
// cardcol1Element.appendChild(cardpriceElement);
// cardcol2Element.appendChild(cardanchorElement);
// console.log(cardcontainerElement);
// console.log(cardElement.className);
// console.log(cardimgElement);
// console.log(cardtitleElement);
// } 