const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const {Event, Admin} = require("../db");
const jwt = require("jsonwebtoken");
const {SECRET} = require("../middleware/auth")
const {authenticateJwt} = require("../middleware/auth")
const bodyParser = require("body-parser");

express().use(bodyParser.json());

router.get("/panel", (req, res) => {
    res.send("Admin panel route hit")
})

//Admin
//no need of this array, admin credentials has been save in the db
// const ADMIN = [{
//     email: "email",
//     password: "password"//this will be encrypted
//     //email and password of technoforum
//   }]


  
   //admin login in route
  
   router.post("/login", async (req, res) => {
    console.log("login route hit");
    const {email, password} = req.body;
    const admin = await Admin.find({});
    var auth;
    if(admin[0].email == email && admin[0].password == password){
      auth = true;
    }

    if (auth) {
      const token = jwt.sign({ email, role: 'admin' }, SECRET, { expiresIn: '1h' });
      res.json({ message: 'Logged in successfully', token });
    } else {
      res.status(403).json({ message: 'Invalid username or password' });
    }
  });
  
  router.get('/me', authenticateJwt, (req, res) => {
    console.log()
    res.status(200).json({
      email: req.user.email
    })
  })


  router.put('/events/:eventId', authenticateJwt, async (req, res) => {
    const event = await Event.findByIdAndUpdate(req.params.eventId, req.body, { new: true });
    if (event) {
      res.json({ message: 'event updated successfully' });
    } else {
      res.status(404).json({ message: 'Event not found' });
    }
  });
  
  //api to get all events

  router.get("/events", authenticateJwt, async (req, res) => {
    console.log("get events route hit")
    const events = await Event.find({});
    console.log(events)
    res.json(events);
  });

  //api to add a new event

router.post("/events", authenticateJwt,async (req, res) => {
  const event = new Event(req.body);
  await event.save();
  res.json({ message: 'Event created successfully', eventId: event.id });
});

//api to delete an event

router.delete("/events/:eventId", authenticateJwt, async(req, res) => {
  const event = await Event.findByIdAndDelete(req.params.eventId, { new: true });
  if (event) {
    res.json({ message: 'event deleted successfully' });
  } else {
    res.status(404).json({ message: 'Event not found' });
  }
})

module.exports = router;