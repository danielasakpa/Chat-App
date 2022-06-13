import axios from "axios";

const API_URL = "/api/groupchat";

//get chat
const getchat = async () => {
  const response = await axios.get(
    "https://chatappserver34.run-us-west2.goorm.io/api/groupChat"
  );

  if (response.data) {
    localStorage.setItem("chat", JSON.stringify(response.data));
  }

  return response.data;
};

const chatService = {
  getchat
};

export default chatService;
