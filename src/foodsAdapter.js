class FoodsAdapter {

    constructor(){
        // this.baseUrl = "http://localhost:3000/foods"
        this.baseUrl = "https://arcane-atoll-80428.herokuapp.com/foods"
    }
    
    fetchFoods(){
        fetch(this.baseUrl)
        .then(resp => resp.json())
        .then(json => {
            json.forEach(food =>{
                let newFood = new Food(food)
                newFood.attachFoodToDom()
            })
        })
    }


    addFood(id){
        //debugger
        
        const name = document.getElementById(`food-name-${id}`).value
        const price = document.getElementById(`food-price-${id}`).value
        const rating = document.getElementById(`food-rating-${id}`).value
        const description = document.getElementById(`food-description-${id}`).value
        
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
            //debugger
            let newFood = new Food(json)
            
            newFood.attachFoodToDom(json)
        }) 
        document.getElementById(`food-name-${id}`).value="";
        document.getElementById(`food-price-${id}`).value="";
        document.getElementById(`food-rating-${id}`).value="";  
        document.getElementById(`food-description-${id}`).value="";
    }

    
    
}