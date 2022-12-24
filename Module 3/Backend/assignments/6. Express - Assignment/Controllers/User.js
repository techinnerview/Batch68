const User = require('../Models/User');  // importing the User Model

// to check the authenticity of the user 
exports.login = (req, res) => {
    const email = req.body.email;
    const password = req.body.password;
    User.find({ email: email, password: password })
        .then(result => {
            if (result.length >= 1) {
                res.status(200).json({ message: "User LoggedIn Sucessfully", isAuthenticated: true, user: result })
            }
            else {
                res.status(200).json({ message: "User Not LoggedIn Sucessfully", isAuthenticated: false, user: result })
            }
        })
        .catch(err => {
            res.status(500).json({ message: err })
        })
}

// addUser to signup the user to DB
exports.signUp = (req, res, next) => {
    const email = req.body.email;
    const password = req.body.password;
    const firstname = req.body.firstname;
    const lastname = req.body.lastname;
    const SignInUser = new User({ email: email, password: password, firstname: firstname, lastname: lastname });
    SignInUser.save().then(result => {
        res.status(200).json({ message: "User SignedUp Sucessfully", user: result })
    }).catch(err => {
        res.status(500).json({ message: err })
    })
}