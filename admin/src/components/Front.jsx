import { Grid, Typography } from "@mui/material";

function Front() {
    return(<div >
        <Grid container style={{
            // padding: "5vw"
        }}>
            <Grid item xs={12} md={6} lg={6}>
                <div style={{
                //     marginTop: 0, 
                //  border: "2px solid black",
                    textDecoration: "underline",
                    marginRight:"10px",
                    textAlign:"left",
                    marginTop:"5vw",
                    paddingRight:"10vw"
                }}>
                {/* <Typography variant="h3">Technoforum <br></br>Admin</Typography>
                <br /><br />
                <Typography variant="h4">Let's Learn, Imagine and Build</Typography> */}
                <h1>Technoforum Admin</h1>
    
                <h3> Admin panel for the technoforum website, from here the authorized admin 
                    can get, update, add, and delete the content in the main user side website
                </h3>
                </div>
             
            </Grid>
            <Grid item xs={12} md={6} lg={6} style={{marginTop:"5vw"}}>
                <img src={"/bias.png"} width={"100%"} />
            </Grid>
        </Grid>
    </div>)
}

export default Front;