import Joi from "joi";
import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    userName: {
        type: String,
        required: true,
        unique: true
    }
})

const User = mongoose.model('users', userSchema)

async function validateUser(user){
   
    const schema = {
        email: Joi.string().required().email(),
        userName: Joi.string().required(),
        password : Joi.string().required()
  }
  return Joi.validate(user, schema)
}


exports.User = User
exports.validateUser = validateUser