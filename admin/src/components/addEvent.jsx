
import { Button, Card, TextField, Typography } from "@mui/material";
import React, { useState } from "react";


function AddEvent () {
    const[imageUrl, setimageUrl] = useState("");
    const[title, setTitle] = useState("");
    const[description, setDescription] = useState("");
    const[date, setDate] = useState("");
    const[time, setTime] = useState("");
    const[venue, setVenue] = useState("");
    const[link, setLink] = useState("");
    return (
        <div>
           <div 
          style={{
           display: "flex",
           justifyContent: "center"
          }}
          >
          <Card style={{
            width: 400,
            padding: 20,
            marginTop:40,
            border: "2px solid black"
          }}>
          <div>
            <Typography variant="h5">Add Event</Typography>
            <br />
          </div>
          <div>
          <TextField 
            onChange={(e) => {
            setTitle(e.target.value)
          }}
            fullWidth={true}
            label="Title"
            variant="outlined" />
               <br /> <br />
<TextField 
            onChange={(e) => {
            setDescription(e.target.value)
          }}
            fullWidth={true}
            label="Description"
            variant="outlined" />
             <br /> <br />
<TextField 
            onChange={(e) => {
            setDate(e.target.value)
          }}
            fullWidth={true}
            label="Date"
            variant="outlined" />
               <br /> <br />
<TextField 
            onChange={(e) => {
            setTime(e.target.value)
          }}
            fullWidth={true}
            label="Time"
            variant="outlined" />
               <br /> <br />
<TextField 
            onChange={(e) => {
            setVenue(e.target.value)
          }}
            fullWidth={true}
            label="Venue"
            variant="outlined" />
            <br /><br />

<TextField 
            onChange={(e) => {
            setLink(e.target.value)
          }}
            fullWidth={true}
            label="Google form link"
            variant="outlined" />
  <br /><br />
<TextField 
            onChange={(e) => {
            setimageUrl(e.target.value)
          }}
            fullWidth={true}
            label="Banner (500px X 500px)"
            variant="outlined" />
               <br /> <br />
          </div>
          
      
    

          <div
          style={{
            display:"flex",
            justifyContent:"center",
            marginTop: 10
          }}
          >
          <Button
          variant="contained"
          style={{backgroundColor: "white", color: "black"}}
          onClick={() => {
            fetch("https://techno-admin.vercel.app/admin/events",{
              method: "POST",
              body: JSON.stringify({
                title: title,
                description: description,
                date: date,
                time: time,
                venue: venue,
                link: link,
                Banner: imageUrl
              }),
              headers: {
                "Content-type": "application/json",
                "Authorization": "Bearer " +  localStorage.getItem("token")
            }
            }).then((resp) => {
              return resp.json().then((data) => {
                { alert("event Added")}
                window.location = "/events"
              })
            }).catch((error)=> {res.send(error.message)})
          }}
          >Add Event
          </Button>
          </div>
        
          </Card>

          </div>
         
          

        </div>

         
        
    )
}

export default AddEvent;