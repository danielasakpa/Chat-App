import Avatar from '@mui/material/Avatar';
import AvatarGroup from '@mui/material/AvatarGroup';
import TextField from '@mui/material/TextField';
import AddPhotoAlternateOutlinedIcon from '@mui/icons-material/AddPhotoAlternateOutlined';
import GifBoxOutlinedIcon from '@mui/icons-material/GifBoxOutlined';
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';
import InsertEmoticonOutlinedIcon from '@mui/icons-material/InsertEmoticonOutlined';
import Box from '@mui/material/Box';
import Sidebar from "../components/Sidebar"


const Chat = () => {
    
    
    const array = [
        {
            text: "Hello am daniel",
            username: "daniel"
        },
        {
            text: "Hello am ovie",
            username: "ovie"
        },
        {
            text: "nice to meetd rgrgggbb gbfgbg fbgfbgf bgfbg fngf you ovie",
            username: "daniel"
        },
        {
            text: "where are you from",
            username: "daniel"
        },
        {
            text: "i am from fgngfn ngfng dr gdrgbfb fgb fnghn gn ggngnigeria",
            username: "ovie"
        },
        {
            text: "Hello am henry",
            username: "henry"
        },
    ]
    
    
    
    return (
       <div id="chat-container">
        <header className="chat-header">
            <AvatarGroup sx={{m: 1}} max={4}>
              <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
              <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
              <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
              <Avatar alt="Agnes Walker" src="/static/images/avatar/4.jpg" />
              <Avatar alt="Trevor Henderson" src="/static/images/avatar/5.jpg" />
            </AvatarGroup>
        </header>
        
         <Sidebar sidebar={"chat-sidebar"} />
        
        <main className="chat-content">
           {
              array.map(meessage => {
                  if(meessage.username === "daniel") {
                     return <p className="usermessage">{meessage.text}</p>
                  } else {
                     return <p className="othermessage">{meessage.text}</p>
                  }
              })
            }
        </main>
        
        <footer className="chat-footer">
        <Box sx={{display: 'flex', justifyContent: "space-around", padding: "5px", alignItems: 'center'}} >
          <GifBoxOutlinedIcon sx={{m: 1}}/>
          <AddPhotoAlternateOutlinedIcon sx={{m: 1}} />
          <TextField
          id="outlined-multiline-static"
          fullWidth 
          multiline
          maxRows={4} 
          defaultValue="Hello"
          size="small"
        />
        <SendOutlinedIcon sx={{m: 1}} />
        <InsertEmoticonOutlinedIcon sx={{m: 1}} />
       </Box>
        </footer>
      </div>
    )
}


export default Chat;