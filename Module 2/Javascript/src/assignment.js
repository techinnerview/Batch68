
function assignment3_2c() {
    var input = [{
        id: 1,
        name: "KFC",
        city: "Bangalore",
        address: "abcd",
        orderData: {
            'Below 500': 20,
            '500-1000': 29,
            '1000-1500': 30,
            '1500-2000': 44,
            'Above 2000': 76
        }
    },{
        id: 1,
        name: "McDonalds",
        city: "Bangalore",
        address: "abcd",
        orderData: {
            'Below 500': 20,
            '500-1000': 29,
            '1000-1500': 30,
            '1500-2000': 44,
            'Above 2000': 76
        }
    }]

    var output = [];
    var a = input.map((item) => {
        const total = Object.values(item.orderData).reduce((a, b) => a + b);  // Calculating the total of all key values 
        const headers = Object.keys(item.orderData);  // Computing all keys of the Object
        console.log(headers);
        headers.map((innerItem) => {
            let obj = {
                id: item.id,
                order: innerItem,
                "order percentage": item.orderData[innerItem]/total * 100,
                restaurant: item.name
            }

            output.push(obj)
        })
        return false;
    });

    console.log(output);
    return output;
}