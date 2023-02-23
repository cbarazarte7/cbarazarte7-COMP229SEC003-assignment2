/*
    index.js
    Name: Carla Barazarte 
    StudentID: 301295205
    Date: 02/07/2023
*/

var express = require('express');
var router = express.Router();
let indexController = require('../controllers/index');

const projectsList = [
  {
      title: 'Comphealth app', 
      description: 'I worked as a Fullstack developer in the development of a healthcare app that allows hospitals and clinics to look for available doctors. It is also possible for doctors to find a job.',
      image: '/Assets/images/chg.png'
  },
  {
      title: 'CCU app', 
      description: 'I worked as a Full Stack Engineer in the development of a web app with the purpose of selling products',
      image: '/Assets/images/ccu.png'
  },
  {
      title: 'Back End Developer', 
      description: 'I worked as a Back End Developer in the development and maintenance of Snupper mobile application and web administrator for Chile and Mexico.',
      image: '/Assets/images/snuuper-achievement.jpg'
  },
]
const home = {
  firstName: 'Carla',
  lastName: 'Barazarte',
  welcomeMessage: "Welcome! You can find my experience and achievements here",
}

const about = {
  description: "Software Engineer with 6 years of professional experience in web and mobile applications development. Experienced as full stack developer. Advanced English and Spanish level."
}

const serviceList = [{
  title: 'Web programming',
  image: '/Assets/images/web-programming.png'
},
{
  title: 'Mobile programming',
  image: '/Assets/images/mobile-programming.jpg'
},
{
  title: 'Fullstack programming',
  image: '/Assets/images/fullstack.png'
},
{
  title: 'Unit, functional, integration and pact Tests',
  image: '/Assets/images/testing.png'
}, 
{
  title: 'DevOps',
  image: '/Assets/images/devops.png'
}]

const contactInfo = {
  name: 'Carla Barazarte',
  phone: '(416) 818-9430',
  email: 'cbarazar@my.centennialcollege.ca'
}

/* GET home page. */
router.get('/home', function(req, res, next) {
  res.render('pages/home', {
    home,
    title: "Home",
  });
});
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('pages/home', {
    home,
    title: "Home",
  });
});

/* GET about me page. */
router.get('/about', (req, res) => {
  res.render('pages/about_me', {
      about,
      title: "About"
  })
})

/* GET projects page. */
router.get('/projects', (req, res) => {
  res.render('pages/projects', {
      projectsList,
      title: "Projects"
  })
})

/* GET services page. */
router.get('/services', (req, res) => {
  res.render('pages/services', {
      serviceList,
      title: "Services"
  })
})

/* GET contact page. */
router.get('/contact', (req, res) => {
  res.render('pages/contact', {
      contactInfo,
      title: "Contact Me"
  })
})

/*GET Route for displaying the Login page*/
router.get('/login', indexController.displayLoginPage);

/*POST Route for processing the Login Page*/

router.post('/login', indexController.processLoginPage);

/*GET Route for register page*/
router.get('/register', indexController.displayRegisterPage);

/*POST Route for processing the Register page*/
router.post('/register', indexController.processRegisterPage);

/*GET to perform userLogout*/
router.get('/logout', indexController.performLogout);

module.exports = router;
