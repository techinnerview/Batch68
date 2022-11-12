
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

