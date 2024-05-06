const express = require("express");
const router = express.Router();
const {Admin, Event} = require("../db")
const mongoose = require("mongoose");

router.get("/panel", (req, res) => {
    res.send("user panel route hit")
})

router.get("/events", async(req, res) => {
    const events = await Event.find({})
    res.json(events);
})

module.exports = router;
