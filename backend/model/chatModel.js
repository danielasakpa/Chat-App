import mongoose from "mongoose"

const chatSchema = mongoose.Schema({
    user: {
        type: String,
        required: true,
        ref: "User"
    },name: {
        type: String,
        required: true,
        ref: "User"
    },image: {
        type: String,
        required: true,
        ref: "User"
    },group: {
        type: String,
        required: true,
    },text: {
        type: String,
        required: [true, 'please add a message'],
    }  
},
{
  timestamps: true,
 })

const Chat = mongoose.model("Chat", chatSchema)

export default Chat;