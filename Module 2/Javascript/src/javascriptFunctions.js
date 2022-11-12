function RegexExample() {
        var str = " Welcome to Jagannath Class, Welcome to Online Class, Welcome to Online Class";
        var pattern = /jaga(n+)ath/i;
        var output = str.match(pattern);
        alert(output);

        // const regexp = /test(\d?))/g;
        // const str = 'test1test2';

        // const array = [...str.matchAll(regexp)];

        // console.log(array[0]);
        // // expected output: Array ["test1", "e", "st1", "1"]

        // console.log(array[1]);
        // expected output: Array ["test2", "e", "st2", "2"]
}

arrowFunctionExample = (e) => {
        alert(e)
        alert("Hello Everyone")

        // if(e.type === 'click'){
        //         var a = "arrow";
        //         var b = "function"
        //         alert(a + ' ' + b)
        //         alert(`${a} ${b}`)
        // }

}

functionExpression = function () {
        var str = " Welcome to Jagannath Class, Welcome to Online Class, Welcome to Online Class";
        var pattern = /jaga(n+)ath/i;
        var output = str.match(pattern);
        console.log(display + output);

}

const display = (
        function () {
                var a = "Welcome to edureka";
                return a;
        }
)();


function generator() {
        function* myGenerator() {
                let i = 0
                for (i = 0; i < 10; i++) {
                        yield i;
                }
        }

        const gen = myGenerator();
        for (i = 0; i < 10; i++) {
                console.log(gen.next().value)
        }
}

