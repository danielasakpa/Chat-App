import {useState, useEffect} from "react"
import { toast } from 'react-toastify'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { register, reset } from '../features/auth/authSlice'
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
import UploadButtons from "../components/imageUploadBtn"
import {
  ref,
  uploadBytes,
  getDownloadURL,
  listAll,
  list
} from "firebase/storage";
import { storage } from "../Assets/firebase";
import { v4 } from "uuid";

const Register = () => {

    const [formData, setFormData] = useState({
        name: "",
        email: "", 
        password: "",
        password2: ""
      })
    
    const [imageUpload, setImageUpload] = useState({
       name: ""
     });
    
   const [imageUrls, setImageUrls] = useState([]);
      
    // console.log(imageUpload.name + v4()
    
    const imagePath = `images/${imageUpload.name + v4()}`
    
    const uploadFile = () => {
        
    if(!name & !email & !password & !password2) {
         toast.error("fill a feilds")
    } else {
        
    if (imageUpload == null) return;
        
    const imageRef = ref(storage, imagePath);
    uploadBytes(imageRef, imageUpload).then((snapshot) => {
        
      toast.success('Photo uploaded', {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });

       getDownloadURL(snapshot.ref).then((url) => {
           
        setImageUrls([url]);
           
      });
        
      });
    }
  }
    
    const {name, email, password, password2} = formData;
    
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
          console.log(imageUrls[0])
          if(password !== password2) {
              toast.error("password do not match")
          } else { 
            const userData = {
                name,
                email,
                image: imageUrls[0],
                password
            }
           dispatch(register(userData)) 
      }  
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
        
   // console.log(formData)

    
    return (
      <>
        <Header />
        <Container component="main" maxWidth="md" id="form-container" >
            <Box sx={{display: 'flex', flexDirection: 'column', alignItems: 'center'}} >
            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <HttpsOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign up
             </Typography>
            <Box component="form" sx={{ mt: 1 }} onSubmit={onSubmit}>
              <TextField
              margin="normal"
              required
              fullWidth
              value={name}
              id="name"
              label="Enter User Name"
              name="name"
              autoComplete="name"
              onChange={onChange}
              autoFocus
            />
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
            <TextField
              margin="normal"
              required
              fullWidth
              value={password2}
              id="password2"
              label="Comfirm Password"
              name="password2"
              autoComplete="password2"
              onChange={onChange}
              autoFocus
            />
            <UploadButtons setImageUpload={setImageUpload} uploadFile={uploadFile}/>
             <Button
              id="form-Button"
              variant="contained"
              type="submit"
              fullWidth
             >
                Sign up
            </Button>
            </Box>
            </Box>
        </Container>
      </>
    )
}

export default Register