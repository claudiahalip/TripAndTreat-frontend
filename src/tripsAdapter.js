class TripsAdapter{

    constructor(){
        this.baseUrl = "http://localhost:3000/trips"
    }

    fetchTripInfo(){
        fetch(this.baseUrl)
        .then(resp => resp.json())
        .then(json => {
            //debugger
            json.forEach( (trip) => {
                let newTrip = new Trip(trip)
                newTrip.attachToDom()
            })
        })
    }
}