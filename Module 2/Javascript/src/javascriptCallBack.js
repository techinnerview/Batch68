var counter = 0;
function displayMessage(){
        // setTimeout(displayCustomMessage, 3000, "Edureka", "Internship Program");
        setInterval(displayCustomMessage, 2000, "Edureka", "Internship Program");
}
function displayCustomMessage(val1, val2){
        alert(val1 + " provides " + val2);
}

function CallBackExample() {

        function alertMe(value) {
                alert(value);
        }
        function alertMe(value1, value2) {
                alert(value1 + ',' + value2);
        }
        function consoleMe(value) {
                console.log(value);
        }
        function writeMe(value) {
                document.write(value);
        }

       
        function calculateSum(num1, num2, callbackFunction1, callbackFunction2, callbackFunction3) {
                var sum = num1 + num2;
                var product = num1 * num2;
                callbackFunction1(sum, product);
                callbackFunction2(sum);
                callbackFunction3(sum);
        }

        // calculateSum(10, 20, alertMe);
        // calculateSum(100, 200, consoleMe);
        // calculateSum(1000, 2000, writeMe);

        calculateSum(10, 20, alertMe, consoleMe, writeMe)
}


function promiseExample() {
        var promiseObj = new Promise(function (myResolve, myReject) {
                var x = 10;
                if (x === 11) {
                        myResolve("Stuff worked!");
                }
                else {
                        myReject(Error("It broke"));
                }
        });

        promiseObj.then(
                function (value) { alert(value); },
                function (error) { alert(error); }
        );
}

function promiseChaining() {
        let myChainingPromise = new Promise(function (resolve, reject) {
                setTimeout(() => reject('Error'), 3000); // 3000 means 3 seconds
        }).then(function (value) {
                alervalt(value); //Success
                return "another success"
        }).then(function (value) {
                alert(value);  //another success
                return "Edureka"
        }).then(function (value) {
                alert(value); //Edureka
                return null;
        }).catch(function (error) {
                alert(error);
        })
}

function promiseMultipleApiCalls() {
        //Promise API
        let urls = [
                'https://api.github.com/users/iliakan',
                'https://api.github.com/users/remy',
                'https://api.github.com/users/jeresig'
        ];

        // map every url to the promise of the fetch
        let requests = urls.map(url => fetch(url, object));

        // Promise.all waits until all jobs are resolved
        Promise.all(requests)
                .then(responses => responses.forEach(
                        response => alert(`${response.url}: ${response.status}`)

                ))
                .catch(function(error) {
                        alert(error);
                })
}