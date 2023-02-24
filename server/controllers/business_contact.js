/* 
    business_contact.js
    Name: Carla Barazarte 
    StudentID: 301295205
    Date: 02/23/2023 
*/

//create a reference to the db Schema which is the model
let BusinessContact = require('../models/business_contact');

//Display the BusinessContactList
module.exports.displayBusinessContactList = (req, res, next) => {
    BusinessContact.find((err, businessContact) => {
        if (err) {
            return console.error(err);
        }
        else {
            console.log(businessContact);
            res.render('business_contact/list', { title: 'Business Contacts', BusinessContact: businessContact,displayName:req.user?req.user.displayName:'' });
        }
    }).sort("name");
}

//Display the add page
module.exports.displayAddPage = (req, res, next) => {
    res.render('business_contact/add',{title:'Add Business Contact',displayName:req.user?req.user.displayName:''})
}

//save data in database and redirects to main page
module.exports.processAddPage = (req, res, next) => {
    let newBusinessContact = BusinessContact({
        "name": req.body.name,
        "number": req.body.number,
        "email": req.body.email,
    });
    BusinessContact.create(newBusinessContact, (err, BusinessContact) => {
        if (err) {
            console.log(err);
            res.end(err);
        }
        else {
            res.redirect('/businessContact');
        }
    });
}

//Display edit page
module.exports.displayEditPage = (req, res, next) => {
    let id = req.params.id;
    BusinessContact.findById(id, (err, businessContactToEdit) => {
        if (err) {
            console.log(err);
            res.end(err);
        }
        else {
            res.render('business_contact/edit', { title: 'Edit Book', businessContact: businessContactToEdit,displayName:req.user?req.user.displayName:'' });
        }
    });
}

//edit data in database and redirects to main page
module.exports.processEditPage = (req, res, next) => {
    let id = req.params.id
    let updatedBusinessContact = BusinessContact({
        "_id": id,
        "name": req.body.name,
        "number": req.body.number,
        "email": req.body.email
    });
    BusinessContact.updateOne({ _id: id }, updatedBusinessContact, (err) => {
        if (err) {
            console.log(err);
            res.end(err);
        }
        else {
            res.redirect('/businessContact');
        }
    });
}

//delete data in database and redirects to main page
module.exports.performDelete = (req, res, next) => {
    let id = req.params.id;
    BusinessContact.remove({ _id: id }, (err) => {
        if (err) {
            console.log(err);
            res.end(err);
        }
        else {
            res.redirect('/businessContact');
        }
    });
}