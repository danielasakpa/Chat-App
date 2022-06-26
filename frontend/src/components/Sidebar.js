import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout, reset } from "../features/auth/authSlice";
import {Avatar, Button, Box} from "@mui/material";
import { FaSignOutAlt } from "react-icons/fa";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";

const Sidebar = ({ sidebar }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user } = useSelector((state) => state.auth);

  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
  }, [user, navigate]);

  const onLogout = () => {
    dispatch(logout());
    dispatch(reset());
  };

  return (
    <aside className={sidebar}>
      <Box
        sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
      >
        <Avatar
          alt="Remy Sharp"
          src={user ? user.image : ""}
          sx={{ mt: 4, mb: 2, width: 100, height: 100 }}
        />
        <Typography id="username" component="h2" variant="h5">
          {user ? user.name.split(" ")[0] : ""}
        </Typography>
        <Button id="home-nav-Button">Profile</Button>
        <Link to="/history" className="chat-link">
          <Button id="home-nav-Button">View history</Button>
        </Link>
        <Button id="logout-Button" onClick={onLogout}>
          <FaSignOutAlt /> Logout
        </Button>
      </Box>
    </aside>
  );
};

export default Sidebar;
