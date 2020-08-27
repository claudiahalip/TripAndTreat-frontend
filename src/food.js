class Food {

    static all = []

    constructor(id, name, price, rating, description, trip_id) {
        this.id = id,
        this.name = name,
        this.price = price,
        this.rating = rating,
        this.description = description
        this.trip_id = trip_id

        Food.all.push(this)
    }

    
    
}