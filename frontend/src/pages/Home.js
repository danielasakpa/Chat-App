import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { logout, reset } from '../features/auth/authSlice'
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import { FaSignOutAlt } from "react-icons/fa";
import Typography from '@mui/material/Typography';


const Home = () => {
    
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const { user } = useSelector((state) => state.auth)
    
  useEffect(() => {
    if (!user) {
      navigate('/login')
    }
  }, [])
    
   const onLogout = () => {
    dispatch(logout())
    dispatch(reset())
    navigate('/login')
  }
    
    return (
       <div id="home-container">
        <header className="home-header">
           
        </header>
        
        <aside className="home-sidebar">
               <Box sx={{display: 'flex', flexDirection: 'column', alignItems: 'center'}} >
               <Avatar
                  alt="Remy Sharp"
                  src=""
                  sx={{ mt: 4, mb: 2, width: 100, height: 100 }}
                />
                <Typography id="username" component="h2" variant="h5">
                  Daniel
                </Typography>
                <Button
                  id="home-nav-Button"
                 >
                   Profile
                </Button>
                <Button
                  id="home-nav-Button"
                 >
                    View history
                </Button>
                <Button
                  id="logout-Button"
                  onClick={onLogout}
                 >
                  <FaSignOutAlt />  Logout
                </Button>
               </Box>
        </aside>
        
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