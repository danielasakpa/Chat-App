import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import HttpsOutlinedIcon from '@mui/icons-material/HttpsOutlined';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';

const Register = () => {
    return (
        <Container component="main" maxWidth="md" id="form-container" >
            <Box sx={{display: 'flex', flexDirection: 'column', alignItems: 'center'}} >
            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <HttpsOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign up
             </Typography>
            <Box component="form" sx={{ mt: 1 }}>
              <TextField
              margin="normal"
              required
              fullWidth
              id="name"
              label="Enter User Name"
              name="name"
              autoComplete="name"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Enter Email"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              id="password"
              label="Password"
              name="password"
              autoComplete="password"
              autoFocus
            />
             <Button
              id="form-Button"
              type="submit"
              fullWidth
             >
                Sign up
            </Button>
            </Box>
            </Box>
        </Container>
    )
}

export default Register;