import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import HttpsOutlinedIcon from '@mui/icons-material/HttpsOutlined';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';

const Login = () => {
    return (
        <Container component="main" maxWidth="md" id="form-container" >
            <Box sx={{display: 'flex', flexDirection: 'column', alignItems: 'center'}} >
            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <HttpsOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Login
             </Typography>
            <Box component="form" sx={{ mt: 1 }}>
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
            <TextField
              margin="normal"
              required
              fullWidth
              id="password2"
              label="Comfirm Password"
              name="password2"
              autoComplete="password2"
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
    )
}

export default Login;


