function arithemeticOperations() {


    // Arithemetic + Assignment Operators
    var a = 100;
    var b = 20;

    var c = "Edureka";
    var d = "Hello";
    var addition = a + b; //Addition operator '+'
    var minus = a - b; // Substraction operator '-'
    var division = a / b; //Division Operator '/'
    var mod = a % b;  // Modulus operator
    var multiplication = a * b;  // product operator

    // alert(addition);  //120
    // alert(minus) // 80
    // alert(division) // 5
    // alert(mod); //0
    // alert(multiplication) //2000

    // alert(d + c); //HelloEdureka
    // alert(a + c); //100Edureka
    // alert(c + a); //Edureka100
    // alert( a + b + c); // 
    // alert( c + (a + b)); // 

    // var final = a + b;
    // alert(c + final);


    // alert(isNaN(a * c)); // NAN
    // alert(c * (a+b))
    // a++; // a = a + 1;
    // alert("Value of variable a is" + a);
    // b--;
    // alert("Value of variable b is" +b);
    
    a += 500; // increment assignment operator  :  a = a + 5;
    a += 500; // increment assignment operator  :  a = a + 5;
    alert("Value of variable a is" + a);

    a *= 5 // a = a * 5;
    a /= 5 // a = a / 5;
    a %= 5 // a = a % 5;

}


function comparisionOperators() {
 var a = 100;
 var b = 200;
 var c = "100";
 var d = "100";
 var e = true;
 var f = 100;

 alert(a == b);  // false
 alert(a == c);  // true
// //  alert(a === c);  // true
//  alert("Type of variable a is " + typeof(a)); //Number
//  alert("Type of variable c is " + typeof(c)); //String
//  alert("Type of variable e is " + typeof(e)); //bool

//  alert(a != b);  // true
//  alert(a != c);  // false
//  alert(a !== c);  // true

alert(a > b); //false
alert( a >= f) // true
alert(a >= b) //false
alert(a < b) //true
alert(a <= f) // true

alert(a > f) // false

alert(b > a && b >= f) // true
alert(a > b && b > f) // false

 // && OPERATOR
//  Any false is False in the statement execution
        //  T && T => T
        //  F && T => F
        //  T && F => F
        //  F && F => F

// || OPERATOR
//  Any false is False in the statement execution
        // T || T => T
        // F || T => T
        // T || F => T
        // F || F => F


alert((a === f && a > b )|| a > d) // true

alert( (100 == 100 && 200 == 100) || (300 == 300)) // true
alert(!true) // false
alert(!false) // true
console.log("Welcome to Edureka");
}
