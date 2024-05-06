//here we are basically creating a component for footer

import { Button, Card, Grid, IconButton, Typography } from "@mui/material";
import {Navigate, Route, Routes, useNavigate} from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";
import AdminLogin from "./AdminLogin";
import AddEvent from "./addEvent";
import Events from "./Events";


function Footer() {
  const date = new Date();

    return(
        <div style={{ height:"15vw", marginTop:"3vw", backgroundColor:"#00000011"}}>
            <Grid container style={{
            textAlign:"center"
        }}>
            <Grid item xs={12} md={4} lg={4}>
                <div style={{
               
                //  border: "2px solid black",
                    // textDecoration: "underline",
                    textAlign:"left",
                    padding: 10
                    // marginRight:"10px"
                }}><h2>Reach Us:</h2>
                {/* <br></br> */}
                <h4>
Birla Institute Of Applied Sciences
<br></br>
Address:
<br></br>
Bhimtal, Nainital Uttarakhand - 263136 India
 <br></br>
Have any questions?
<br></br>
info@birlainstitute.co.in
                </h4>
                
                </div>
        </Grid>
        <Grid item xs={12} md={4} lg={4}>
                <div style={{
                //     marginTop: 0, 
                //  border: "2px solid black",
                    textDecoration: "underline",
                    textAlign:"left"

                    // marginRight:"10px"
                }}><h2>Time:</h2>
            <Typography variant="h6"><strong>{date.toLocaleString()}</strong></Typography>
                
                </div>
        </Grid>
        <Grid item xs={12} md={4} lg={4}>
                <div style={{
                //     marginTop: 0, 
                //  border: "2px solid black",
                    textDecoration: "underline",
                    textAlign:"center"

                    
                }}><h2>Weather </h2></div>
        </Grid>
        </Grid>
        
           
        </div>
    )
    }
    
export default Footer;
