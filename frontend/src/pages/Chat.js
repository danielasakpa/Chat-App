import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getchat, reset } from "../features/chat/chatSlice";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import AvatarGroup from "@mui/material/AvatarGroup";
import TextField from "@mui/material/TextField";
import AddPhotoAlternateOutlinedIcon from "@mui/icons-material/AddPhotoAlternateOutlined";
import GifBoxOutlinedIcon from "@mui/icons-material/GifBoxOutlined";
import SendOutlinedIcon from "@mui/icons-material/SendOutlined";
import CircularProgress from "@mui/material/CircularProgress";
import InsertEmoticonOutlinedIcon from "@mui/icons-material/InsertEmoticonOutlined";
import Box from "@mui/material/Box";
import Sidebar from "../components/Sidebar";
import { Link } from "react-router-dom";

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

  // console.log(messageReceived)

  const { user } = useSelector((state) => state.auth);

  const userId = user ? user._id : "no user";

  const userName = user ? user.name : "no user";

  const userImage = user ? user.image : "no user";

  // console.log(chat)

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
    // dispatch(getchat())
  };

  const setUserImage = [];
 console.log(setUserImage)
  const imageArray = [];

  if (chat) {
    chat.map((usermessage) => {
      if (usermessage.group === roomJoined) {
        imageArray.push(usermessage.image);
      }
    });
  }

  function printRepeating(imageArray, n) {
    // Store elements and their counts in
    // hash table
    var mp = new Map();
    for (var i = 0; i < n; i++) {
      if (mp.has(imageArray[i]))
        mp.set(imageArray[i], mp.get(imageArray[i]) + 1);
      else mp.set(imageArray[i], 1);
    }

    // Since we want elements in same order,
    // we traverse array again and print
    // those elements that appear more than
    // once.
    for (var v = 0; v < n; v++) {
      if (mp.get(imageArray[v]) > 1) {
        setUserImage.push(imageArray[v] + " ");

        // This is tricky, this is done
        // to make sure that the current
        // element is not printed again
        mp.set(imageArray[v], 0);
      }
    }
  }

  // Driver code
  var n = imageArray.length;
  printRepeating(imageArray, n);

  return (
    <div id="chat-container">
      <header className="chat-header">
        <Link to="/" className="chat-link">
          <Button id="Leave-group-Button">Leave Group</Button>
        </Link>
        <AvatarGroup sx={{ m: 1 }} max={4}>
          {setUserImage.length >= 1
            ? setUserImage.map((userImages, item) => {
                return <Avatar key={item} alt={""} src={userImages} />;
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
          <GifBoxOutlinedIcon sx={{ m: 1 }} />
          <AddPhotoAlternateOutlinedIcon sx={{ m: 1 }} />
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
          <InsertEmoticonOutlinedIcon sx={{ m: 1 }} />
        </Box>
      </footer>
    </div>
  );
};

export default Chat;
