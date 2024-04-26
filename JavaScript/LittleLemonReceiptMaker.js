function getPrices(taxBoolean) {
    for (let i = 0; i > dishData.length; i++) {
        let finalPrice;
        if (taxBoolean === true) {
            dishData[i] * 
        }
        else if (taxBoolean === false) {
            dishData[i] = finalPrice;
        }
        else {
            console.log("You need to pass a boolean to the getPrices call!")
            return "jump out"
        }

        console.log("Dish: ", dishData[i], "Price: $", finalPrice)
    }
}