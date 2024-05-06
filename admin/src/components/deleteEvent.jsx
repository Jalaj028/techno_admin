import { Button, Card, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { Navigate, useParams } from "react-router-dom";

function Delete() {
    let { eventId } = useParams();
    console.log("hi there from event")

    const [events, setEvents] = useState([]);
    
   

    useEffect(() => {
        fetch("https://techno-admin.vercel.app/admin/events", {
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
    }else {
        return <div>
           <div
            style={{display: "flex", justifyContent:"center"}}
            >
            <h2>Delete Event</h2>
            </div>
        <EventCard event={event} />
        </div>
        }
    // return(
    //     <div>
            // <div
            // style={{display: "flex", justifyContent:"center"}}
            // >
            // <h2>Delete Event</h2>
            // </div>

    //     </div>
    // )
}
function EventCard(props) {
    console.log("hi there from event card")
    const event = props.event;
    return <div style={{display: "flex", justifyContent: "center"}}>
     <Card style={{
        margin: 10,
        width: 300,
        minHeight: 200
    }}>

        <Typography textAlign={"center"} variant="h5">{event.title}</Typography>
        <Typography textAlign={"center"} variant="subtitle1">{event.description}</Typography>
        <Typography textAlign={"center"} variant="subtitle1">{event.date}</Typography>
        <Typography textAlign={"center"} variant="subtitle1">{event.time}</Typography>
        <Typography textAlign={"center"} variant="subtitle1">{event.venue}</Typography>
        <Typography textAlign={"center"} variant="subtitle1" type={"link"}>{event.link}</Typography>

        {/* <img src={course.imageLink} style={{width: 300}} ></img> */}
        <div 
        style={{textAlign:"center", margin:10}}
        >
        <Button
         size={"large"}
         variant="contained"
         onClick={ async() => {
            alert("Event will be permanently deleted")
            try{
                await fetch("https://techno-admin.vercel.app/admin/events/" + event._id, {
                    method:"DELETE", 
                    headers: {
                        "Content-type": "application/json",
                        "Authorization": "Bearer " + localStorage.getItem("token")
                    }
    
                })
             alert("event deleted successfully");
             window.location = "/events";

          

            }
          catch(error){
            console.log(error.message);
            res.status(404).send(error.message);
          }
            
             
           
            
         }}
        >delete</Button>
        </div>
       
    </Card>
    </div>
}

export default Delete;