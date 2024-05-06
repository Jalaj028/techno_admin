import { Card } from "@mui/material";
import { useEffect, useState } from "react"
import { useParams, Navigate } from "react-router-dom";
import { Typography, TextField, Button } from "@mui/material";
import Loading from "./Loading"

function Event() {
    let { eventId } = useParams();
    console.log("hi there from event")

    const [events, setEvents] = useState([]);
    
   

    useEffect(() => {
        fetch("http://localhost:5000/admin/events", {
            method: "GET",
            headers: {
                "Authorization": "Bearer " +  localStorage.getItem("token")
              }
        }).then((resp) => {
            return resp.json().then((data) => {
                setEvents(data);

            })
        });
    }, [])

    console.log(events);
    
    let event;

    console.log(event);
    console.log(eventId);
    // console.log(events[1].id);


    for (let i = 0; i < events.length; i++) {
        if(events[i]._id === eventId){
            console.log("condir=tion true for", events[i])
            // event = events[i]
            event = events[i];
        }
    }

    console.log(event)

    if (!event) {
        return <div>
            {console.log("hitting loading component")}
            {/* <Loading /> */}
           
        </div>
    }

    else{return <div>
        <EventCard event={event} />
        <UpdateCard events={events} event={event} setEvents={setEvents} />
    </div>}
}

function UpdateCard(props) {
    console.log("hi there from update card")
    const [title, setTitle] = useState(props.event.title);
    const [description, setDescription] = useState(props.event.description);
    const [date, setDate] = useState(props.event.date);
    const [time, setTime] = useState(props.event.time);
    const [venue, setVenue] = useState(props.event.venue);
    const [link, setLink] = useState(props.event.link);
    const [banner, setBanner] = useState(props.event.banner);
   
    const event = props.event;

    return (
        <div style={{display: "flex", justifyContent: "center"}}>
            <Card variant={"outlined"} style={{width: 400, padding: 20}}>
                <Typography>Update Event details</Typography>
                <br /><br />
                <TextField
                    onChange={(e) => setTitle(e.target.value)}
                    value={title}
                    fullWidth={true}
                    label="Title"
                    variant="outlined"
                />
                <br /><br />

                <TextField
                    onChange={(e) => setDescription(e.target.value)}
                    value={description}
                    fullWidth={true}
                    label="Description"
                    variant="outlined"
                />
                <br /> <br />

                <TextField
                    onChange={(e) => setDate(e.target.value)}
                    value={date}
                    fullWidth={true}
                    label="Date"
                    variant="outlined"
                />
                <br /><br />

                <TextField
                    onChange={(e) => setTime(e.target.value)}
                    value={time}
                    fullWidth={true}
                    label="Time"
                    variant="outlined"
                />
                <br /><br />

                <TextField
                    onChange={(e) => setVenue(e.target.value)}
                    value={venue}
                    fullWidth={true}
                    label="Venue"
                    variant="outlined"
                />
                <br /> <br />

                <TextField
                    onChange={(e) => setLink(e.target.value)}
                    fullWidth={true}
                    value={link}
                    label="Link"
                    variant="outlined"
                />
                <br /><br />

                <TextField
                    onChange={(e) => setBanner(e.target.value)}
                    fullWidth={true}
                    label="Image link"
                    variant="outlined"
                    value={props.event.banner}
                /> 
                <br /><br />

                <Button
        size={"large"}
        variant="contained"
        onClick={() => {
            function callback2(data) {
                let updatedEvents = [];
                for (let i = 0; i<props.events.length; i++) {
                    
                    if (props.events[i]._id == event._id) {
                        updatedEvents.push({
                            id: event._id,
                            title: title,
                            description: description,
                            date: date, 
                            time: time,
                            venue: venue, 
                            link: link,
                            Banner: banner
                        })
                        alert("event updated")
                        window.location = "/events"
                    } else {
                        updatedEvents.push(props.events[i]);
                    }
                }
                props.setEvents(updatedEvents);
            }
            function callback1(res) {
                res.json().then(callback2)

                
            }
            fetch("http://localhost:5000/admin/events/" + event._id, {
                method: "PUT",
                body: JSON.stringify({
                    title: title,
                    description: description,
                    date: date, 
                    time: time,
                    venue: venue, 
                    link: link,
                    Banner: banner
                }),
                headers: {
                    "Content-type": "application/json",
                    "Authorization": "Bearer " + localStorage.getItem("token")
                }
            })
                .then(callback1)
        }}
    > Update Event</Button>
            </Card>
        </div>
    );
}

function EventCard(props) {
    console.log("hi there from update card")
    const event = props.event;
    return <div style={{display: "flex", justifyContent: "center"}}>
     <Card style={{
        margin: 10,
        width: 300,
        minHeight: 200
    }}>
        <img src={event.Banner} style={{width: "100%", height: "50%"}} />
        <Typography textAlign={"center"} variant="h5">{event.title}</Typography>
        <Typography textAlign={"center"} variant="subtitle1">{event.description}</Typography>
        <Typography textAlign={"center"} variant="subtitle1">{event.date}</Typography>
        <Typography textAlign={"center"} variant="subtitle1">{event.time}</Typography>
        <Typography textAlign={"center"} variant="subtitle1">{event.venue}</Typography>
        <Typography textAlign={"center"} variant="subtitle1" type={"link"}>{event.link}</Typography>
    </Card>
    </div>
}

export default Event;