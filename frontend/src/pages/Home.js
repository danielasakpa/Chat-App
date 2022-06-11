import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';


const Home = () => {
    return (
       <div id="home-container">
        <header className="home-header">
           <p>Welcom</p>
        </header>
        
        <aside className="home-sidebar">
              <Box sx={{display: 'flex', flexDirection: 'column', alignItems: 'center'}} >
               <Avatar
                  alt="Remy Sharp"
                  src=""
                  sx={{ width: 68, height: 68 }}
                />
                <Typography id="username" component="h2" variant="h5">
                  Daniel
                </Typography>
                <Button
                  id="home-nav-Button"
                  fullWidth
                 >
                   Profile
                </Button>
                <Button
                  id="home-nav-Button"
                  fullWidth
                 >
                    View chat history
                </Button>
                <Button
                  id="home-nav-Button"
                  fullWidth
                 >
                    Logout
                </Button>
               </Box>
        </aside>
        
        <main className="home-content">
               <Box sx={{display: 'flex', flexDirection: 'column', alignItems: 'center'}} >
                  <Typography component="h2" variant="h5">
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