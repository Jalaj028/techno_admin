//here we are basically creating a component for nav bar

import { Button, Card, IconButton, Typography } from "@mui/material";
import {Navigate, Route, Routes, useNavigate} from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";
import AdminLogin from "./AdminLogin";
import AddEvent from "./addEvent";
import Events from "./Events";


function AppbarAdmin() {
   const navigate = useNavigate();
    const[email, setEmail] = useState(null);
   

   useEffect(() => {

    function callback2(data) {
        
       if(data.email){
        setEmail(data.email);
       }
       
        // console.log(data);
    }

    function callback1(res) {
        res.json().then(callback2);
    }

   

     fetch("https://techno-admin.vercel.app/admin/me", {
        method: "GET",
        headers: {
          "Authorization": "Bearer " +  localStorage.getItem("token")
        }
     }).then(callback1)
   }, [])

   
   if(email){
    return (
    <>
    <div style={{
        display: "flex",
        justifyContent: "space-between",
        padding: 10,
        backgroundColor: "#00000011"

    }}>
        <div
        onClick={() => {
            navigate("/");
        }}
        >
            
        <Typography variant="h5" style={{fontWeight:"600"}}>Technoforum</Typography>
        </div>
        <div style={{display: "flex"}}>
        <div style={{
            padding: 10,
            backgroundColor:"#ffffff"
        }}>
           <strong>Admin-Email: </strong> {email}
        </div>
        <div style={{marginRight: 10}}>
       
        
<Button
         variant="contained" 
         style={{
            marginLeft: 10,
            color: "black",
            // border:"2px solid black",
            backgroundColor: 'white',
        }}
         onClick={() => {
            window.location = "/"
            
            // this is a lame method , this refreshes page every time ,window.location = "/signup"
              //navigate("/signup")
         }}
         ><strong>Home</strong></Button>
         <Button
         variant="contained" 
         style={{
            marginLeft: 10,
            color: "black",
            
            backgroundColor: 'white',
        }}
         onClick={() => {
            window.location = "/addEvent"
            
            // this is a lame method , this refreshes page every time ,window.location = "/signup"
              //navigate("/signup")
         }}
         ><strong>Add Event</strong></Button>

<Button
         variant="contained" 
         style={{
            marginLeft: 10,
            color: "black",
            backgroundColor: 'white',
        }}
         onClick={() => {
            window.location = "/events"
            
            // this is a lame method , this refreshes page every time ,window.location = "/signup"
              //navigate("/signup")
         }}
         ><strong>All Events</strong></Button>

<Button
         variant="contained" 
         style={{
            marginLeft: 10,
            color: "black",
            // border:"2px solid black"
            backgroundColor: 'white',
        }}
         onClick={() => {
            localStorage.setItem("token", null);
            window.location = "/"
            
            // this is a lame method , this refreshes page every time ,window.location = "/signup"
              //navigate("/signup")
         }}
         ><strong>Log Out</strong></Button>
        </div>
    </div>
    </div>
     <div
     style={{
         display:"flex",
         justifyContent:"center",
        //  border: "2px solid black", 
        //  backgroundColor:"#00000011"
        borderBottom:"2px solid black",
        borderTop:"2px solid black"
     }}
     >
        <img src={"/birla-logo.png"} alt="logo" width={"9%"} />
     <h2>Birla Institute of Applied Sciences<br></br>
         बिरला इंस्टीट्यूट ऑफ़ अप्लाइड साइंसेस<br></br>
         Bhimtal, Distt: Nainital, Uttarakhand- 263136</h2>

 
     </div>
     <div style={{
        display: "flex",
        flexWrap: "wrap", 
        justifyContent:"center"
     }}>
     {/* <AdminLogin></AdminLogin> */}
     {/* <AddEventCard></AddEventCard> */}
     {/* <ViewEventsCard></ViewEventsCard> */}
     </div>
     </>
    )
    
   }

   else{
    
    return (
    <>
    <div style={{
        display: "flex",
        justifyContent: "space-between",
        paddingTop: 10,
        backgroundColor:"#00000011"
    }}>

        <div>
        <Typography variant="h6">Technoforum</Typography>
        </div>
        <div>
        <Button
         variant="contained" 
         style={{margin: 10}}
         onClick={() => {
            // this is a lame method , this refreshes page every time ,window.location = "/signup"
              navigate("/admin")
         }}
         >Sign in</Button>
        </div>
    </div>
    <div>
    <div
     style={{
         display:"flex",
         justifyContent:"center",
        //  border: "2px solid black"
        // marginTop:"20px", 
        borderBottom:"2px solid black",
        borderTop:"2px solid black"

     }}
     >
        <img src={"/birla-logo.png"} alt="logo" width={"9%"} />
     <h2>Birla Institute of Applied Sciences<br></br>
         बिरला इंस्टीट्यूट ऑफ़ अप्लाइड साइंसेस<br></br>
         Bhimtal, Distt: Nainital, Uttarakhand- 263136</h2>

 
     </div>
    </div>
  
    </>)
}

   } 

   
export default AppbarAdmin;

//card for adding event

// function AddEventCard() {
//     const navigate = useNavigate();
//     return(
//         <div>
//               <div
//             style={{
//                 display:"flex", 
//                 textAlign:"center"
//             }}
//             >
//             <Card style={{
//             border: "2px solid black",
//             margin: 10,
//             width: 300,
//             minHeight:200,
//             padding: 10

//         }}>
//             <Typography textAlign={"center"} variant="h5">ADD EVENT</Typography>
//             <Typography textAlign={"center"} variant="subtitle1"></Typography>
//             <img src={"https://static.vecteezy.com/system/resources/previews/006/430/145/original/technology-background-concept-circuit-board-electronic-system-futuristic-hi-tech-light-on-dark-blue-free-vector.jpg"} style={{width: 300}}></img>
//             <Button 
//             size="large"
//             variant="contained"
//             style={{
//                 textAlign:"center"
//             }}
//             onClick={() => {
//                 navigate("/addEvent")
//             }}
//             >ADD</Button>
//         </Card>

//             </div>

//         </div>
//     )
//    }

// //Card for viewing all events

// function ViewEventsCard() {
//     const navigate = useNavigate();
 
//     return(
//         <div>
//               <div
//             style={{
//                 display:"flex", 
//                 textAlign:"center"
//             }}
//             >
//             <Card style={{
//             border: "2px solid black",
//             margin: 10,
//             width: 300,
//             minHeight:200,
//             padding: 10

//         }}>
//             <Typography textAlign={"center"} variant="h5">SEE ALL EVENTS</Typography>
//             <Typography textAlign={"center"} variant="subtitle1"></Typography>
//             <img src={"https://static.vecteezy.com/system/resources/previews/006/430/145/original/technology-background-concept-circuit-board-electronic-system-futuristic-hi-tech-light-on-dark-blue-free-vector.jpg"} style={{width: 300}}></img>
//             <Button 
//             size="large"
//             variant="contained"
//             style={{
//                 textAlign:"center"
//             }}
//             onClick={() => {
//                 navigate("/events")
//             }}

//             >SHOW</Button>
//         </Card>

//             </div>

//         </div>
//     )
//    }

