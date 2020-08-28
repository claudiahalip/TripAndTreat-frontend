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
                newTrip.attachFoodsToTrip(trip.food)
            })
        })
    }
//add new trip
    createNewTrip = (e) => {
        //debugger
        e.preventDefault()
        
        const location = document.getElementById('trip-location').value
        const country = document.getElementById('trip-country').value
        const date = document.getElementById('trip-date').value
        const image = document.getElementById('trip-image').value
        
        let newDataTrip = {location, country, date, image }
        
        let configObj = {
            method: "POST",
            headers: { 
                "Content-Type": "application/json",
                Accept: "appliction/json"
            },
            body: JSON.stringify(newDataTrip)
        }
        fetch(this.baseUrl, configObj)
        .then(resp => resp.json())
        .then(json => {
            let newTrip = new Trip(json)
            newTrip.attachToDom()
        }) 
        tripForm.reset()
    }


    //update trip

    updateTrip(id){
        e.preventDefault()
        debugger
        const location = document.getElementById('update-trip-location').value
        const country = document.getElementById('update-trip-country').value
        const date = document.getElementById('update-trip-date').value
        const image = document.getElementById('update-trip-image').value
        let newTripObj = {
            location,
            country,
            date,
            image
        }

        let configObj = {
            method: "PATCH",
            headers: {
                "Content_Type": "application/json",
                Accepts: "application/json"
            },
            body: JSON.stringify(newTripObj)
        }
        fetch(this.baseUrl + `/${id}`, configObj)
        .then(resp => resp.json())
        .then(json => {
            let trip = Trip.all.find( (t)=> t.id === json.id)
            trip.attachToDom()
        })
        



    }

    //delete trip
    deleteTrip(id){
        let configObj = {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            }
        }
        fetch( `http://localhost:3000/trips/${id}`, configObj)
        .then(resp => resp.json())
        .then(json => {
            alert(json.message)
        })
    }
}

