
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

function assignmentExample() {
        class restaurantManager {

                constructor(restaurantList) {
                        this.restaurantList = restaurantList
                }

                constructor(restaurantList, rating) {
                        this.restaurantList = restaurantList
                        this.rating = rating
                }
                printAllRestaurantNames() {
                        if (this.restaurantList.length > 0) {
                                this.restaurantList.map((item) => {
                                        console.log(item.name);
                                })
                        } else {
                                console.log("No Restaurant found !!")
                        }


                }

                filterRestaurantByCity(city) {
                        var output = this.restaurantList.filter((item) => {
                                return item.city === city
                        })
                        console.log(output)

                }

                filterRestaurantByCity = (cityName) => {
                        var output = this.restaurantList.filter((item) => {
                                return item.city === cityName
                        })
                        console.log(output)
                }
        }

        var data = restaurantList = [{
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
                name: "Dominos",
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
                name: "KFC",
                city: "Kolkata",
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
                name: "ZYX",
                city: "Bangalore",
                orderData: {
                        'Below 500': 20,
                        '500-1000': 29,
                        '1000-1500': 30,
                        '1500-2000': 44,
                        'Above 2000': 76
                }
        }];

        var obj = new restaurantManager(data);
        obj.printAllRestaurantNames();

        console.log("==========================")
        var input = prompt("Enter the city Name")
        obj.filterRestaurantByCity(input);


        var obj2 = new restaurantManager(data);
        obj2.printAllRestaurantNames();

        var obj3 = new restaurantManager(data, "5star");
        obj2.printAllRestaurantNames();        
        
}


