class Trip {

    static all = []


    constractor({id, location, country, date, image}) {
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
    }

    fullRender(){
        this.element.innerHTML = `
        <h2>${this.location}  -  ${this.country},   ${this.date}</h2>
        <button class ="update" data-id="${this.id}">Update Trip</button>
        <button class ="delete" data-id="${this.id}">Delete Trip</button>
        <img scr="${this.image}" class="trip-image">`
        return this.element
    }

}