const mongoose = require("mongoose");

//Mongoose schemas

const adminSchema = new mongoose.Schema({
    email: {type: String}, 
    password: {type: String}
})

const eventSchema = new mongoose.Schema({
    title: { type: String },
    description: { type: String},
    date: { type: String},
    time: { type: String},
    venue: { type: String},
    link:  { type: String},
    Banner: {type: String}
})

const Event = mongoose.model('Event', eventSchema);
const Admin = mongoose.model('Admin', adminSchema);

module.exports = {Event, Admin};