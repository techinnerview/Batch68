
function DictObjectExample() {

        var obj = new Object();

        var obj1 = {};

        var obj2 = {
                key: "value",
                key1: "value1",
                key2: "value2",
                innerObj: {
                        name: "test",
                        age: 12,
                        city: "Kolkata"
                },
                innerObj2: {
                        name: "test",
                        age: 12,
                        city: "Mumbai",
                        address: {
                                addressLine1: "abs",
                                addressLine2: "xyz",
                                contact: {
                                        phone: 98798,
                                        mobile: 798698,
                                        email: "abc@abc.com"
                                }
                        }
                }
        }

        var arrObj = [{
                key: "value",
                key1: "value1",
                key2: "value2"
        },
        {
                key3: "value3",
                key4: "value4",
                key5: "value5"
        },
        {
                key6: "value6",
                key7: "value7",
                key8: "value8"
        }]

        // alert(obj2.key)
        // alert(obj2.key2);
        // alert(obj2.innerObj2.city);
        // console.log("Email: " + obj2.innerObj2.address.contact.email);

        // console.log(Object.keys(obj2));
        // console.log(Object.values(obj2.innerObj2.address.contact))

        var output = arrObj.map((item) => {
                console.log(Object.keys(item))
        })

       

}
