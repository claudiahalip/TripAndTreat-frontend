const tripAdapter=new TripsAdapter;
const foodAdapter = new FoodsAdapter;

const tripForm = document.getElementById("form-add-trip")
const addFoodButton = document.getElementById("add-food")

function addFoodForm(e){
    e.target.hidden = true
    const addFoodForm = document.getElementById("add-food-form")
    addFoodForm.hidden = false

}


document.addEventListener("DOMContentLoaded", () => {
    tripAdapter.fetchTripInfo()
    tripForm.addEventListener("submit", tripAdapter.createNewTrip)
    addFoodButton.addEventListener("click", addFoodForm)
});


//document.addEventListener("DOMContentLoaded", () => {fetchTripInfo()});

//feching data for display

// function fetchTripInfo(){
//     fetch("http://localhost:3000/trips")
//     .then(resp => resp.json())
//     .then(displayAllTrips)
// }  




// function displayAllTrips(trips){
//     //debugger
//     for(let trip of trips){
//         displayTrip(trip)
//     };
// };

// function displayTrip(trip){
//     const tripList = document.getElementById("trip-collection");
//     const card = document.createElement("div");
//     card.setAttribute("class", "card");
//     card.setAttribute("id", `tripId-${trip.id}`);
//     tripList.appendChild(card);
//     const title = document.createElement("h2");
//     title.innerHTML = `${trip.location}  -  ${trip.country},   ${trip.date}`;
//     card.appendChild(title);

//     const updateButton = document.createElement("button");
//     updateButton.innerText = "Update Trip";
//     updateButton.setAttribute("id", updateButton);
//     card.appendChild(updateButton);

//     const deleteButton = document.createElement("button");
//     deleteButton.innerText = "Delete Trip";
//     deleteButton.setAttribute("id", deleteButton);
//     card.appendChild(deleteButton);

//     const image = document.createElement("img");
//     image.setAttribute("src", trip.image);
//     image.setAttribute("class", "trip-image");
//     card.appendChild(image);

//     for(i = 0; i<trip.food.length; i++){
//         const food = document.createElement("li");
//         food.setAttribute("id",`food-id-${trip.food[i].id}`);
//         food.innerHTML=`<b>${trip.food[i].name}</b><br> <b>price: </b>$${trip.food[i].price}<br> <b>rating:</b> ${trip.food[i].rating}<br> <b>a brief description:</b>${trip.food[i].description},`;
//         card.appendChild(food)
//     };

//     const addFoodButton = document.createElement("button");
//     addFoodButton.innerText = "Add Food";
//     addFoodButton.setAttribute("class", addFoodButton);
//     card.appendChild(addFoodButton);

//     const updateFoodButton = document.createElement("button");
//     updateFoodButton.innerText = "Update Food";
//     updateFoodButton.setAttribute("class", updateFoodButton);
//     card.appendChild(updateFoodButton);

//     const deleteFoodButton = document.createElement("button");
//     deleteFoodButton.innerText = "Delete Food";
//     deleteFoodButton.setAttribute("class", deleteFoodButton);
//     card.appendChild(deleteFoodButton);


    
    
// };


//fetch update


//fetch delete



