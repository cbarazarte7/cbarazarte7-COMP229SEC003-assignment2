var express = require('express');
var router = express.Router();

const projectsList = [
  {
      title: 'ssr Developer', 
      description: 'Development of new features in web and mobile apps for clients located in the U.S.A.',
      activities: [
          'NodeJS (express and fastify) and VueJS programming', 
          'Implementation of Agile Scrum Methodology',
          'Implementation of microservices',
          'Unit, functional, integration and load testing',
          'Github actions'
      ]
  },
  {
      title: 'Full Stack Engineer', 
      description: 'Development of a web app with the purpose of selling products',
      activities: [
          'Implementation of Agile Scrum Methodology',
          'Process Automation',
          'Monitoring and maintenance of the company applications',
          'Web app development using Python and React',
          'Employment of Mysql database',
          'Working with dockers'
      ]
  },
  {
      title: 'Back End Developer', 
      description: 'Development and maintenance of Snupper mobile application and web administrator for Chile and Mexico.',
      activities: [
          'Planning, design and development of mobile and web applications',
          'Implementation of Agile Scrum Methodology',
          'Process Automation',
          'Monitoring and maintenance of the company applications',
          'Technologies used: NodeJS, ExpressJs, Angular and MongoDB',
          'Administration of production and testing servers'
      ]
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

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('pages/home', {
    home,
    title: "Resume",
  });
});


router.get('/about', (req, res) => {
  res.render('pages/about_me', {
      about,
      title: "About"
  })
})
router.get('/projects', (req, res) => {
  res.render('pages/projects', {
      projectsList,
      about,
      title: "Projects"
  })
})

module.exports = router;
