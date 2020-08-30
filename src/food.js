class Food {

    static all = []

    constructor({id, name, price, rating, description, trip_id}) {
        this.id = id,
        this.name = name,
        this.price = price,
        this.rating = rating,
        this.description = description
        this.trip_id = trip_id



        Food.all.push(this)
    }
    
  

    attachFoodToDom(food) {
        //debugger
        const p = document.createElement("p");
        p.id = `food-list-id-${food.trip_id}`
        let li=document.createElement("li")
        li.innerHTML = `<b>${food.name}</b><br> <b>price: </b>$${food.price}<br> <b>rating:</b> ${food.rating}<br> <b>a brief description:</b>${food.description}`
        p.appendChild(li)
        
        document.getElementById(`tripId-${food.trip.id}`).append(p)    
    }
    
}