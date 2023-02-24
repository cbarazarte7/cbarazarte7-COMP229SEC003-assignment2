/* 
    business_contact.js
    Name: Carla Barazarte 
    StudentID: 301295205
    Date: 02/23/2023 
*/

let mongoose = require('mongoose');
let businessContactModel = mongoose.Schema({
    name: String,
    number: Number,
    email: String
},
    {
        collection: "business_contact"
    });
const collection = mongoose.model('business_contact', businessContactModel); 
 const defaultBusinessContacts = [{
 
    // Inserting default values
    name: "Mike Kant",
    number: "2029182132",
    email: "a@gmail.com"
  },
  {
 
    // Inserting default values
    name: "Laura Hardy",
    number: "2029182134",
    email: "laura@gmail.com"
  },
  {
 
    // Inserting default values
    name: "Ben Queen",
    number: "2029145134",
    email: "ben@gmail.com"
  },{
 
    // Inserting default values
    name: "Max Paint",
    number: "2029145134",
    email: "max@gmail.com"
  },{
 
    // Inserting default values
    name: "Clara Bent",
    number: "2349145134",
    email: "clara@gmail.com"
  }, {
 
    // Inserting default values
    name: "Mara Cart",
    number: "2349145564",
    email: "mara@gmail.com"
  }, {
 
    // Inserting default values
    name: "Lara Mart",
    number: "2349145564",
    email: "lara@gmail.com"
  }]
  collection.bulkWrite(
    defaultBusinessContacts.map((defaultBusinessContact) => 
      ({
        updateOne: {
          filter: { email : defaultBusinessContact.email },
          update: { $set: defaultBusinessContact },
          upsert: true
        }
      })
    )
  )
  module.exports = collection;