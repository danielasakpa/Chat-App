import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Typography, Button, Grid, CircularProgress } from "@mui/material";
import { getchat } from "../features/chat/chatSlice";
import Sidebar from "../components/Sidebar";
import { Link } from "react-router-dom";

const History = () => {
  const dispatch = useDispatch();

  const { chat, isLoading } = useSelector((state) => state.chat);

  const { user } = useSelector((state) => state.auth);

  const userId = user ? user._id : "no user";

  useEffect(() => {
    dispatch(getchat());
  }, []);

  return (
    <div id="home-container">
      <header className="home-header">
        <Link to="/" className="chat-link">
          <Button id="Leave-group-Button">Home</Button>
        </Link>
      </header>

      <Sidebar sidebar={"home-sidebar"} />

      <main className="history-Content">
        <Grid container spacing={2} p={3}>
          {chat
            ? chat.map((messageData) => {
                if (messageData.user === userId) {
                  if (isLoading) {
                    return (
                      <Grid item xs={12}>
                        <Typography
                          sx={{
                            p: 1,
                            width: "700px",
                            my: 3,
                            color: "#fff",
                            bacgroundColor: "rgb(33, 151, 139)"
                          }}
                          key={messageData.id}
                          className="usermessage"
                        >
                          <CircularProgress />
                        </Typography>
                      </Grid>
                    );
                  } else {
                    return (
                      <Grid item xs={12}>
                        <Typography
                          variant="h6"
                          sx={{
                            py: 1,
                            pr: 20,
                            textAlign: "left",
                            fontFamily: "Nunito",
                            fontSize: "20px",
                            color: "#fff",
                            bacgroundColor: "rgb(33, 151, 139)"
                          }}
                          key={messageData.id}
                          className="usermessage"
                        >
                          {messageData.text}
                          <Typography
                            sx={{
                              m: 0,
                              p: 0,
                              textAlign: "left",
                              fontFamily: "Nunito",
                              fontSize: "15px",
                              color: "#fff",
                              bacgroundColor: "rgb(33, 151, 139)"
                            }}
                            key={messageData.id}
                            className="usermessage"
                          >
                            {messageData.group}
                          </Typography>
                        </Typography>
                      </Grid>
                    );
                  }
                }
              })
            : "no user"}
        </Grid>
      </main>

      <footer className="home-footer"></footer>
    </div>
  );
};

export default History;
