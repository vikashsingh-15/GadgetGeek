import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
   firstName:{
    type:String,
    required:true,
    trim:true
   },
   lastName:{
    type:String,
    trim:true
   },
   email:{
    type:String,
    required:true,
    trim:true,
    unique:true
   },
   password:{
    type:String,
    required:true
   }
});

const user=mongoose.model(`user`,userSchema);
export default user;