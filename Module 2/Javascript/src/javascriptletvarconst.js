function letVarConstExample() {
var a = 100;
        if (true) {
                var a = 20;
                let b = 30;
                const c = 40;
                b = 40;
                const arr = [];
                arr.push(1);
                arr.push(2);
                console.log(arr)

        }
        // console.log(a) // 20
        // console.log(b) //throw error
        // console.log(c) //throw error

        var text = "Edureka";
        var text2 = "Edureka";
        var text3 = "Edureka";
        var str = `Welcome to <br> ${text} ${text2} ${text3}`;
        document.write(str);
}