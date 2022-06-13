import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { getchat, reset } from "../features/chat/chatSlice";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Sidebar from "../components/Sidebar";
import { Link } from "react-router-dom";

const Home = ({ socket, setroomJoined }) => {
  //Room State
  const [room, setRoom] = useState("");

  const joinRoom = () => {
    if (room !== "") {
      socket.emit("join_room", room);
      setroomJoined(room);
    }
  };

  const dispatch = useDispatch();

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(getchat());
  };

  return (
    <div id="home-container">
      <header className="home-header"></header>

      <Sidebar sidebar={"home-sidebar"} />

      <main className="home-content">
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center"
          }}
        >
          <Typography
            sx={{ fontWeight: "bold", fontSize: "38px", color: "#342E37" }}
            component="h2"
            variant="h5"
          >
            Join a group
          </Typography>
          <Box component="form" onSubmit={onSubmit} sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="room"
              label="Enter Room Name"
              name="room"
              autoComplete="room"
              onChange={(event) => {
                setRoom(event.target.value);
              }}
              autoFocus
            />
            <Link to="/chat" className="chat-link">
              <Button
                id="room-Button"
                onClick={joinRoom}
                type="submit"
                fullWidth
              >
                Join
              </Button>
            </Link>
          </Box>
        </Box>
      </main>

      <footer className="home-footer"></footer>
    </div>
  );
};

export default Home;
