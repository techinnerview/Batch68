
function classExample() {
        class vehicles {

                constructor(color, model, type, cc) {
                        this.color = color;
                        this.model = model;
                        this.type = type;
                        this.cc = cc;
                }

                displayColor() {
                        console.log("color of the vehicle is :" + this.color)
                }
                displaymodel() {
                        console.log("model of the vehicle is :" + this.model)
                }
                displaytype() {
                        console.log("type of the vehicle is :" + this.type)
                }
                displaycc() {
                        console.log("cc of the vehicle is :" + this.cc)
                }
        }

        var maruti = new vehicles("blue", "maruti", "4 wheeler", "1500");
        var ford = new vehicles("red", "ford", "4 wheeler", "2000");

        console.log("Maruti Details :-")
        maruti.displayColor();
        maruti.displaymodel();
        maruti.displaytype();
        maruti.displaycc();
        console.log("Ford Details :-")
        ford.displayColor();
        ford.displaymodel();
        ford.displaytype();
        ford.displaycc();
}


class restaurantManager {
        restaurantList = [{
                id: 1,
                name: "Punjabi Tadka",
                city: "Delhi",
                orderData: {
                        'Below 500': 20,
                        '500-1000': 29,
                        '1000-1500': 30,
                        '1500-2000': 44,
                        'Above 2000': 76
                }
        },
        {
                id: 1,
                name: "Punjabi Tadka",
                city: "Bangalore",
                orderData: {
                        'Below 500': 20,
                        '500-1000': 29,
                        '1000-1500': 30,
                        '1500-2000': 44,
                        'Above 2000': 76
                }
        },
        {
                id: 1,
                name: "Punjabi Tadka",
                city: "Kolkata",
                orderData: {
                        'Below 500': 20,
                        '500-1000': 29,
                        '1000-1500': 30,
                        '1500-2000': 44,
                        'Above 2000': 76
                }
        }]
        constructor(restaurantList) {
                this.restaurantList = restaurantList
        }
        printAllRestaurantNames() {
                this.restaurantList.map((item) => {
                        console.log(item.name);
                })

        }

        filterRestaurantByCity(city) {
                var output = this.restaurantList.filter((item) => {
                        item.city = city
                })
                console.log(output)

        }
}

