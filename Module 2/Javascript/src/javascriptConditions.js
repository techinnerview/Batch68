var arr = [100, 20, 300, 40, 500, 60, 700, 80, 900, 6];

var str1Arr = ["a", "b", "c"];
var str2Arr = ["d", "e", "f"];


function conditionExample() {
        var a = 1000;
        var b = 2000;
        var c = 3000;
        var d = 4000;

        if (a > b && a > c) {
                alert("A is bigger than B and C");
        }
        else if (b > a && b > c) {
                alert("B is bigger than A and C");
        }
        else {
                alert("C is bigger than A and B");
        }
}

function switchStatement(){
        var x = 5;
        // if (x % 2 === 0) {
        //         alert("5 is divisible by 2")
        // } else{
        //         alert("5 is not divisible by 2")
        // }

        switch(x % 2){
                case 0:
                        alert("5 is divisible by 2")
                        break;
                default:
                        alert("5 is not divisible by 2")
                        break
        }
}

function stringsExample(){
        var str = "abc";
        var str1 = new String("str");
        var str2 = "Edureka intership program";

        // alert(str2.slice(0,3));

        // alert(str + str2);
        // alert(str.concat(str2));

        var output = str2.split('e');
        console.log(output)

}


function MathExample(){

        var a = 10.67;
        var b = 20;
        var c = 16;

        alert(Math.ceil(a))

        alert(Math.PI * c)

        alert(Math.sqrt(c))

}


function DateExamples(){

        var dt1 = new Date();
        console.log(dt1);
        // alert(dt1.getDate() + 3)   // date contained in the object
        // alert(dt1.getFullYear())
        alert(dt1.getDate() + " " + dt1.toDateString())
}
