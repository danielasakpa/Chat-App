import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import { FaSignInAlt, FaSignOutAlt, FaUserAlt } from "react-icons/fa";
import PermIdentityOutlinedIcon from '@mui/icons-material/PermIdentityOutlined';
import {
  Link
} from "react-router-dom";

const Header = () => {  
    return (
     <header className="main-header">
      <Container component="main" id="nav-container" maxWidth="md" >
        <div className="nav-logo">
           <Avatar sx={{ m: 2, bgcolor: 'secondary.main' }}>
            <PermIdentityOutlinedIcon />
          </Avatar>
        </div>
        <div className="nav-links">
           <ul>
            <li>
               <Link to="/register">
                  <Button
                    id="nav-Button"
                    type="submit"
                  >
                   <FaUserAlt />  Sign up
                 </Button>
                </Link>
            </li>
             <li>
               <Link to="/login">
                  <Button
                    id="nav-Button"
                    type="submit"
                  >
                  <FaSignInAlt />  Login
                 </Button>
               </Link>
            </li>
           </ul>
          </div>
      </Container>
     </header>
    )
}

export default Header;