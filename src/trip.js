class Trip {

    static all = []


    constructor({id, location, country, date, image}) {
        this.id =id
        this.location = location
        this.country = country
        this.date = date
        this.image = image

        this.element = document.createElement("div")
        this.element.id = `tripId-${this.id}`;
        this.element.className = "card"
        
        Trip.all.push(this)
    }

    get tripCollection(){
        return document.getElementById("trip-collection");
    }

    attachToDom(){
        this.tripCollection.append(this.fullRender())
        this.addEventListeners()
    }
    
    fullRender(){
        this.element.innerHTML = 
        `<h2 id="${this.id}">${this.location}  -  ${this.country},  ${this.date}</h2>
        <button class ="update" id="${this.id}">Update Trip</button>
        <button class ="delete" id="${this.id}">Delete Trip</button>
        <img src="${this.image}" class="trip-image" data-id="${this.id}">
        <button class ="add-food" id= "add-food">Add Food</button>
        
        `
        return this.element
    }
    
    attachFoodsToTrip(arrFoods) {
        //debugger
        let arrFoodObj = arrFoods.map( f => new Food(f))
        const p = document.createElement("p");
        p.setAttribute("class", "food-list")
        for(let food of arrFoodObj){
        let li = document.createElement("li")
        li.innerHTML = `<b>${food.name}</b><br> <b>price: </b>$${food.price}<br> <b>rating:</b> ${food.rating}<br> <b>a brief description:</b>${food.description}`
        p.appendChild(li)
        }
        this.element.appendChild(p)
        return this.element
    }
    
    get foods(){
        return Food.all.filter((f) => f.trip_id == this.id)
    }

    addEventListeners(){
        this.element.addEventListener('click', this.handleAllButtons)
    }

    handleAllButtons = (e)=>{
        if (e.target.className === "delete"){
            let id = e.target.id
            tripAdapter.deleteTrip(id)
            //debugger
            this.element.remove()
        }else if(e.target.className ==="update"){
            let id = e.target.id
            e.target.className = "save"
            e.target.innerText = "Save Trip"
            this.addTripFieldsForUpdate(id)
        }else if(e.target.className === 'save'){
            let id = e.target.id
            e.target.className = "update"
            e.target.innerText = "Update Trip"
            tripAdapter.updateTrip(id)
        }
    }

    static findById(id){
        return Trip.all.find(t => t.id == id)
    }
      
    addTripFieldsForUpdate(id){
        let trip = Trip.findById(id)
        let updateForm = `
        <label>Location:</label>
        <input type="text" value="${trip.location}" name = "location" id = 'update-trip-location-${id}'>
        <label>Country:</label>
        <input type="text" value="${trip.country}" name="country" id = "update-trip-country-${id}">
        <label>Date:</label>
        <input type="text" value="${trip.date}" name="date" id = "update-trip-date-${id}">
        <label>Image address:</label>
        <input type="text" value="${trip.image}" name="image" id = "update-trip-image-${id}">
        
        `
        let updateFormDiv = document.createElement("div")
        updateFormDiv.id = `update-form-${id}`
        updateFormDiv.innerHTML = updateForm

        trip.element.append(updateFormDiv)
    }

    updateTripOnDom({location,country,date,image}){
        this.location = location
        this.country = country
        this.date = date
        this.image = image
        this.fullRender()

    }
}  