var arr = [100, 20, 300, 40, 500, 60, 700, 80, 900, 6];

var str1Arr = ["a", "b", "c"];
var str2Arr = ["d", "e", "f"];


// I want all the numbers in the array which are greater than 200

function greaterThan200(val) {
        return val > 200; // false, false, true
}

function lessThan500(val) {
        return val <= 500 && val > 100;
}

function deductBy10(val) {
        return val - 10;
}
function filterExample() {
        var arrFiltered = arr.filter(lessThan500); //
        // console.log(arrFiltered)

        var arrResult = arr.filter(val => {
                return val <= 500 && val > 100;
        })

        console.log(arrResult)
}

function mapExample() {
        console.log(arr);
        var arrReturn = arr.map((item) => {
                return item - 10;
        })
        // console.log(arrReturn)

        var arrMap = arr.map(deductBy10);
        console.log(arrMap)
}


function arrConcat() {
        var arrOutput = str1Arr.concat(str2Arr);
        console.log(arrOutput);

        var arrOutput2 = str2Arr.concat(str1Arr);
        console.log(arrOutput2);

}

function arrPush() {

        var arr2 = [1, 2, 3, 4, 5];
        arr2.push(6); // Added element at the end of the array
        arr2.unshift(0) // Added element at the beginning of the array
        console.log(arr2);

}

function arrPop() {

        var arr2 = [1, 2, 3, 4, 5];
        console.log(arr2)
        arr2.pop(); // Delete element from the end of the array
        arr2.shift(); // Delete element from the starting of the array
        console.log(arr2);
}

function findValueSix(val) {
        return val === 6;
}
function arrFind() {
        var arr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 6, 10];
        console.log(arr2);
        var output = arr2.find(findValueSix);
        console.log(output);
}

function arrSlice() {
        var arr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
        console.log(arr2);

        var output = arr2.slice(0, 5);
        console.log(output);
}


function arrSort() {
        var a1 = [2, 5, 7, 8, 9, 3, 1];
        var a2 = [500, 20, 300, 45, 66, 100, 1000, 200];

        // console.log(a1);
        // a1.sort();
        // console.log(a1);

        console.log(a2);
        a2.sort(function (a, b) { return b - a }); // ascending sort
        console.log(a2);
}


function arrLoops() {
        var a1 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
        var a2 = [100, 101, 102, 103, 104, 105, 106, 107, 108, 109]

        // console.log(a1);
        // for (item = 0; item < a1.length; item++) {
        //         console.log("Value at Index poisition " + item +  " is "+ a1[item]);
        // }

        // console.log(a2);
        // for (item = 0; item < a2.length; item++) {
        //         console.log("Value at Index poisition " + item +  " is "+ a2[item]);
        // }

        // console.log(a2);
        // for (item = a2.length - 1; item >= 0; item--) {
        //         console.log("Value at Index poisition " + item +  " is "+ a2[item]);
        // }

        // var count = 0;
        // while(count < a2.length){
        //         console.log("Value at Index poisition " + count +  " is "+ a2[count]);
        //         count++;
        // }

        var count = a2.length - 1;
        while (count >= 0) {
                console.log("Value at Index poisition " + count + " is " + a2[count]);
                count--;
                for (item = a2.length - 1; item >= 0; item--) {
                        console.log("Value at Index poisition " + item + " is " + a2[item]);
                }
        }

}