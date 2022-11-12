function letVarConstExample() {

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
        console.log(a) // 20
        console.log(b) //throw error
        console.log(c) //throw error
}