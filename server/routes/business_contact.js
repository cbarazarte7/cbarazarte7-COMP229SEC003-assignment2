/* 
    business_contact.js
    Name: Carla Barazarte 
    StudentID: 301295205
    Date: 02/23/2023 
*/

let express = require('express');
let router = express.Router();

//helper function for guard purposes
function requireAuth(req, res, next)
{
    //check if the user is logged in
    if (!req.isAuthenticated())
    {
        return res.redirect('/login')
    }
    next();
}
//connect to business contact model
let BusinessContact = require('../models/business_contact');
let businessContactController = require('../controllers/business_contact');
//GET ROUTE for the book list page -READ OPERATION
router.get('/', businessContactController.displayBusinessContactList);

/*GET Route for displaying the Add Page- CREATE Operation*/
router.get('/add', requireAuth,businessContactController.displayAddPage);

/* POST Route for processing the Add Page - CREATE operation*/

router.post('/add',requireAuth,businessContactController.processAddPage );

/*GET Route for displaying the Edit page - UPDATE operation*/

router.get('/edit/:id', requireAuth,businessContactController.displayEditPage);

/*POST Route for processing the Edit page - UPDATE Operation*/
router.post('/edit/:id', requireAuth,businessContactController.processEditPage);

/*GET to perform Deletion - DELETE Operation */
router.get('/delete/:id', requireAuth,businessContactController.performDelete);

module.exports = router;