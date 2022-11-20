function asyncAwait(){

        async function displayMe(){
                alert("Welcome to Edureka");
                return "Welcome to Edureka";
        }

        displayMe().then(function (value) {
                console.log(value);  
        });

        awaitFunctionWrapping();
}

async function awaitFunctionWrapping(){
        var promise = new Promise(function(resolve) {
                setTimeout(resolve, 2000, "Success")
        })

        var result = await promise;
        alert(result)


}