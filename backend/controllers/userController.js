import jwt from "jsonwebtoken"
import asyncHandler from "express-async-handler"
import User from "../model/userModel.js"
import bcrypt from "bcryptjs"


//@desc register user
//@route POST /api/user
// @access public
const registerUser = asyncHandler(async (req, res) => {
    const {name, email, password} = req.body
    
    if(!name || !email || !password) {
        res.status(400)
        throw new Error("please fill in  all fields")
    }
    
     //Check if the user exists
    
    const userExists = await User.findOne({email})
    
    if(userExists) {
        res.status(400)
        throw new Error("user already exists")
    }
    
    //Hash password
    
    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password, salt)
    
    const user = await User.create({
        name,
        email,
        password: hashedPassword
    })
    
    if(user) {
        res.status(200).json({
        _id: user.id,
        name: user.name,
        email: user.email,
        token: generateToken(user._id)
      })
    } else {
        res.status(400)
        throw new Error('invalid user data')
    }
})

//@desc login user
//@route POST /api/user
// @access public
const loginUser = asyncHandler(async (req, res) => {
    const {email, password} = req.body
    
    if(!email || !password) {
        res.status(400)
        throw new Error("please fill in  all fields")
    }
    
    const user = await User.findOne({email})
    
     if(user && (await bcrypt.compare(password, user.password))) {
        res.json({
         _id: user.id,
         name: user.name,
         email: user.email,
         token: generateToken(user._id)
        })
    } else {
        res.status(400)
        throw new Error('invalid user credentials')
    }
})

//@desc update user
//@route PUT /api/user/:id
// @access private
const updateUser = asyncHandler(async (req, res) => {
    const {email, password, name} = req.body
    
    if(!email || !password, !name) {
        res.status(400)
        throw new Error("please fill in  all fields")
    }

    // Check if the user exist
    const user = await User.findById(req.params.id)
    
    if(!user) {
        res.status(400)
        throw new Error("Message not Found")
    }
    
    //Hash password
    
    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password, salt)
    
    const updatededUser = await User.findByIdAndUpdate(req.params.id,{
        name,
        email,
        password: hashedPassword
    }, {new: true})
    
    res.status(200).json(updatededUser)
})


//@desc get user
//@route GET /api/user
// @access private
const getUser = asyncHandler(async (req, res) => {
    
})

//Generate a JWT Token

const generateToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET, {
        expiresIn: "3d"
    })
}


export {registerUser, loginUser, getUser, updateUser}