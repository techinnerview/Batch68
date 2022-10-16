// alert("Hello everyone1 !! Welcome to edureka !!");
// alert("Hello everyone2 !! Welcome to edureka !!");

function test() {
    alert("Hello everyone, I am submit button click");
    console.log("Hello everyone, I am submit button click");
}

//Global Variables
var a = 100;
var b = "Any"
var c;
var edureka = "hello Edureka"


function variables() {
    // local variable
    alert(c);

    // Primitive Datatypes
    var a = null;   // Null
    var b = 20;     // Number
    var c = "Rakesh"; // String
    var d = true;  //Boolean
    var h; // undefined    
    
    // Reference/ Non-Primitive Datatypes
    var f = {
        a1: "abc",
        a2: "12",
        a3: 65,
        hello: "hello"
    }  // Object
    var g = [12, 13, 23, 42, "hello", "everyone"]; // array
    var h = {
        a1: "abc",
        a2: "12",
        a3: 65,
        hello: "hello"
    }  // Object
    var i = [f, h, {a1: "Hello"}, {hello: "Edureka"}];
    alert(f.a2);  
    alert(g[4]);
    alert(xyz); //Not Defined
}


