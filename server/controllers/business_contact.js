let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');
//create a reference to the db Schema which is the model
let BusinessContact = require('../models/business_contact');

//we want to display the BusinessContactList
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
module.exports.displayAddPage = (req, res, next) => {
    res.render('business_contact/add',{title:'Add Business Contact',displayName:req.user?req.user.displayName:''})
}

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

module.exports.displayEditPage = (req, res, next) => {
    let id = req.params.id;
    BusinessContact.findById(id, (err, bookToEdit) => {
        if (err) {
            console.log(err);
            res.end(err);
        }
        else {
            res.render('business_contact/edit', { title: 'Edit Book', book: bookToEdit,displayName:req.user?req.user.displayName:'' });
        }
    });
}

module.exports.processEditPage = (req, res, next) => {
    let id = req.params.id
    let updatedBook = Book({
        "_id": id,
        "name": req.body.name,
        "author": req.body.author,
        "published": req.body.published,
        "description": req.body.description,
        "price": req.body.price
    });
    console.log('req.body.price' , req.body)
    BusinessContact.updateOne({ _id: id }, updatedBook, (err) => {
        if (err) {
            console.log(err);
            res.end(err);
        }
        else {
            //console.log(businessContact);
            res.redirect('/business_contact');
        }
    });
}

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