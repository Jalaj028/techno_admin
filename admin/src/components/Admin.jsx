import { Button, Card, TextField, Typography } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Admin() {
    // const navigate = useNavigate();
    const[email, setEmail] = useState("");
    const[password, setPassword] = useState("");
    return (<div>


        <div style={{display:"flex", justifyContent:"center", marginTop:200}}>
            <Card style={{padding:30}}>
            <div style={{textAlign:"center", color:"black", marginBottom:40}}>
            <Typography variant="h6">Signin as Admin</Typography>
        </div>
            <TextField
            id="outlined-basic" 
            label="Email" 
            variant="outlined"
            onChange={(e) => {
                setEmail(e.target.value);
            }}
            />
            <br /><br />
            <TextField 
            id="outlined-basic" 
            label="Password" 
            variant="outlined"
            onChange={(e) => {
                setPassword(e.target.value);
            }}
            type="password"
            />
            <br /><br />
            <div style={{display:"flex", justifyContent:"center"}}>
            <Button 
            variant="contained"
            onClick={() => {

                function callback2(data){
                //   if(data.message === "welcome to the admin dashboard") {
                //     alert("admin dashboard opened");
                // //  return(
                // //     <h1 style={{color: "white"}}>hello from adminlogin</h1>
                // //  )
                //localStorage.setItem("token", data.token)
                  if(data.token){localStorage.setItem("token", data.token)
                  window.location="/"
                alert("Admin logged in successfully")
                }
                  if(!data.token)alert("Admin email or password incorrect")
                  
                    // console.log(data.token);
                }

                function callback1(resp){
                    resp.json().then(callback2);
                }
                fetch("http://localhost:5000/admin/login", {
                    method:"POST",
                    body: JSON.stringify({
                        email: email,
                        password: password
                    }),
                    headers: {
                        "Content-type": "application/json",
                    }

                }).then(callback1)

            }}
            >Login</Button>
            </div>

            </Card>
        </div>

        </div>
    )
}

export default Admin;