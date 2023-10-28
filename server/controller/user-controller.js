import User from "../model/user-schema.js";

export const userSignup=async (request,response)=>{
    try{
        const exist=await User.findOne({email:request.body.email});
        if(exist){
            return response.status(401).json({message:"User already exist"}); 
        }

        const user=request.body;
        const newUser=new User(user);
        await newUser.save();
        response.status(201).json({message:"User created successfully"});
    }
    catch(error){
        response.status(500).json({message:error.message});
    }
    
}