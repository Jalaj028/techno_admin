const express = require("express");
const mongoose = require("mongoose");
require('dotenv').config();
const app = express();
const path = require("path");
const adminRouter = require("./routes/admin");
const clientRouter = require("./routes/user");
const cors = require("cors");
const bodyParser = require("body-parser");
const { authenticateJwt } = require("./middleware/auth");
const { Event } = require("./db/index");

app.use(bodyParser.json());
app.use(cors(
    {
        origin:["https://techno-admin-xzj6.vercel.app", "http://127.0.0.1:5173/"],
        methods:["GET", "POST", "PUT", "DELETE"],
        credentials: true
    }
));

// Serve static files
app.use(express.static(path.join(__dirname, '../client/build')));
//app.use('/adminpanel', express.static(path.join(__dirname, '../admin/dist')));

app.use("/admin", adminRouter);
app.use("/user", clientRouter);

app.post("/events", authenticateJwt, async (req, res) => {
    const event = new Event(req.body);
    await event.save();
    res.json({ message: 'Event created successfully', eventId: event.id });
});

// API to get all events
app.get("/events", authenticateJwt, async (req, res) => {
    console.log("get events route hit")
    const events = await Event.find({});
    console.log(events)
    res.json(events);
});

// Connect to MongoDB
mongoose.connect("mongodb+srv://technoforum010:Techno%401234@clustertechno.qd4wh0u.mongodb.net/", { dbName: "event" });

// // Catch-all route, redirecting to client app
// app.get('*', (req, res) => {
//     res.sendFile(path.join(__dirname, '../client/build/index.html'));
// });
// Define ports
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log("App started");
});

