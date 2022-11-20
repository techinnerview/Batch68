function exceptionHandling() {
        try {
                var a = 100;
                var c = 200;
                alert(a + b + c);
        }
        catch (error) {
                alert(error);
                try{
                        var e = 100;
                        alert(e + f)
                }
                catch(error){
                        alert("This is an exception")
                }
        }
        finally {

                alert("I will get executed everytime");
                alert("Hello Everyone, welcome to Edureka");
                alert("Hello Everyone, welcome to Edureka");
                alert("Hello Everyone, welcome to Edureka");
        }

}

function NoExceptionHandling() {
        var a = 100;
        var c = 200;
        alert(a + b + c);

        alert("Hello Everyone, welcome to Edureka");
        alert("Hello Everyone, welcome to Edureka");
        alert("Hello Everyone, welcome to Edureka");
}