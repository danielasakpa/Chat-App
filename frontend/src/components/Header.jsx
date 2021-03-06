import {Avatar, Button, Container, Typography } from "@mui/material";
import { FaSignInAlt, FaSignOutAlt, FaUserAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="main-header">
      <Container component="main" id="nav-container" maxWidth="md">
        <div className="nav-logo">
          <Typography variant="h5">Chat App</Typography>
        </div>
        <div className="nav-links">
          <ul>
            <li>
              <Link to="/register">
                <Button id="nav-Button" type="submit">
                  <FaUserAlt /> Sign up
                </Button>
              </Link>
            </li>
            <li>
              <Link to="/login">
                <Button id="nav-Button" type="submit">
                  <FaSignInAlt /> Login
                </Button>
              </Link>
            </li>
          </ul>
        </div>
      </Container>
    </header>
  );
};

export default Header;
