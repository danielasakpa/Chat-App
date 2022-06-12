import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Sidebar from "../components/Sidebar"



const Home = () => {
    
    return (
       <div id="home-container">
        <header className="home-header">
           
        </header>
        
        <Sidebar sidebar={"home-sidebar"} />
            
        <main className="home-content">
               <Box sx={{display: 'flex', flexDirection: 'column', alignItems: 'center'}} >
                  <Typography sx={{fontWeight: "bold", fontSize: "38px", color:  "#342E37"}} component="h2" variant="h5">
                     Join a group
                  </Typography>
                  <Box component="form" sx={{ mt: 1 }}>
                     <TextField
                      margin="normal"
                      required
                      fullWidth
                      id="room"
                      label="Enter Room Name"
                      name="room"
                      autoComplete="room"
                      autoFocus
                    />
                    <Button
                      id="room-Button"
                      fullWidth
                     >
                       Join
                    </Button>
                  </Box>
              </Box>
        </main>
        
        <footer className="home-footer">
        
        </footer>
      </div>
    )
}


export default Home;