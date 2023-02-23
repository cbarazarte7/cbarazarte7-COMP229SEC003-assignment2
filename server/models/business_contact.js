let mongoose = require('mongoose');
let businessContactModel = mongoose.Schema({
    name: String,
    number: Number,
    email: String
},
    {
        collection: "business_contact"
    });

module.exports = mongoose.model('business_contact', businessContactModel);