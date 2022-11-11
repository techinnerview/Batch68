function formExample() {
        var name = document.forms["formExamples"]["Name"].value;
        var age = document.forms["formExamples"]["Age"].value;
        if(name === "") {
                alert(invalidName())
                return false;
        } else if(age === ""){
                alert("Age field cannot be blank")
                return false;
        } else {
                alert("Form Submitted Successfully");
                document.getElementById("divMain").innerHTML = "Form Submitted successfully";
        }

}

function invalidName() {
        var blank = "blank";
        return `Name field cannot be ${blank}`
}
