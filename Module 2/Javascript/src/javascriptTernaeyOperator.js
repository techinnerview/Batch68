function ternaryOperatorExample() {
        var a = 100;
        var b = 200;
        var c = 300;
        // if(a > b){
        //         alert("a is greater than b")
        // } else {
        //         alert("b is greater than a")
        // }

        // ? is a ternary operator
        a > b ? alert("a is greater than b") : alert("b is greater than a")

        if (a > b && a > c) {
                alert("A is bigger than B and C");
        }
        else if (b > a && b > c) {
                alert("B is bigger than A and C");
        }
        else {
                alert("C is bigger than A and B");
        }

        (a > b && a > c) ? alert("A is bigger than B and C") : ((b > a && b > c) ? alert("B is bigger than A and C") : alert("C is bigger than A and B"))

}