class FoodsAdapter {

    constructor(){
        this.baseUrl = "http://localhost:3000/foods"
    }

    addFood(id){
        //debugger
        const name = document.getElementById("food-name").value
        const price = document.getElementById("food-price").value
        const rating = document.getElementById("food-rating").value
        const description = document.getElementById("food-description").value
        
        //debugger

        let newFoodObject = {
            name: name,
            price:  price,
            rating: rating,
            description: description,
            trip_id: id
        }
        

        let configObj = {
            method: "POST",
            headers: { 
                "Content-Type": "application/json",
                Accept: "appliction/json"
            },
            body: JSON.stringify(newFoodObject)
        }
        fetch(this.baseUrl, configObj)
        .then(resp => resp.json())
        .then(json => {
            let newFood = new Food(json)
            //debugger
            newFood.attachFoodToDom(json)
        }) 
        // debugger
        
        let foodForm = document.getElementById('add-food-form');
        foodForm.reset()
    }
    
}