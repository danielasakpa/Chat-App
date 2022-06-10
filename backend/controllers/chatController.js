import asyncHandler from "express-async-handler"
import Chat from "../model/chatModel.js"

//@desc Get chat
//@route GET /api/chat
// @access private
const getChat = asyncHandler(async (req, res) => {
    const Messages = await Chat.find({group: req.body.group})
    
    res.status(200).json(Messages)
})

//@desc store chat
// @access private
const storeChat = asyncHandler(async (data) => {
      
      await Chat.create({
        text: data.text,
        group: data.group,
        user: data.user
    })
})

//@desc delete chat
//@route DELETE /api/chat
// @access private
// const deleteChat = asyncHandler(async (req, res) => {
//     const Message = await Chat.findById(req.params.id)
    
//     if(!Message) {
//         res.status(400)
//         throw new Error("Message not Found")
//     }
    
//     if(!req.user) {
//         res.status(401)
//         throw new Error('User not found')
//     }
    
//     //Make sure the login user matchs the Message user
//     if(Message.user.toString() !== req.user.id) {
//         res.status(401)
//         throw new Error("user not authorized")
//     }
    
//     await Message.remove()
    
//     res.status(200).json({id: req.params.id})
// })

export {getChat, storeChat} 