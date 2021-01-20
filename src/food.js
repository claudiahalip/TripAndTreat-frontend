class Food {

    static all = []

    constructor({id, name, price, rating, description, trip_id}) {
        this.id = id,
        this.name = name,
        this.price = price,
        this.rating = rating,
        this.description = description,
        this.trip_id = trip_id

        Food.all.push(this)
    
    }
    
    
    attachFoodToDom(){
        this.renderFood();
    }

    renderFood() {
        //debugger
        const p = document.createElement("p");
        p.id = `food-list-id-${this.trip_id}`
        let li=document.createElement("li")
        li.innerHTML = `<b>${this.name}</b><br> <b>price: </b>$${this.price}<br> <b>rating:</b> ${this.rating}<br> <b>a brief description:</b>${this.description}`
        p.appendChild(li)
        let tripCard = document.getElementById(`tripId-${this.trip_id}`)
        tripCard.appendChild(p)    
        return tripCard
    }
    
   
    
}