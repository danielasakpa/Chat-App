import {useState, useEffect} from "react"
import { toast } from 'react-toastify'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { login, reset } from '../features/auth/authSlice'
import Header from "../components/Header"
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import HttpsOutlinedIcon from '@mui/icons-material/HttpsOutlined';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';

const Login = () => {
    
    const [formData, setFormData] = useState({
        email: "", 
        password: ""
      })
    
    const { email, password } = formData;
    
    const navigate = useNavigate()
    const dispatch = useDispatch()
    
    const { user, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.auth
  )
    
    useEffect(() => {
       if (isError) {
          toast.error(message)
       }

       if (isSuccess || user) {
          navigate('/')
       }
          
       dispatch(reset())
          
      }, [user, isError, isSuccess, message, navigate, dispatch])
    
    
      const onChange = (e) => {
          setFormData((prevData) => ({
              ...prevData,
              [e.target.name]: e.target.value,
          }))
      }
        
      const onSubmit = (e) => {
          e.preventDefault()
          
            const userData = {
                email,
                password
            }
            
              dispatch(login(userData))
      }  
      
       if(isLoading) {
          return (
            <div>
              <Backdrop
                sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                open={true}
              >
              <CircularProgress color="inherit" />
            </Backdrop>
         </div>
        )
      }
    
    
    
    return (
       <>
        <Header />
        <Container component="main" maxWidth="md" id="form-container" >
            <Box sx={{display: 'flex', flexDirection: 'column', alignItems: 'center'}} >
            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <HttpsOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Login
             </Typography>
            <Box component="form" sx={{ mt: 1 }} onSubmit={onSubmit}>
            <TextField
              margin="normal"
              required
              fullWidth
              value={email}
              id="email"
              label="Enter Email"
              name="email"
              autoComplete="email"
              onChange={onChange}
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              value={password}
              id="password"
              label="Password"
              name="password"
              autoComplete="password"
              onChange={onChange}
              autoFocus
            />
             <Button
              id="form-Button"
              type="submit"
              fullWidth
             >
                Login
            </Button>
            </Box>
            </Box>
        </Container>
      </>
    )
}

export default Login;


