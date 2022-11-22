
// function classExample() {
//         class vehicles {

//                 constructor(color, model, type, cc) {
//                         this.color = color;
//                         this.model = model;
//                         this.type = type;
//                         this.cc = cc;
//                 }

//                 displayColor() {
//                         console.log("color of the vehicle is :" + this.color)
//                 }
//                 displaymodel() {
//                         console.log("model of the vehicle is :" + this.model)
//                 }
//                 displaytype() {
//                         console.log("type of the vehicle is :" + this.type)
//                 }
//                 displaycc() {
//                         console.log("cc of the vehicle is :" + this.cc)
//                 }
//         }

//         var maruti = new vehicles("blue", "maruti", "4 wheeler", "1500");
//         var ford = new vehicles("red", "ford", "4 wheeler", "2000");

//         console.log("Maruti Details :-")
//         maruti.displayColor();
//         maruti.displaymodel();
//         maruti.displaytype();
//         maruti.displaycc();
//         console.log("Ford Details :-")
//         ford.displayColor();
//         ford.displaymodel();
//         ford.displaytype();
//         ford.displaycc();
// }

// function assignmentExample() {
//         class restaurantManager {

//                 constructor(restaurantList) {
//                         this.restaurantList = restaurantList
//                 }

//                 constructor(restaurantList, rating) {
//                         this.restaurantList = restaurantList
//                         this.rating = rating
//                 }
//                 printAllRestaurantNames() {
//                         if (this.restaurantList.length > 0) {
//                                 this.restaurantList.map((item) => {
//                                         console.log(item.name);
//                                 })
//                         } else {
//                                 console.log("No Restaurant found !!")
//                         }


//                 }

//                 filterRestaurantByCity(city) {
//                         var output = this.restaurantList.filter((item) => {
//                                 return item.city === city
//                         })
//                         console.log(output)

//                 }

//                 filterRestaurantByCity = (cityName) => {
//                         var output = this.restaurantList.filter((item) => {
//                                 return item.city === cityName
//                         })
//                         console.log(output)
//                 }
//         }

//         var data = restaurantList = [{
//                 id: 1,
//                 name: "Punjabi Tadka",
//                 city: "Delhi",
//                 orderData: {
//                         'Below 500': 20,
//                         '500-1000': 29,
//                         '1000-1500': 30,
//                         '1500-2000': 44,
//                         'Above 2000': 76
//                 }
//         },
//         {
//                 id: 1,
//                 name: "Dominos",
//                 city: "Bangalore",
//                 orderData: {
//                         'Below 500': 20,
//                         '500-1000': 29,
//                         '1000-1500': 30,
//                         '1500-2000': 44,
//                         'Above 2000': 76
//                 }
//         },
//         {
//                 id: 1,
//                 name: "KFC",
//                 city: "Kolkata",
//                 orderData: {
//                         'Below 500': 20,
//                         '500-1000': 29,
//                         '1000-1500': 30,
//                         '1500-2000': 44,
//                         'Above 2000': 76
//                 }
//         },
//         {
//                 id: 1,
//                 name: "ZYX",
//                 city: "Bangalore",
//                 orderData: {
//                         'Below 500': 20,
//                         '500-1000': 29,
//                         '1000-1500': 30,
//                         '1500-2000': 44,
//                         'Above 2000': 76
//                 }
//         }];

//         var obj = new restaurantManager(data);
//         obj.printAllRestaurantNames();

//         console.log("==========================")
//         var input = prompt("Enter the city Name")
//         obj.filterRestaurantByCity(input);


//         var obj2 = new restaurantManager(data);
//         obj2.printAllRestaurantNames();

//         var obj3 = new restaurantManager(data, "5star");
//         obj2.printAllRestaurantNames();

// }

function callapplybind() {

        // CALL 
        // function Car(type, fuelType) {
        //         this.type = type;
        //         this.fuelType = fuelType;
        // }

        function setBrand(brand) {
                Car.call(this, "convertible", "petrol");
                // this.type = convertible;
                // this.fuelType = petrol;
                this.brand = brand;
                console.log(`Car details = `, this);
        }

        // function definePrice(price) {
        //         Car.call(this, "non-convertible", "diesel");
        //         // this.type = non-convertible;
        //         // this.fuelType = diesel;
        //         this.price = price;
        //         console.log(`Car details = `, this);
        // }

        // const newBrand = new setBrand('Brand1');
        // const newCarPrice = new definePrice(100000);


        // APPLY

        // function Car(type, fuelType){
        //         this.type = type;
        //         this.fuelType = fuelType;
        // }

        // function setBrand(brand){
        //         Car.apply(this, ["convertible", "petrol"]); //Syntax with array literal
        //         this.brand = brand;
        //         console.log(`Car details = `, this);
        // }

        // function definePrice(price){
        //         Car.apply(this, new Array("convertible", "diesel")); //Syntax with array object construction
        //         this.price = price;
        //         console.log(`Car details = `, this);
        // }

        // const newBrand = new setBrand('Brand1');
        // const newCarPrice = new definePrice(100000);

        // BIND
        var pokemon1 = {
                firstname: 'Pika',
                lastname: 'Chu ',
                getPokeName: function () {
                        var fullname = this.firstname + ' ' + this.lastname;
                        return fullname;
                }
        };

        var pokemon2 = {
                firstname: 'Dore',
                lastname: 'Mon ',
                getPokeName: function () {
                        var fullname = this.firstname + ' ' + this.lastname;
                        return fullname;
                }
        };

        var pokemonName = function () {
                console.log(this.getPokeName() + 'I choose you!');
        };

        var logPokemon1 = pokemonName.bind(pokemon1); // creates new object and binds pokemon. 'this' of pokemon === pokemon now
        var logPokemon2 = pokemonName.bind(pokemon2);
        logPokemon1(); // 'Pika Chu I choose you!'
        logPokemon2(); // 'Dore Mon I choose you!'
}


