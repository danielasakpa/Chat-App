import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getchat, reset } from "../features/chat/chatSlice";
import {
  Avatar,
  Button,
  AvatarGroup,
  TextField,
  CircularProgress,
  Box
} from "@mui/material";
import Sidebar from "../components/Sidebar";
import { Link } from "react-router-dom";
import SendOutlinedIcon from "@mui/icons-material/SendOutlined";

const Chat = ({ socket, roomJoined }) => {
  // Messages States
  const [groupMessage, setGroupMessage] = useState("");
  const [messageReceived, setMessageReceived] = useState([]);

  console.log(groupMessage);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { chat, isLoading, isSuccess } = useSelector((state) => state.chat);

  useEffect(() => {
    socket.on("receive_message", (data) => {
      setMessageReceived((prev) => [...prev, data]);
    });
  }, [groupMessage, messageReceived]);

  const { user } = useSelector((state) => state.auth);

  const userId = user ? user._id : "no user";

  const userName = user ? user.name : "no user";

  const userImage = user ? user.image : "no user";

  const sendMessage = () => {
    socket.emit("send_message", {
      groupMessage,
      roomJoined,
      userId,
      userName,
      userImage
    });
  };

  useEffect(() => {
    dispatch(getchat());
  }, [messageReceived]);

  const onSubmit = (e) => {
    e.preventDefault();
  };

  const imageArray = [];
  let setUserImage = [];

  if (chat) {
    chat.map((usermessage) => {
      if (usermessage.group === roomJoined) {
        imageArray.push(usermessage.image);
      }
    });
  }

  const uniqueImg = imageArray.reduce(
    (unique, image) =>
      unique.indexOf(image) !== -1 ? unique : [...unique, image],
    []
  );

  setUserImage = uniqueImg;

  return (
    <div id="chat-container">
      <header className="chat-header">
        <Link to="/" className="chat-link">
          <Button id="Leave-group-Button">Leave Group</Button>
        </Link>
        <AvatarGroup sx={{ m: 1 }} max={4}>
          {setUserImage.length >= 1
            ? setUserImage.map((userImages, index) => {
                return <Avatar key={index} alt={""} src={userImages} />;
              })
            : "no user"}
        </AvatarGroup>
      </header>

      <Sidebar sidebar={"chat-sidebar"} />

      <main className="chat-content">
        {chat
          ? chat.map((messageData) => {
              if (messageData.group === roomJoined) {
                if (messageData.user === userId) {
                  if (isLoading) {
                    return (
                      <p key={messageData.id} className="usermessage">
                        <CircularProgress />
                      </p>
                    );
                  } else {
                    return (
                      <p key={messageData.id} className="usermessage">
                        {messageData.text}
                      </p>
                    );
                  }
                } else {
                  if (isLoading) {
                    return (
                      <p key={messageData.id} className="othermessage">
                        <CircularProgress />
                      </p>
                    );
                  } else {
                    return (
                      <>
                        <p key={messageData.id} className="othermessage">
                          {messageData.text}
                        </p>
                        <p key={messageData.user} className="username">
                          {messageData.name}
                        </p>
                      </>
                    );
                  }
                }
              }
            })
          : "no user"}
      </main>

      <footer className="chat-footer">
        <Box
          component="form"
          onSubmit={onSubmit}
          sx={{
            display: "flex",
            justifyContent: "space-around",
            padding: "5px",
            alignItems: "center"
          }}
        >
          <TextField
            id="outlined-multiline-static"
            fullWidth
            multiline
            maxRows={4}
            defaultValue="Hello"
            onChange={(event) => {
              setGroupMessage(event.target.value);
            }}
            size="small"
          />
          <button
            type="submit"
            onClick={sendMessage}
            style={{ cursor: "pointer" }}
          >
            <SendOutlinedIcon sx={{ m: 1 }} />
          </button>
        </Box>
      </footer>
    </div>
  );
};

export default Chat;
