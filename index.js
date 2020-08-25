document.addEventListener("DOMContentLoaded", () => {fetchTripInfo()});

// const tripList = document.getElementById("trip-collection");
// const card = document.createElement("div");
// card.setAttribute("class", "card");
// tripList.appendChild(card);
// const title = document.createElement("h1");
// title.innerHTML = "TEST"
// card.appendChild(title);



function fetchTripInfo(){
    fetch('http://localhost:3000/trips')
    .then(resp => resp.json())
    .then(displayAllTrips)
    .catch((error)=> {console.log(error)});
};


function displayAllTrips(trips){
    //debugger
    for(let trip of trips){
        displayTrip(trip)
    };
};

function displayTrip(trip){
    const tripList = document.getElementById("trip-collection");
    const card = document.createElement("div");
    card.setAttribute("class", "card");
    card.setAttribute("id", `tripId-${trip.id}`);
    tripList.appendChild(card);
    const title = document.createElement("h2");
    title.innerHTML = `${trip.date}`;
    card.appendChild(title);

    const image = document.createElement("img");
    image.setAttribute("src", trip.image);
    image.setAttribute("class", "trip-image");
    card.appendChild(image);

    const location = document.createElement("h3");
    location.setAttribute("id",`location-trip-id-${trip.id}` );
    location.innerHTML =`${trip.location}`;
    card.appendChild(location);

    const country = document.createElement("h3");
    country.setAttribute("id",`country-trip-id-${trip.id}` )
    country.innerHTML=`${trip.country}`;
    card.appendChild(country);

    const foodNameOne = document.createElement("ul");
    foodNameOne.setAttribute("id",`food-id-${trip.food[0].id}`);
    foodNameOne.innerHTML=`${trip.food[0].name}`;
    card.appendChild(foodNameOne);

    // const foodPrice = document.createElement("li")
    // foodPrice.innerHTML = `${trip.food[0].price}`
    // foodName.appendChild(foodPrice);
    

    
    // for(let f of trip.food){
    //    const foodName = document.createElement("ul");
    //    foodName.setAttribute("id",`food-id-${trip.f.id}`);
    //    foodName.innerHTML=`${trip.f.name}`;
    //    card.appendChild(foodName);
    //    const foodPrice = document.createElement("li")
    //    foodPrice.innerHTML = `${trip.f.price}`
    //    foodName.appendChild(foodPrice);
    //    const foodRating = document.createElement("li")
    //    foodRating.innerHTML = `${trip.f.rating}`
    //    foodName.appendChild(foodRating);
    //    const foodDescription = document.createElement("li")
    //    foodDescription.innerHTML = `${trip.f.description}`
    //    foodName.appendChild(foodDescription);
    //   
    // };



    
    
};




