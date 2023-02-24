/* 
    index.js
    Name: Carla Barazarte 
    StudentID: 301295205
    Date: 02/23/2023 
*/

let passport = require('passport');
/*create the userModel instance*/

let UserModel = require('../models/user');
let User = UserModel.User;

// Display Home page
module.exports.displayHomePage = (req, res, next) => {
    res.render('index', { title: 'Home',displayName:req.user?req.user.displayName:'' });
}

// Display about page
module.exports.displayAboutPage = (req, res, next) => {
    res.render('index', { title: 'About' ,displayName:req.user?req.user.displayName:''});
}

// Display products page
module.exports.displayProductsPage = (req, res, next) => {
    res.render('index', { title: 'Products', displayName:req.user?req.user.displayName:'' });
}

// Display services page
module.exports.displayServicesPage = (req, res, next) => {
    res.render('index', { title: 'Services',displayName:req.user?req.user.displayName:'' });
}

// Display contact page
module.exports.displayContactPage = (req, res, next) => {
    res.render('index', { title: 'Contact',displayName:req.user?req.user.displayName:'' });
}

// Dislpay login page
module.exports.displayLoginPage = (req, res, next) => {
    //check if the user is already logged in*/
    if (!req.user)
    {
        res.render('auth/login', {
            title: "Login",
            messages: req.flash('loginMessage'),
            displayName:req.user?req.user.displayName:''
            
        })
    }
    else
    {
        return res.redirect('/');
        }
}

// Authenticate user and shows error if user/password is incorrect
module.exports.processLoginPage = (req, res, next) => {
    passport.authenticate('local', (err, User, info) => {
        //server err?
        if (err) {
            return next(err);
        }
        //is there a user login error?
        if (!User) {
            req.flash('loginMessage',
                'Authentication Error');
            return res.redirect('/login');
        }
        req.login(User, (err) => {
            //server error?
            if (err) {
                return next(err);
            }
            return res.redirect('/businessContact');
        });
    })(req, res, next);
}

// Display the register form
module.exports.displayRegisterPage = (req, res, next) => {
    //check if the user is not already logged in*/
    if (!req.user)
    {
        res.render('auth/register',
            {
                title: 'Register',
                messages: req.flash('registerMessage'),
                displayName: req.user ? req.user.displayName : ''
            });
    }
    else
    {
        return res.redirect('/');
        }
}

// Register a new user with username, displayName, email and password
module.exports.processRegisterPage = (req, res, next) => {
    //instantiate a user object*/
    let newUser = new User({
        username: req.body.username,
        email: req.body.email,
        displayName: req.body.displayName
    });

    User.register(newUser, req.body.password, (err) => {
        if (err) {
            console.log("Error:inserting New User");
            if (err.name == "UserExits Error") {
                req.flash('registerMessage',
                    'Registration Error: User Already Exists!');
                console.log('Error: user Already Exists')
            }
            
            return res.render('auth/register',
                {
                    title: 'Register',
                    messages: req.flash('registerMessage'),
                    displayName: req.user ? req.user.displayName : ''
                });
        }
        else {
            //if no error exists, then registration is successful
            //redirect the user and authenticate them
            return passport.authenticate('local')(req, res, () => {
                res.redirect('/businessContact')
            });
        }
            
    });
}

// Logout from the system
module.exports.performLogout = (req, res, next) => {
    req.logout(function (err) {
        if (err) {
            return next(err);
        }
        res.redirect('/');
    });
}