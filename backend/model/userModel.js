import mongoose from "mongoose"

const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please enter name"]
    },
    email: {
        type: String,
        required: [true, "Please enter email"],
        unique: true
    },
    image: {
        type: String,
        required: [true, "Please select a image"],
        unique: true
    },
    password: {
        type: String,
        required: [true, "Please enter password"]
    },
},
{
    timestamps: true,
})

const User = mongoose.model("User", userSchema)

export default User