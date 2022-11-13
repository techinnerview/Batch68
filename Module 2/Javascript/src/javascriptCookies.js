/// non persistent cookies/ session cookies
// function cookiesSetExample() {
//         var cookie = "name=edureka;batch=68;";
//         document.cookie = cookie;
// }

// function cookiesGetExample() {
//         cookiesSetExample();
//         var output = document.cookie;
//         var ouput2 = output.split(';')
//         alert(ouput2)
// }


///persistent cookies
function setCookie(cname, cvalue, exdays) { //username, edureka, 365
        const d = new Date(); // today's date
        d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000)); //next 365 days added
        let expires = "expires=" + d.toUTCString();
        document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
        let name = cname + "="; //username=
        let ca = document.cookie.split(';'); // ""
        for (let i = 0; i < ca.length; i++) {
                let c = ca[i];
                while (c.charAt(0) == ' ') {
                        c = c.substring(1);
                }
                if (c.indexOf(name) == 0) {
                        return c.substring(name.length, c.length); //edureka
                }
        }
        return "";
}

function checkCookie() {
        let user = getCookie("username"); // "" => Next time value is Edureka
        if (user !== "") {
                alert("Welcome again " + user);
        } else {
                user = prompt("Please enter your name:", ""); //Edureka
                if (user != "" && user != null) {
                        setCookie("username", user, 365);
                }
        }
}


var jsonObject = {
        "key1": "abc",
        "key2": "def",
        "imagePath": "/path/path",
        "expiry": "anything"
}

alert(jsonObject.imagePath)


function setLocalStorageExample() {
        // Local storage
        if (localStorage.clickcount) {
                localStorage.clickcount = Number(localStorage.clickcount) + 1;
        } else {
                localStorage.clickcount = 1;
        }
        console.log("You have clicked the button " + localStorage.clickcount + " time(s) in this session.")


        if (localStorage.name) {
                localStorage.name = Number(localStorage.clickcount) + 1;
        } else {
                localStorage.name = {
                        name: "xyz",
                        age: 13
                };
        }

        if (localStorage.course) {
                alert("course already exists" + localStorage.course)
        } else {
                localStorage.course = {
                        courseName: "MERN Stack",
                        duration: "1 Year"
                }
        }
}

function setSessionStorageExample() {
        // Session Storage
        if (sessionStorage.clickcount) {
                sessionStorage.clickcount = Number(sessionStorage.clickcount) + 1;
        } else {
                sessionStorage.clickcount = 1;
        }
        console.log("You have clicked the button " + sessionStorage.clickcount + " time(s) in this session.")

}



